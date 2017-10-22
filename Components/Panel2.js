import React from 'react';
import Gene from "./Gene";
import SelectionPanel from "./SelectionPanel";
import SearchBar from "./SearchBar";
import API from "../api";
import ToolsPanel from "./ToolsPanel";

export default class Panel extends React.Component {

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

        this.handleChange = this.handleChange.bind(this);
        this.testClick = this.testClick.bind(this);
        // this.sortTable = this.sortTable.bind(this);
        // this.changeGeneValue = this.changeGeneValue.bind(this);
    }

    handleChange(event) {
        this.setState({group: event.target.value},
            function() {
                // console.log(this.state);
                this.adaptToConfig();
                // console.log(this.state);
                this.forceUpdate();
            });
    }

    changeGeneValue(event) {
        const info = event.target.id.split(";");
        const exIn = info[0];
        const hiLo = info[1];
        const geneId = info[2];
        const value = Number(event.target.value);
        const genes = this.state.currentGenePanel;

        // console.log(info);
        // console.log(genes);

        if (exIn === "ex" && hiLo === "Hi") {
            genes[geneId].external.hi_freq_cutoff = value;
        } else if (exIn === "ex" && hiLo === "Lo") {
            genes[geneId].external.lo_freq_cutoff = value;
        } else if (exIn === "in" && hiLo === "Hi") {
            genes[geneId].internal.hi_freq_cutoff = value;
        } else if (exIn === "in" && hiLo === "Lo") {
            genes[geneId].internal.lo_freq_cutoff = value;
        }

        this.setState({
            currentGenePanel: genes
        }, function() {
            this.createGeneComponents();
        });
    }

    changeSearch(event) {
        // console.log(event.target.value);
        this.setState({
            searchValue: event.target.value.toUpperCase()
        })
    }

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

        /*Creates a heading for each entry in "values" */
        const headings = [];
        for (const i in values) {
            headings.push(<th onClick={this.sortTable.bind(this, i)}>{values[i]}</th>);
        }
        this.setState({
            headings: headings
        });
    }

    sortTable(column) {
        var order = true;
        if (this.state.sortColumn[0] === column && this.state.sortColumn[1]) {
            order = false;
        }
        this.setState({
            sortColumn: [column, order]
        });
    }

    sortByColumn(genes) {
        const column = this.state.sortColumn[0];

        if (genes[0] != undefined) {
            if (/freq|key/.test(column)){
                if (/key/.test(column)) {
                    return genes.sort(function(a, b) {
                        return a.props.values[column] - b.props.values[column];
                    });
                }else {
                    var inEx = "internal";
                    var hiLo = "lo";
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

    createGenes() {
        /*Create the genes based on the list of genes */
        //should change it so it takes the ID of the gene and assigns it instead
        // console.log(this.props.geneList);
        const list = this.props.geneList;
        var genes = [];
        for (const i in list){
            // console.log(i);
            // console.log(list[i]);
            // console.log(list[i][1]);
            genes[i] = this.createGene(i, list[i][1]);
        }
        this.setState({
            currentGenePanel: genes
        }, function() {
            // console.log(this.state);
            this.adaptToConfig();
        });
    }

    adaptToConfig() {
        console.log(this.state);

        const genes = this.props.panelConfig.config.data.groups.default.config.genes;
        const panel = this.state.currentGenePanel;

        for (const x in genes) {
            const config = JSON.parse(JSON.stringify(this.props.panelConfig.config.data));
            const inheritance = (panel[x].inheritance === "AD") ? "AD" : "default";
            const cutoffs = config.groups.default.config.freq_cutoffs[inheritance]; // se under // DENNE MÅ BYTTES HVIS GENENE ER NOE ANNET ENN BARE AD

            // if (panel[x].inheritance === "AD") {
            //     cutoffs = config.groups.default.config.freq_cutoffs.AD;
            // }

            panel[x].internal = cutoffs.internal;
            panel[x].external = cutoffs.external;
            panel[x].disease_mode = config.groups.default.config.disease_mode;
            panel[x].last_exon_important = config.groups.default.config.last_exon_important;

            for (const y in genes[x]){
                this.state.currentGenePanel[x][y] = genes[x][y];
                panel[x][y] = genes[x][y];
            }
        }
        this.setState({
            currentGenePanel: panel
        }, function() {
            this.createGeneComponents();
        });
    }

    createGeneComponents() {
        /*Create the gene components */
        const allGenes = [];
        var gene;

        for (const i in this.state.currentGenePanel) {

            if (this.state.geneList[i][1]) {
                gene = this.state.currentGenePanel[i];

                const defaultValues = this.props.globalDefault;
                const groupValues = this.props.panelConfig.config.data.groups[this.state.group];
                allGenes[gene.key] = <Gene key={gene.key} values={gene} defaultValues={defaultValues} groupValues={groupValues} changeValue={this.changeGeneValue.bind(this)}/>;
            }
        }
        this.setState({
            allGenes: allGenes
        }, function() {
            // console.log("AllGenes");
            // console.log(this.state);
            // console.log(this.props.panelConfig.config.data.groups);
            // console.log(this.props);
        });
    }

    createGroups() {

        var groups = [];
        for (var a in this.props.panelConfig.config.data.groups) {
            // console.log(a);
            groups.push(<option value={a}>{this.props.panelConfig.config.data.groups[a].display}</option>);
        }

        this.setState({
            groups: groups
        });


    }

    componentDidMount() {
        // this.createGeneList();
        this.createHeadings();
        this.createGroups();
        this.createGenes();

        //  console.log("Current");
        // console.log(this.props);

    }

    createGene(name, id) {
        const gene = JSON.parse(JSON.stringify(this.props.globalDefault));

        // DENNE MÅ BYTTES: Inheritance
        var inheritance = "AD";
        var external = gene.freq_cutoffs.AD.external;
        var internal = gene.freq_cutoffs.AD.internal;
        var disease_mode = this.state.globalDefault.disease_mode;
        var last_exon_important = this.state.globalDefault.last_exon_important;

        return {
            "key": id,
            "name": name,
            "inheritance": inheritance,
            "external": external,
            "internal": internal,
            "disease_mode": disease_mode,
            "last_exon_important": last_exon_important
        }
    }

    toggleGene(event) {
        var value = event.target.value;
        value = value.split(",");
        var geneName = value[0];
        var list = this.state.geneList;

        list[geneName][1] = !list[geneName][1];

        this.setState({
            geneList: list
        }, function () {
            this.createGeneComponents();
        });
    }

    testClick() {
        console.log(this.state.currentGenePanel);


        // const panel = {};
        // for (var gene in this.state.currentGenePanel) {
        //     console.log(gene + " " + this.state.currentGenePanel[gene].external.hi_freq_cutoff);
        //     panel[gene] = this.state.currentGenePanel[gene];
        //     console.log(gene + " " + panel[gene].external.hi_freq_cutoff);
        //
        // }
        // // const genes = this.state.currentGenePanel["PMS2"];
        // // console.log(genes);
        // // genes.external.hi_freq_cutoff = 0.15;
        // panel["PMS2"].external.hi_freq_cutoff = 0.15;
        // for (var gene in this.state.currentGenePanel) {
        //     console.log(gene + " " + this.state.currentGenePanel[gene].external.hi_freq_cutoff);
        //     console.log(gene + " " + panel[gene].external.hi_freq_cutoff);
        // }
        // console.log(this.state);
        // console.log(this.props);


    }

    toggleModified() {
        this.setState({
            showModified: (!this.state.showModified)
        })
    }

    isModified(gene) {
        const inheritance = gene.props.values.inheritance;
        const currentValues = [
            gene.props.values.external.hi_freq_cutoff,
            gene.props.values.internal.hi_freq_cutoff,
            gene.props.values.external.lo_freq_cutoff,
            gene.props.values.internal.lo_freq_cutoff,
            gene.props.values.disease_mode,
            gene.props.values.last_exon_important
        ];
        const globalDefaults = [
            this.props.globalDefault.freq_cutoffs[inheritance].external.hi_freq_cutoff,
            this.props.globalDefault.freq_cutoffs[inheritance].internal.hi_freq_cutoff,
            this.props.globalDefault.freq_cutoffs[inheritance].external.lo_freq_cutoff,
            this.props.globalDefault.freq_cutoffs[inheritance].internal.lo_freq_cutoff,
            this.props.globalDefault.disease_mode,
            this.props.globalDefault.last_exon_important,
        ];
        const groupDefaults = [
            this.props.panelConfig.config.data.groups.default.config.freq_cutoffs[inheritance].external.hi_freq_cutoff,
            this.props.panelConfig.config.data.groups.default.config.freq_cutoffs[inheritance].internal.hi_freq_cutoff,
            this.props.panelConfig.config.data.groups.default.config.freq_cutoffs[inheritance].external.lo_freq_cutoff,
            this.props.panelConfig.config.data.groups.default.config.freq_cutoffs[inheritance].internal.lo_freq_cutoff,
            this.props.panelConfig.config.data.groups.default.config.disease_mode,
            this.props.panelConfig.config.data.groups.default.config.last_exon_important,
        ];

        var modified = false;

        for (const i in currentValues) {
            // console.log(currentValues[i] + " " + globalDefaults[i] + " " + groupDefaults[i]);
            if (currentValues[i] !== globalDefaults[i] && currentValues[i] !== groupDefaults[i]) {
                modified = true;
            }
        }

        return modified;
    }

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

        var searched = false;

        for (const i in currentValues) {
            if ((""+ currentValues[i]).includes(this.state.searchValue)) {
                searched = true;
            }
        }

        return searched;
    }


    render() {

        var genes = [];
        var gene;

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
                {/*<select value={this.state.group} onChange={this.handleChange}>*/}
                    {/*{this.state.groups}*/}
                {/*</select>*/}
                {/*<SearchBar value={this.state.searchValue} onChange={this.changeSearch.bind(this)}/>*/}
                {/*<SelectionPanel geneList={this.state.geneList} searchValue={this.state.searchValue} onChange={this.toggleGene.bind(this)}/>*/}
                <ToolsPanel toggleModified={this.toggleModified.bind(this)}
                            changeSearch={this.changeSearch.bind(this)}
                            searchValue={this.state.searchValue}
                />
                <div id='genes' className="genes">
                    <table>
                        <tr>
                            {this.state.headings}
                        </tr>
                        {genes}
                    </table>
                </div>
                <button onClick={this.testClick}>test</button>

            </div>

        )
    };
}
