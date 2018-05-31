import React, { Component } from 'react';
// import logo from './logo.svg';
import API from "./api";
import Panel from "./Components/Panel";
import Panel2 from "./Components/Panel2";

class App2 extends Component {

    /**
     * Initiates the state of the component
     * @param props gene list, global default and panel config
     */
    constructor(props) {
        super(props);
        this.state = {
            currentGenePanel: [],
            currentGenes: [],
            geneList: this.props.geneList,
            globalDefault: JSON.parse(JSON.stringify(this.props.globalDefault)),
            searchValue: "",
            sortColumn: ["name", true],
            showModified: true
        };
    }

    /**
     * Starts the creation of the other components
     */
    componentDidMount() {
        this.createHeadings();
        this.createGenes();
    }

    /**
     * Creates the table headings
     */
    createHeadings() {
        const values = {
            "name": "Gene name",
            "key": "Gene key",
            "inheritance": "Inheritance",
            "freqExHi": "Frequency HI external",
            "freqInHi": "Frequency HI internal",
            "freqExLo": "Frequency LOW external",
            "freqInLo": "Frequency LOW internal",
            "disease_mode": "Disease mode",
            "last_exon_important": "Last exon important",
            "comment": "Comment"
        };

        // Creates a heading for each entry in "values"
        const headings = [];
        for (const i in values) {
            headings.push(<th onClick={this.sortTable.bind(this, i)}>{values[i]}</th>);
        }

        this.setState({
            headings: headings
        });
    }

    /**
     * Changes the column used for sorting the genes based on which heading is clicked
     * @param column the table header that was clicked in the browser
     */
    sortTable(column) {
        let order = true;
        if (this.state.sortColumn[0] === column && this.state.sortColumn[1]) {
            order = false;
        }
        this.setState({
            sortColumn: [column, order]
        });
    }

    /**
     * Toggles the state variable handling if all or only modified genes should be shown
     */
    toggleModified() {
        this.setState({
            showModified: (!this.state.showModified)
        });
    }

    /**
     * Changes the search value
     * @param event
     */
    changeSearch(event) {
        this.setState({
            searchValue: event.target.value.toUpperCase()
        });
    }

    /**
     * Creates an array of genes based on the imported gene list
     */
    createGenes() {
        const list = API.getGeneList();
        let genes = [];
        for (const i in list){
            genes[i] = this.createGene(i, list[i]);
        }
        this.setState({
            currentGenes: genes
        }, function() {
            this.adaptToConfig();
        });

    }

    /**
     * Modifies the gene values based on the imported gene panel config
     */
    adaptToConfig() {
        //bytte i API så den går videre til de forskjellige configsa, og bruke samme hele tia her
        const genes = JSON.parse(JSON.stringify(API.getModifiedPanel().data.genes));
        const panel = this.state.currentGenes;
        const config = JSON.parse(JSON.stringify(API.getModifiedPanel().data));

        // console.log(genes);
        // console.log(this.state.currentGenes);
        for (const geneName in genes) {
            const inheritance = (panel[geneName].inheritance === "AD") ? "AD" : "default";
            const cutoffs = config.freq_cutoff_groups[inheritance];

            panel[geneName].freqExHi = cutoffs.external.hi_freq_cutoff;
            panel[geneName].freqExLo = cutoffs.external.lo_freq_cutoff;
            panel[geneName].freqInHi = cutoffs.internal.hi_freq_cutoff;
            panel[geneName].freqInLo = cutoffs.internal.lo_freq_cutoff;
            panel[geneName].disease_mode = config.disease_mode;
            panel[geneName].last_exon_important = config.last_exon_important;
            panel[geneName].comment = config.comment;

            //mulig denne må utbedres til å inkludere alle 4 freqs
            for (const property in genes[geneName]){
                panel[geneName][property] = genes[geneName][property];
                if (property === "internal" || property === "external") {
                    if (panel[geneName][property].hi_freq_cutoff === undefined) {
                        panel[geneName][property].hi_freq_cutoff = cutoffs[property].hi_freq_cutoff;
                    }
                    if (panel[geneName][property].lo_freq_cutoff === undefined) {
                        panel[geneName][property].lo_freq_cutoff = cutoffs[property].lo_freq_cutoff;
                    }
                }
            }
        }
        this.setState({
            currentGenes: panel
        }, function() {
            // this.createGeneComponents();
        });
    }

    /**
     * Changes the comment value for a specific gene
     * @param event input from the browser
     */
    changeComment(event) {
        // "\n" is added to the comment because of textarea, but it works as far as I've tested it.
        const info = event.target.id.split(";");
        const geneId = info[1];
        const genes = this.state.currentGenes;

        // Changes the value
        genes[geneId].comment = event.target.value;

        // Updates the value
        this.setState({
            currentGenes: genes
        }, function() {
            // this.createGeneComponents();
        });
    }

    /**
     * Triggers the change of the comment when the element loses focus
     */
    blurComment(event) {
        this.changeCommentClass(event);
        this.changeComment(event);
    }

    /**
     * Changes the CSS class of the comment-element for appearance purposes
     */
    changeCommentClass(event) {
        const info = event.target.id.split(";");
        const geneId = info[1];
        const genes = this.state.currentGenes;

        genes[geneId].commentClass = (this.state.commentClass === "comment") ? "comment comment_test" : "comment";

        this.setState({
            currentGenes: genes
            // commentClass: (this.state.commentClass === "comment") ? "comment comment_test" : "comment" // bytt så det ikke er comment_test
        });
    }

    /**
     * Changes a specific value of a specific gene
     * This is for all regular genes
     * @param event input from the browser
     */
    changeValue(event) {
        const info = event.target.id.split(";");
        const exIn = info[0];
        const hiLo = info[1];
        const geneId = info[2];
        const genes = this.state.currentGenes;

        // Checks that the entered value is a valid number
        const value = event.target.value.replace(",", ".");
        const pattern = new RegExp("([0-9.,]){" + value.length + "}");
        if (pattern.test(value) && !isNaN(Number(value))) {

            // Changes the appropriate value
            if (exIn === "ex" && hiLo === "Hi") {
                genes[geneId].freqExHi = value;
            } else if (exIn === "ex" && hiLo === "Lo") {
                genes[geneId].freqExLo = value;
            } else if (exIn === "in" && hiLo === "Hi") {
                genes[geneId].freqInHi = value;
            } else if (exIn === "in" && hiLo === "Lo") {
                genes[geneId].freqInLo = value;
            }
        }

        // Updates the value
        this.setState({
            currentGenes: genes
        }, function() {
            // this.createGeneComponents();
        });
    }

    /**
     * Creates a gene based on the given gene name and information
     */
    createGene(name, geneInfo) {
        const globalDefault = JSON.parse(JSON.stringify(this.props.globalDefault));

        let tempInheritance = (geneInfo.inheritance === "AD") ? "AD" : "default";
        let external = globalDefault.freq_cutoffs[tempInheritance].external;
        let internal = globalDefault.freq_cutoffs[tempInheritance].internal;

        return {
            "key": geneInfo.id,
            "name": name,
            "inheritance": geneInfo.inheritance,
            "freqExHi": external.hi_freq_cutoff,
            "freqInHi": internal.hi_freq_cutoff,
            "freqExLo": external.lo_freq_cutoff,
            "freqInLo": internal.lo_freq_cutoff,
            "disease_mode": globalDefault.disease_mode,
            "last_exon_important": globalDefault.last_exon_important,
            "commentClass": "comment"
        };
    }

    /**
     * PLACEHOLDER Generates a new config with new values based on user input and saves them through the API
     */
    savePanel() {
        console.log("Panel saved");
    }

    /**
     * Checks if any of the values of a gene matches whatever is typed in the search box
     * @param gene the gene to be checked
     * @returns {boolean} true if it matches any of the values of the gene
     */
    isSearched(gene) {
        const currentValues = [
            gene.name,
            gene.key,
            gene.freqExHi,
            gene.freqInHi,
            gene.freqExLo,
            gene.freqInLo,
            gene.disease_mode,
            gene.last_exon_important
        ];

        let searched = false;

        for (const i in currentValues) {
            if ((""+ currentValues[i]).indexOf(this.state.searchValue) !== -1) {
                searched = true;
            }
        }
        return searched;
    }

    /**
     * Checks if the provided gene differs from both the global and gene panel default
     * @param gene the gene to be checked
     * @returns {boolean} true if gene differs from both
     */
    isModified(gene) {
        return (this.isDifferentThanGlobal(gene) && this.isDifferentThanConfig(gene));
    }

    /**
     * Checks if the provided gene differs from the global default
     * @param gene the gene to be checked
     * @returns {boolean} true if the gene differs from the global default
     */
    isDifferentThanGlobal(gene) {
        const inheritance = (gene.inheritance === "AD") ? "AD" : "default";
        const currentValues = [
            Number(gene.freqExHi),
            Number(gene.freqInHi),
            Number(gene.freqExLo),
            Number(gene.lo_freq_cutoff),
            gene.disease_mode,
            gene.last_exon_important,
            (gene.comment !== undefined) ? gene.comment : ""
        ];
        const globalDefaults = [
            this.props.globalDefault.freq_cutoffs[inheritance].external.hi_freq_cutoff,
            this.props.globalDefault.freq_cutoffs[inheritance].internal.hi_freq_cutoff,
            this.props.globalDefault.freq_cutoffs[inheritance].external.lo_freq_cutoff,
            this.props.globalDefault.freq_cutoffs[inheritance].internal.lo_freq_cutoff,
            this.props.globalDefault.disease_mode,
            this.props.globalDefault.last_exon_important,
            ""
        ];

        let modified = false;
        for (const i in currentValues) {
            if (currentValues[i] !== globalDefaults[i]) {
                modified = true;
            }
        }
        return modified;
    }

    /**
     * Checks if the provided gene differ from the gene panel config default
     * @param gene the gene to be checked
     * @returns {boolean} true if the gene differs from the gene panel config default
     */
    isDifferentThanConfig(gene) {
        const inheritance = (gene.inheritance === "AD") ? "AD" : "default";
        const currentValues = [
            Number(gene.freqExHi),
            Number(gene.freqInHi),
            Number(gene.freqExLo),
            Number(gene.freqInLo),
            gene.disease_mode,
            gene.last_exon_important,
            (gene.comment !== undefined) ? gene.comment : ""
        ];
        const groupDefaults = [
            this.props.panelConfig.data.freq_cutoff_groups[inheritance].external.hi_freq_cutoff,
            this.props.panelConfig.data.freq_cutoff_groups[inheritance].internal.hi_freq_cutoff,
            this.props.panelConfig.data.freq_cutoff_groups[inheritance].external.lo_freq_cutoff,
            this.props.panelConfig.data.freq_cutoff_groups[inheritance].internal.lo_freq_cutoff,
            this.props.panelConfig.data.disease_mode,
            this.props.panelConfig.data.last_exon_important,
            ""
        ];

        let modified = false;
        for (const i in currentValues) {
            if (currentValues[i] !== groupDefaults[i]) {
                modified = true;
            }
        }
        return modified;
    }


    /**
     * Sorts the given genes based on the sortColumn variable
     * @param genes Genes to be sorted
     * @returns {*} the same genes sorted in the correct order
     */
    sortByColumn(genes) {
        const column = this.state.sortColumn[0];

        if (genes[0] !== undefined) {
            // checks if the column contains text or numbers, and sorts accordingly
            if (/freq|key/.test(column)){
                return genes.sort(function(a, b) {
                    return a[column] - b[column];
                });
            } else {
                return genes.sort(function(a, b) {
                    return a[column].localeCompare(b[column]);
                });
            }
        } else {
            return genes;
        }
    }

  render() {

      let genes = [];
      // let extendedGenes = this.createGlobalAndPanelGene();
      let gene;

      for (const i in this.state.currentGenes) {
          gene = this.state.currentGenes[i];

          if (this.isModified(gene) || this.state.showModified === false) {
              if (this.isSearched(gene)) {
                  genes.push(gene);
              }
          }
      }

      genes = this.sortByColumn(genes);
      if (!this.state.sortColumn[1]) {
          genes.reverse();
      }

    return (
        <div>
            <Panel2
                toggleModified={this.toggleModified.bind(this)}
                showModified={this.state.showModified}
                changeSearch={this.changeSearch.bind(this)}
                savePanel={this.savePanel}
                searchValue={this.state.searchValue}
                headings={this.state.headings}
                genes={this.state.currentGenes}
                changeCommentClass={this.changeCommentClass.bind(this)}
                blurComment={this.blurComment.bind(this)}
                changeValue={this.changeValue.bind(this)}

            />
        </div>
    );
  }
}

export default App2;
