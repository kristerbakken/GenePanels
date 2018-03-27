import React from 'react';
import Gene from "./Gene";
import API from "../api";
import ToolsPanel from "./ToolsPanel";

/**
 * React component that handles most parts of the application
 */
export default class Panel extends React.Component {

    /**
     * Initiates the state of the component
     * @param props gene list, global default and panel config
     */
    constructor(props) {
        super(props);
        this.state = {
            currentGenePanel: [],
            group: "default",
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
     * Changes the search value
     * @param event
     */
    changeSearch(event) {
        this.setState({
            searchValue: event.target.value.toUpperCase()
        });
    }

    /**
     * Changes to values of the panel config
     * This is for the panelConfig gene
     * @param event input from the browser
     */
    changePanelConfig(event) {
        const info = event.target.id.split(";");
        const exIn = info[0];
        const hiLo = info[1];
        const geneId = info[2];
        const inheritance = info[3];
        const genes = this.props.panelConfig.data.freq_cutoff_groups[inheritance];

        if (geneId === "panelConfig") {

            // Checks that the entered value is a valid number
            const value = event.target.value.replace(",", ".");
            const pattern = new RegExp("([0-9.,]){" + value.length + "}");
            if (pattern.test(value) && !Number.isNaN(Number(value))) {

                // Changes the appropriate value
                if (exIn === "ex" && hiLo === "Hi") {
                    genes.external.hi_freq_cutoff = value;
                } else if (exIn === "ex" && hiLo === "Lo") {
                    genes.external.lo_freq_cutoff = value;
                } else if (exIn === "in" && hiLo === "Hi") {
                    genes.internal.hi_freq_cutoff = value;
                } else if (exIn === "in" && hiLo === "Lo") {
                    genes.internal.lo_freq_cutoff = value;
                }
            }

            // recalculates the components to represent the modified panel config
            this.createGeneComponents();
        }
    }

    /**
     * Changes a specific value of a specific gene
     * This is for all regular genes
     * @param event input from the browser
     */
    changeGeneValue(event) {
        const info = event.target.id.split(";");
        const exIn = info[0];
        const hiLo = info[1];
        const geneId = info[2];
        const genes = this.state.currentGenePanel;


        // Checks that the entered value is a valid number
        const value = event.target.value.replace(",", ".");
        const pattern = new RegExp("([0-9.,]){" + value.length + "}");
        if (pattern.test(value) && !isNaN(Number(value))) {

            // Changes the appropriate value
            if (exIn === "ex" && hiLo === "Hi") {
                genes[geneId].external.hi_freq_cutoff = value;
            } else if (exIn === "ex" && hiLo === "Lo") {
                genes[geneId].external.lo_freq_cutoff = value;
            } else if (exIn === "in" && hiLo === "Hi") {
                genes[geneId].internal.hi_freq_cutoff = value;
            } else if (exIn === "in" && hiLo === "Lo") {
                genes[geneId].internal.lo_freq_cutoff = value;
            }
        }

        // Updates the value
        this.setState({
            currentGenePanel: genes
        }, function() {
            this.createGeneComponents();
        });
    }

    /**
     * Changes the chosen option for disease mode or last exon important for a specific gene
     * This is for the regular genes
     * @param event input from the browser
     */
    changeOption(event) {
        const info = event.target.id.split(";");
        const dmLei = info[0];
        const geneId = info[1];
        const genes = this.state.currentGenePanel;

        // Checks if it is disease mode or last exon important that should be changed
        if (dmLei === "dm") {
            genes[geneId].disease_mode = event.target.value;
        } else {
            genes[geneId].last_exon_important = event.target.value;
        }

        // updates the value
        this.setState({
            currentGenePanel: genes
        }, function() {
            this.createGeneComponents();
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
        const genes = this.state.currentGenePanel;

        // Changes the value
        genes[geneId].comment = event.target.value;

        // Updates the value
        this.setState({
            currentGenePanel: genes
        }, function() {
            this.createGeneComponents();
        });
    }

    /**
     * Creates the table headings
     */
    createHeadings() {
        const values = {
            "name": "Gene name",
            "key": "Gene key",
            "inheritance": "Inheritance",
            "frequency_hi_external": "Frequency HI external",
            "frequency_hi_internal": "Frequency HI internal",
            "frequency_low_external": "Frequency LOW external",
            "frequency_low_internal": "Frequency LOW internal",
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
     * Sorts the given genes based on the sortColumn variable
     * @param genes Genes to be sorted
     * @returns {*} the same genes sorted in the correct order
     */
    sortByColumn(genes) {
        const column = this.state.sortColumn[0];

        if (genes[0] !== undefined) {

            // checks if the column contains text or numbers, and sorts accordingly
            if (/freq|key/.test(column)){
                if (/key/.test(column)) {
                    return genes.sort(function(a, b) {
                        return a.props.values[column] - b.props.values[column];
                    });
                }else {
                    let inEx = "internal";
                    let hiLo = "lo";
                    if (/ex/.test(column)) {
                        inEx = "external";
                    }
                    if (/hi/.test(column)) {
                        hiLo = "hi";
                    }
                    return genes.sort(function(a, b) {
                        return a.props.values[inEx][hiLo + "_freq_cutoff"] - b.props.values[inEx][hiLo + "_freq_cutoff"];
                    });
                }
            } else {
                return genes.sort(function(a, b) {
                    return a.props.values[column].localeCompare(b.props.values[column]);
                });
            }
        } else {
            return genes;
        }
    }

    /**
     * Creates an array of genes based on the imported gene list
     */
    createGenes() {
        const list = this.props.geneList;
        let genes = [];
        for (const i in list){
            genes[i] = this.createGene(i, list[i]);
        }
        this.setState({
            currentGenePanel: genes
        }, function() {
            this.adaptToConfig();
        });
    }

    /**
     * Modifies the gene values based on the imported gene panel config
     */
    adaptToConfig() {
        const genes = JSON.parse(JSON.stringify(this.props.panelConfig.data.genes));
        const panel = this.state.currentGenePanel;
        const config = JSON.parse(JSON.stringify(this.props.panelConfig.data));

        for (const geneName in genes) {
            const inheritance = (panel[geneName].inheritance === "AD") ? "AD" : "default";
            const cutoffs = config.freq_cutoff_groups[inheritance];

            panel[geneName].internal = cutoffs.internal;
            panel[geneName].external = cutoffs.external;
            panel[geneName].disease_mode = config.disease_mode;
            panel[geneName].last_exon_important = config.last_exon_important;

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
            currentGenePanel: panel
        }, function() {
            this.createGeneComponents();
        });
    }

    /**
     * Creates the gene components
     */
    createGeneComponents() {
        const allGenes = [];
        let gene;
        const defaultValues = this.props.globalDefault;
        const groupValues = this.props.panelConfig.data;

        // Iterates through all genes and creates a component for each of them
        for (const i in this.state.currentGenePanel) {
            gene = this.state.currentGenePanel[i];
            allGenes[gene.key] = <Gene className="gene"
                                       key={gene.key}
                                       values={gene}
                                       defaultValues={defaultValues}
                                       groupValues={groupValues}
                                       changeValue={this.changeGeneValue.bind(this)}
                                       changeOption={this.changeOption.bind(this)}
                                       changeComment={this.changeComment.bind(this)}
            />;
        }
        this.setState({
            allGenes: allGenes
        });
    }

    /**
     * Creates a gene based on the given gene name and information
     */
    createGene(name, geneInfo) {
        const gene = JSON.parse(JSON.stringify(this.props.globalDefault));

        let tempInheritance = (geneInfo.inheritance === "AD") ? "AD" : "default";
        let inheritance = geneInfo.inheritance;
        let external = gene.freq_cutoffs[tempInheritance].external;
        let internal = gene.freq_cutoffs[tempInheritance].internal;
        let disease_mode = this.state.globalDefault.disease_mode;
        let last_exon_important = this.state.globalDefault.last_exon_important;

        return {
            "key": geneInfo.id,
            "name": name,
            "inheritance": inheritance,
            "external": external,
            "internal": internal,
            "disease_mode": disease_mode,
            "last_exon_important": last_exon_important
        };
    }


    /**
     * Creates the elements for the special genes Global default and gene panel default
     * @returns {Array} Table data elements
     */
    createGlobalAndPanelGene() {
        const globalAndPanelConfig = {
            "globalValues": {
                "key": 0,
                "name": "globalDefault",
                "cutoffs": this.props.globalDefault.freq_cutoffs,
                "disease_mode": this.props.globalDefault.disease_mode,
                "last_exon_important": this.props.globalDefault.last_exon_important
            },
            "panelValues": {
                "key": 1,
                "name": "panelConfig",
                "cutoffs": this.props.panelConfig.data.freq_cutoff_groups,
                "disease_mode": this.props.panelConfig.data.disease_mode,
                "last_exon_important": this.props.panelConfig.data.last_exon_important
            }
        };

        const genes = [];
        for (const geneName in globalAndPanelConfig) {
            const gene = globalAndPanelConfig[geneName];
            const freqs1 = [];
            const currentValues = [
                gene.cutoffs.AD.external.hi_freq_cutoff,
                gene.cutoffs.AD.internal.hi_freq_cutoff,
                gene.cutoffs.AD.external.lo_freq_cutoff,
                gene.cutoffs.AD.internal.lo_freq_cutoff,
                gene.disease_mode,
                gene.last_exon_important
            ];
            const ids = ["ex;Hi;", "in;Hi;", "ex;Lo;", "in;Lo;"];
            let color = (gene.name === "globalDefault") ? "white" : "red";

            for (let i = 0; i < 4; i++) {
                freqs1.push(
                    <td className={"color_" + color}>
                        <input id={ids[i] + gene.name + ";AD"}
                               type="text"
                               value={currentValues[i]}
                               onChange={this.changePanelConfig.bind(this)}
                        />
                    </td>
                );
            }

            genes.push(
                <tr>
                    <td className={"glopan gene_name"} rowSpan="2">{gene.name}</td>
                    <td className={"glopan"} rowSpan="2">{gene.key}</td>
                    <td>AD</td>
                    {freqs1}
                    <td rowSpan="2" className={"color_" + color + " glopan"}>{gene.disease_mode}</td>
                    <td rowSpan="2" className={"color_" + color + " glopan"}>{gene.last_exon_important}</td>
                </tr>
            );

            const freqs2 = [];
            const currentValues2 = [
                gene.cutoffs.default.external.hi_freq_cutoff,
                gene.cutoffs.default.internal.hi_freq_cutoff,
                gene.cutoffs.default.external.lo_freq_cutoff,
                gene.cutoffs.default.internal.lo_freq_cutoff,
            ];

            for (let i = 0; i < 4; i++) {
                freqs2.push(
                    <td className={"color_" + color + " glopan"}>
                        <input id={ids[i] + gene.name + "default"}
                               type="text"
                               value={currentValues2[i]}
                               onChange={this.changePanelConfig.bind(this)}
                        />
                    </td>
                );
            }

            genes.push(
                <tr>
                    <td className={"glopan"}>default</td>
                    {freqs2}
                </tr>
            );
        }
        return genes;
    }

    /**
     * Toggles the state letiable handling if all or onlye modified genes should be shown
     */
    toggleModified() {
        this.setState({
            showModified: (!this.state.showModified)
        });
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
        const inheritance = (gene.props.values.inheritance === "AD") ? "AD" : "default";
        const currentValues = [
            Number(gene.props.values.external.hi_freq_cutoff),
            Number(gene.props.values.internal.hi_freq_cutoff),
            Number(gene.props.values.external.lo_freq_cutoff),
            Number(gene.props.values.internal.lo_freq_cutoff),
            gene.props.values.disease_mode,
            gene.props.values.last_exon_important,
            (gene.props.values.comment !== undefined) ? gene.props.values.comment : ""
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
        const inheritance = (gene.props.values.inheritance === "AD") ? "AD" : "default";
        const currentValues = [
            Number(gene.props.values.external.hi_freq_cutoff),
            Number(gene.props.values.internal.hi_freq_cutoff),
            Number(gene.props.values.external.lo_freq_cutoff),
            Number(gene.props.values.internal.lo_freq_cutoff),
            gene.props.values.disease_mode,
            gene.props.values.last_exon_important,
            (gene.props.values.comment !== undefined) ? gene.props.values.comment : ""
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
     * Checks if any of the values of a gene matches whatever is typed in the search box
     * @param gene the gene to be checked
     * @returns {boolean} true if it matches any of the values of the gene
     */
    isSearched(gene) {
        const currentValues = [
            gene.props.values.name,
            gene.key,
            gene.props.values.external.hi_freq_cutoff,
            gene.props.values.internal.hi_freq_cutoff,
            gene.props.values.external.lo_freq_cutoff,
            gene.props.values.internal.lo_freq_cutoff,
            gene.props.values.disease_mode,
            gene.props.values.last_exon_important
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
     * Generates a new config with new values based on user input and saves them through the API
     */
    savePanel() {
        const config = JSON.parse(JSON.stringify(this.props.panelConfig));
        const newConfig = JSON.parse(JSON.stringify(config));
        const currentPanel = this.state.currentGenePanel;

        for (const i in newConfig.data.genes) {
            delete newConfig.data.genes[i];
        }

        for (const i in currentPanel) {
            if (this.isModified(this.state.allGenes[currentPanel[i].key])) {
                const inheritance = (currentPanel[i].inheritance === "AD") ? "AD" : "default";
                const gene = {};
                let cutoffs = config.data.freq_cutoff_groups[inheritance];

                let value = Number(currentPanel[i].external.hi_freq_cutoff);
                if (value !== cutoffs.external.hi_freq_cutoff) {
                    if (!gene.hasOwnProperty("external")) {
                        gene.external = {};
                    }
                    gene.external.hi_freq_cutoff = value;
                }

                value = Number(currentPanel[i].external.lo_freq_cutoff);
                if (value !== cutoffs.external.lo_freq_cutoff) {
                    if (!gene.hasOwnProperty("external")) {
                        gene.external = {};
                    }
                    gene.external.lo_freq_cutoff = value;
                }

                value = Number(currentPanel[i].internal.hi_freq_cutoff);
                if (value !== cutoffs.internal.hi_freq_cutoff) {
                    if (!gene.hasOwnProperty("internal")) {
                        gene.internal = {};
                    }
                    gene.internal.hi_freq_cutoff = value;
                }

                value = Number(currentPanel[i].internal.lo_freq_cutoff);
                if (value !== cutoffs.internal.lo_freq_cutoff) {
                    if (!gene.hasOwnProperty("internal")) {
                        gene.internal = {};
                    }
                    gene.internal.lo_freq_cutoff = value;
                }

                cutoffs = config.data;
                // globalDefaults = this.props.globalDefault;
                value = currentPanel[i].disease_mode;
                if (value !== cutoffs.disease_mode) {
                    gene.disease_mode = value;
                }

                value = currentPanel[i].last_exon_important;
                if (value !== cutoffs.last_exon_important) {
                    gene.last_exon_important = value;
                }

                value = currentPanel[i].comment;
                if (value !== "") {
                    gene.comment = value;
                }

                newConfig.data.genes[i] = gene;
            }
        }
        API.saveNewPanelConfig(newConfig);
    }

    /**
     * Computes what to render and renders it
     * @returns {XML} web page components/elements
     */
    render() {
        let genes = [];
        let extendedGenes = this.createGlobalAndPanelGene();
        let gene;

        for (const i in this.state.allGenes) {
            gene = this.state.allGenes[i];

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
            <div id='main_panel' className="main_panel">
                <ToolsPanel toggleModified={this.toggleModified.bind(this)}
                            showModified={this.state.showModified}
                            changeSearch={this.changeSearch.bind(this)}
                            savePanel={this.savePanel.bind(this)}
                            searchValue={this.state.searchValue}
                />
                <div className="extended_genes">
                    <table>
                        <tr>
                            {this.state.headings}
                        </tr>
                        {extendedGenes}
                    </table>
                </div>
                <div className="genes">
                    <table>
                        {genes}
                    </table>
                </div>
            </div>
        );
    };
}