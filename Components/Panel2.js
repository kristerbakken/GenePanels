import React from 'react';
import Gene from "./Gene";
import SelectionPanel from "./SelectionPanel";
import API from "../api";

export default class Panel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentGenePanel: [],
            group: "default",
            geneList: this.props.geneList,
            globalDefault: JSON.parse(JSON.stringify(this.props.globalDefault))

        };

        this.handleChange = this.handleChange.bind(this);
        this.testClick = this.testClick.bind(this);
        // this.changeGeneValue = this.changeGeneValue.bind(this);
    }

    handleChange(event) {
        this.setState({group: event.target.value},
            function() {
                console.log(this.state);
                this.adaptToConfig();
                console.log(this.state);
                this.forceUpdate();
            });
    }

    changeGeneValue(event) {
        const info = event.target.id.split(";");
        const exIn = info[0];
        const hiLo = info[1];
        const geneId = info[2];
        const value = event.target.value;
        const genes = this.state.currentGenePanel;

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

    createHeadings() {
        const values = [
            "Gene name",
            "Gene key",
            "Inheritance",
            "Frequency HI external",
            "Frequency HI internal",
            "Frequency LOW external",
            "Frequency LOW internal",
            "Disease mode",
            "Last exon important"
        ];

        /*Creates a heading for each entry in "values" */
        const headings = [];
        for (const i in values) {
            headings.push(<th>{values[i]}</th>);
        }
        this.setState({
            headings: headings
        });
    }

    createGeneList() {
        var list = [];
        const geneList = this.props.geneList;
        for (const i in geneList) {
            list[geneList[i]] = [geneList[i], true];
        }

        this.setState({
            geneList: list
        })
    }

    createGenes() {
        /*Create the genes based on the list of genes */
        //should change it so it takes the ID of the gene and assigns it instead
        const list = this.props.geneList;
        var genes = [];
        for (const i in list){
            genes[i] = this.createGene(i, i);
        }
        this.setState({
            currentGenePanel: genes
        }, function() {
            this.adaptToConfig();
        });
    }

    adaptToConfig() {
        /*
        Skal alle gener ha verdier fra freq_cutoffs (untatt exclude), eller kun de nevnt i genes ?
         */

        const config = this.props.panelConfig.config;
        // console.log(config.data.groups.default.config);
        // const exclude = config.data.groups.default.config.exclude_genes;
        // console.log(exclude);


        const genes = config.data.groups[this.state.group].config.genes;
        const cutoffs = config.data.groups[this.state.group].config.freq_cutoffs.AD;
        const lei = config.data.groups[this.state.group].config.last_exon_important;
        // console.log(genes);
        const panel = this.state.currentGenePanel;
        for(const x in genes) {
            for (const y in genes[x]){
                this.state.currentGenePanel[x][y] = genes[x][y];
                panel[x][y] = genes[x][y];
            }
            panel[x].internal = cutoffs.internal;
            panel[x].external = cutoffs.external;
            panel[x].last_exon_important = lei;
            // this.state.currentGenePanel[x].internal = cutoffs.internal;
            // this.state.currentGenePanel[x].external = cutoffs.external;
            // this.state.currentGenePanel[x].last_exon_important = lei;
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
        var color = "white";
        for (const i in this.state.currentGenePanel) {
            // console.log("HER");
            // console.log(this.state.geneList[i][1]);

            if (this.state.geneList[i][1]) {
            gene = this.state.currentGenePanel[i];

            // console.log(gene);
            if (gene.external !== this.props.globalDefault.freq_cutoffs.AD.external) {
                color = "red";
            } else {
                color = "white";
            }

            const defaultValues = this.props.globalDefault;

            allGenes[gene.key] = <Gene key={gene.key} values={gene} defaultValues={defaultValues} changeValue={this.changeGeneValue.bind(this)}/>;
            }
        }
        this.setState({
            allGenes: allGenes
        }, function() {
            console.log("AllGenes");
            console.log(this.state);
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

         console.log("Current");
        console.log(this.props);

    }



    createGene(name, id) {
        const gene = JSON.parse(JSON.stringify(this.props.globalDefault));

        var inheritance = "AD";
        // var external = this.state.globalDefault.freq_cutoffs.AD.external;
        var external = gene.freq_cutoffs.AD.external;
        var internal = this.state.globalDefault.freq_cutoffs.AD.internal;
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

        if (list[geneName][1]) {
            list[geneName][1] = false;
        } else {
            list[geneName][1] = true;
        }

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

    render() {

        const genes = [];
        var gene;
        console.log(this.state.geneList);
        for (const i in this.state.allGenes) {
            gene = this.state.allGenes[i];
            genes.push(gene);
        }


        return (
            <div id='main_panel'>
                <select value={this.state.group} onChange={this.handleChange}>
                    {this.state.groups}
                </select>
                <SelectionPanel geneList={this.state.geneList} onChange={this.toggleGene.bind(this)}/>
                <div id='genes'>
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
