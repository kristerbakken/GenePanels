import React from 'react';
import Gene from "./Gene";
import ExtendedGene from "./ExtendedGene";
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
            genes[i] = this.createGene(i, list[i]);
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

        const genes = this.props.panelConfig.data.genes;
        const panel = this.state.currentGenePanel;
        const config = JSON.parse(JSON.stringify(this.props.panelConfig.data));

        for (const x in genes) {
            const inheritance = (panel[x].inheritance === "AD") ? "AD" : "default";
            const cutoffs = config.freq_cutoff_groups[inheritance]; // se under // DENNE MÅ BYTTES HVIS GENENE ER NOE ANNET ENN BARE AD

            // if (panel[x].inheritance === "AD") {
            //     cutoffs = config.groups.default.config.freq_cutoffs.AD;
            // }

            panel[x].internal = cutoffs.internal;
            panel[x].external = cutoffs.external;
            panel[x].disease_mode = config.disease_mode;
            panel[x].last_exon_important = config.last_exon_important;

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
        const defaultValues = this.props.globalDefault;

        for (const i in this.state.currentGenePanel) {
            gene = this.state.currentGenePanel[i];
            const inheritance = (gene.inheritance === "AD") ? "AD" : "default";
            const groupValues = this.props.panelConfig.data.freq_cutoff_groups[inheritance];
            allGenes[gene.key] = <Gene className="gene" key={gene.key} values={gene} defaultValues={defaultValues} groupValues={groupValues} changeValue={this.changeGeneValue.bind(this)}/>;
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
        console.log(this.props);
        // this.createGeneList();
        this.createHeadings();
        // this.createGroups();
        this.createGenes();

        //  console.log("Current");
        // console.log(this.props);

    }

    createGene(name, geneInfo) {
        const gene = JSON.parse(JSON.stringify(this.props.globalDefault));

        var tempInheritance = (geneInfo.inheritance === "AD") ? "AD" : "default";
        var inheritance = geneInfo.inheritance;
        var external = gene.freq_cutoffs[tempInheritance].external;
        var internal = gene.freq_cutoffs[tempInheritance].internal;
        var disease_mode = this.state.globalDefault.disease_mode;
        var last_exon_important = this.state.globalDefault.last_exon_important;

        return {
            "key": geneInfo.id,
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
        const inheritance = (gene.props.values.inheritance === "AD") ? "AD" : "default";
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
            this.props.panelConfig.data.freq_cutoff_groups[inheritance].external.hi_freq_cutoff,
            this.props.panelConfig.data.freq_cutoff_groups[inheritance].internal.hi_freq_cutoff,
            this.props.panelConfig.data.freq_cutoff_groups[inheritance].external.lo_freq_cutoff,
            this.props.panelConfig.data.freq_cutoff_groups[inheritance].internal.lo_freq_cutoff,
            this.props.panelConfig.data.disease_mode,
            this.props.panelConfig.data.last_exon_important,
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

    createGlobalAndPanelGene() {

        const tester = {
            "globalValues": {
                "key": 0,
                "name": "globalDefault",
                "cutoffs": this.props.globalDefault.freq_cutoffs,
                "disease_mode": this.props.globalDefault.disease_mode,
                "last_exon_important": this.props.globalDefault.last_exon_important
            },
            "panelConfig": {
                "key": 1,
                "name": "panelConfig",
                "cutoffs": this.props.panelConfig.data.freq_cutoff_groups,
                "disease_mode": this.props.panelConfig.data.disease_mode,
                "last_exon_important": this.props.panelConfig.data.last_exon_important
            }
        }
        // const globalGene = <ExtendedGene key="globalGene" values={globalValues} changeValue={this.changeGeneValue.bind(this)}/>;
        // const panelGene = <ExtendedGene key="panelGene" values={panelValues} changeValue={this.changeGeneValue.bind(this)}/>;

        const tessst = [];
        for (const a in tester) {

            var freqs1 = [];

            var gene = tester[a];
            console.log(gene);
            const currentValues = [
                gene.cutoffs.AD.external.hi_freq_cutoff,
                gene.cutoffs.AD.internal.hi_freq_cutoff,
                gene.cutoffs.AD.external.lo_freq_cutoff,
                gene.cutoffs.AD.internal.lo_freq_cutoff,
                gene.disease_mode,
                gene.last_exon_important
            ];

            const ids = ["ex;Hi;", "in;Hi;", "ex;Lo;", "in;Lo;"];
            var color = (gene.name === "globalDefault") ? "white" : "red";

            for (var i = 0; i < 4; i++) {

                freqs1.push(
                    <td className={"color_" + color}><input id={ids[i] + gene.name} type="number"
                                                            value={currentValues[i]} onChange={this.props.changeValue}/>
                    </td>
                );
            }

            const freqs2 = [];

            const test =
                <tr>
                    <td className={"glopan"} rowSpan="2">{gene.name}</td>
                    <td className={"glopan"} rowSpan="2">{gene.key}</td>
                    <td>AD</td>
                    {freqs1}
                    <td rowSpan="2" className={"color_" + color + " glopan"}>{gene.disease_mode}</td>
                    <td rowSpan="2" className={"color_" + color + " glopan"}>{gene.last_exon_important}</td>
                </tr>;
            const currentValues2 = [
                gene.cutoffs.default.external.hi_freq_cutoff,
                gene.cutoffs.default.internal.hi_freq_cutoff,
                gene.cutoffs.default.external.lo_freq_cutoff,
                gene.cutoffs.default.internal.lo_freq_cutoff,
            ];

            for (var i = 0; i < 4; i++) {

                freqs2.push(
                    <td className={"color_" + color + " glopan"}><input id={ids[i] + gene.name} type="number"
                                                            value={currentValues2[i]}
                                                            onChange={this.props.changeValue}/></td>
                );
            }

            const test2 =
                <tr>
                    <td className={"glopan"}>default</td>
                    {freqs2}
                </tr>;

            tessst.push(test);
            tessst.push(test2);
        }
        // return [globalGene, panelGene]
        return tessst;
    }

    render() {

        var genes = [];
        var extendedGenes = this.createGlobalAndPanelGene();
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
                <button onClick={this.testClick}>test</button>

            </div>

        )

    };
}
