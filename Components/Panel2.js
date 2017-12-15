import React from 'react';
import Gene from "./Gene";
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
            //not used
            // ,
            // showCommentModal: false,
            // currentComment: "",
            // currentCommentName: ""

        };

        this.handleChange = this.handleChange.bind(this);
        this.testClick = this.testClick.bind(this);
    }

    componentDidMount() {
        this.createHeadings();
        this.createGenes();
        // console.log(this.props);
        // this.createGeneList();
        // this.createGroups();

        //  console.log("Current");
        // console.log(this.props);

    }

    changeSearch(event) {
        // console.log(event.target.value);
        this.setState({
            searchValue: event.target.value.toUpperCase()
        })
    }

    changePanelConfig(event) {
        const info = event.target.id.split(";");
        const exIn = info[0];
        const hiLo = info[1];
        const geneId = info[2];
        const inheritance = info[3];
        const genes = this.props.panelConfig.data.freq_cutoff_groups[inheritance];

        if (geneId === "panelConfig") {
            const value = event.target.value.replace(",", ".");
            const pattern = new RegExp("([0-9.,]){" + value.length + "}");
            if (pattern.test(value) && !Number.isNaN(Number(value))) {

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
            this.createGeneComponents();
        }
    }
    
    changeGeneValue(event) {
        const info = event.target.id.split(";");
        const exIn = info[0];
        const hiLo = info[1];
        const geneId = info[2];
        const genes = this.state.currentGenePanel;

        const value = event.target.value.replace(",", ".");
        const pattern = new RegExp("([0-9.,]){" + value.length + "}");
        if (pattern.test(value) && !Number.isNaN(Number(value))) {

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

        this.setState({
            currentGenePanel: genes
        }, function() {
            this.createGeneComponents();
        });
    }

    changeOption(event) {
        const info = event.target.id.split(";");
        const dmLei = info[0];
        const geneId = info[1];
        const genes = this.state.currentGenePanel;

        if (dmLei === "dm") {
            genes[geneId].disease_mode = event.target.value;
        } else {
            genes[geneId].last_exon_important = event.target.value;
        }

        this.setState({
            currentGenePanel: genes
        }, function() {
            this.createGeneComponents();
        });
    }
    
    // \n is added to the comment because of textarea, but it works as far as I've tested it.
    changeComment(event) {
        // console.log(event.target.id);
        // console.log(event.target.value);
        const info = event.target.id.split(";");
        const geneId = info[1];
        const genes = this.state.currentGenePanel;
        
        genes[geneId].comment = event.target.value;

        this.setState({
            currentGenePanel: genes
        }, function() {
            this.createGeneComponents();
        });
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
        const list = this.props.geneList;
        var genes = [];
        for (const i in list){
            genes[i] = this.createGene(i, list[i]);
        }
        this.setState({
            currentGenePanel: genes
        }, function() {
            this.adaptToConfig();
        });
    }

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

    createGeneComponents() {
        /*Create the gene components */
        const allGenes = [];
        var gene;
        const defaultValues = this.props.globalDefault;
        const groupValues = this.props.panelConfig.data;

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
                                       //not used
                                       // showCommentModal={this.showCommentModal.bind(this, gene.name)}
                                       // hideCommentModal={this.hideCommentModal.bind(this)}
            />;
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
        }

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
            var color = (gene.name === "globalDefault") ? "white" : "red";

            for (var i = 0; i < 4; i++) {
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

            for (var i = 0; i < 4; i++) {
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

    toggleModified() {
        this.setState({
            showModified: (!this.state.showModified)
        })
    }

    isModified(gene) {
        // const inheritance = (gene.props.values.inheritance === "AD") ? "AD" : "default";
        // const currentValues = [
        //     Number(gene.props.values.external.hi_freq_cutoff),
        //     Number(gene.props.values.internal.hi_freq_cutoff),
        //     Number(gene.props.values.external.lo_freq_cutoff),
        //     Number(gene.props.values.internal.lo_freq_cutoff),
        //     gene.props.values.disease_mode,
        //     gene.props.values.last_exon_important
        // ];
        // const globalDefaults = [
        //     this.props.globalDefault.freq_cutoffs[inheritance].external.hi_freq_cutoff,
        //     this.props.globalDefault.freq_cutoffs[inheritance].internal.hi_freq_cutoff,
        //     this.props.globalDefault.freq_cutoffs[inheritance].external.lo_freq_cutoff,
        //     this.props.globalDefault.freq_cutoffs[inheritance].internal.lo_freq_cutoff,
        //     this.props.globalDefault.disease_mode,
        //     this.props.globalDefault.last_exon_important,
        // ];
        // const groupDefaults = [
        //     this.props.panelConfig.data.freq_cutoff_groups[inheritance].external.hi_freq_cutoff,
        //     this.props.panelConfig.data.freq_cutoff_groups[inheritance].internal.hi_freq_cutoff,
        //     this.props.panelConfig.data.freq_cutoff_groups[inheritance].external.lo_freq_cutoff,
        //     this.props.panelConfig.data.freq_cutoff_groups[inheritance].internal.lo_freq_cutoff,
        //     this.props.panelConfig.data.disease_mode,
        //     this.props.panelConfig.data.last_exon_important,
        // ];
        //
        // var modified = false;
        //
        // for (const i in currentValues) {
        //     // console.log(gene.props.values.name);
        //     // console.log(currentValues[i] + " " + globalDefaults[i] + " " + groupDefaults[i]);
        //     // console.log(typeof(currentValues[i]) + " " + typeof(globalDefaults[i]) + " " + typeof(groupDefaults[i]));
        //     if (currentValues[i] !== globalDefaults[i] && currentValues[i] !== groupDefaults[i]) {
        //         modified = true;
        //     }
        // }
        // return modified;
        return (this.isDifferentThanGlobal(gene) && this.isDifferentThanConfig(gene));
    }

    isDifferentThanGlobal(gene) {
        // console.log(gene.props.values.comment === undefined);
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

        var modified = false;
        for (const i in currentValues) {
            if (currentValues[i] !== globalDefaults[i]) {
                modified = true;
            }
        }
        return modified;
    }

    isDifferentThanConfig(gene) {
        // console.log(gene.props.values.comment + "2");
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

        var modified = false;
        for (const i in currentValues) {
            if (currentValues[i] !== groupDefaults[i]) {
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
            if ((""+ currentValues[i]).indexOf(this.state.searchValue) !== -1) {
                searched = true;
            }
        }

        return searched;
    }

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
                var cutoffs = config.data.freq_cutoff_groups[inheritance];

                var value = Number(currentPanel[i].external.hi_freq_cutoff);
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

                {/*not used*/}
                {/*<button onClick={this.testClick}>test</button>*/}
                {/*<CommentModal*/}
                    {/*onClose={this.hideCommentModal.bind(this)}*/}
                    {/*saveComment={this.saveComment.bind(this)}*/}
                    {/*show={this.state.showCommentModal}*/}
                {/*>*/}
                    {/*{this.state.currentComment}*/}
                {/*</CommentModal>*/}
            </div>
        )
    };

    //unused functions
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
    handleChange(event) {
        this.setState({group: event.target.value},
            function() {
                // console.log(this.state);
                this.adaptToConfig();
                // console.log(this.state);
                this.forceUpdate();
            });
    }
    showCommentModal(name) {
        this.setState({
            currentComment: this.state.currentGenePanel[name].comment,
            currentCommentName: name,
            showCommentModal: true
        });
    }
    hideCommentModal() {
        this.setState({
            showCommentModal: false
        });
    }
    saveComment() {
        const genes = this.state.currentGenePanel;
        genes[this.state.currentCommentName].comment = this.state.currentComment;

        this.setState({
            currentGenePanel: genes
        }, function() {
            this.createGeneComponents();
        });
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


    }
}
