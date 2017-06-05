import React from 'react';
import Gene from "./Gene";
import API from "../api";

export default class Panel extends React.Component {

    constructor(props) {
        super();
        this.state = {
            panelConfig: API.getGenePanelConfig(),
            globalDefault: API.getGlobalDefault(),
            currentGenePanel: [],

        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({group: event.target.value});
        this.forceUpdate();
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
            "Disease mode"
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

    createGenes() {
        /*Create the genes based on the list of genes */
        var geneList = API.getGeneList();
        for (const i in geneList)
        {
            this.state.currentGenePanel[geneList[i]] =
                this.createGene(geneList[i], geneList[i]);
        }
    }

    adaptToConfig() {
        const config = this.state.panelConfig.config;
        console.log(config.data.groups.default.config);
        const exclude = config.data.groups.default.config.exclude_genes;
        console.log(exclude);

        var genes = config.data.groups.default.config.genes;
        console.log(genes);
        for(const i in genes) {
            console.log(genes[i]);
        }
    }

    createGeneComponents() {
        /*Create the gene components */
        const allGenes = [];
        var gene;
        for (const i in this.state.currentGenePanel) {
            gene = this.state.currentGenePanel[i];
            allGenes[gene.key] = <Gene key={gene.key} values={gene}/>;
        }
        this.setState({
            allGenes: allGenes
        }, function() {
            console.log("AllGenes");
            console.log(this.state);
            // console.log(this.props);
        });
    }


    componentDidMount() {
        this.createHeadings();
        this.createGenes();

        this.createGeneComponents();
        this.adaptToConfig();


        // /* Groupings */
        // var groups = API.getGenePanelConfig();
        // // console.log(groups);
        // // console.log(this.state.globalDefault);
        // // console.log(API.getGeneList());
        // /* change a gene based on dropdown */
        // var gene = this.setGroupGene();







        console.log("Current");
        console.log(this.state.currentGenePanel);

    }

    setGroupGene() {
        var gene = {};
        if (this.state.group = "default") {
            console.log("DEFAULT");
            gene = <Gene key={"group"}
                         name={"Group"}
                // inheritance={def.freq_cutoffs.AD}
                         inheritance="AD1"

            />;
        } else {
            console.log("NOT DEFAULT");
            gene = <Gene key={"group"}
                         name={"Group"}
                // inheritance={def.freq_cutoffs.AD}
                         inheritance="ADD"

            />;
        }
        return gene;
    }

    createGene(name, id) {
        var inheritance = "AD";
        var frequencyHiExternal = this.state.globalDefault.freq_cutoffs.AD.external.hi_freq_cutoff + 1;
        var frequencyHiInternal = this.state.globalDefault.freq_cutoffs.AD.internal.hi_freq_cutoff + 1;
        var frequencyLowExternal = this.state.globalDefault.freq_cutoffs.AD.external.lo_freq_cutoff;
        var frequencyLowInternal = this.state.globalDefault.freq_cutoffs.AD.internal.lo_freq_cutoff;
        var diseaseMode = this.state.globalDefault.disease_mode;

        return {
            "key": id,
            "name": name,
            "inheritance": inheritance,
            "frequencyHiExternal": frequencyHiExternal,
            "frequencyHiInternal": frequencyHiInternal,
            "frequencyLowExternal": frequencyLowExternal,
            "frequencyLowInternal": frequencyLowInternal,
            "diseaseMode": diseaseMode
        }
    }

    render() {

        const test = [];
        var gene;
        for (const i in this.state.allGenes) {
            gene = this.state.allGenes[i];
            test.push(gene);
        }

        // console.log(test);

        return (
            <div>
                <select value={this.state.group} onChange={this.handleChange}>
                    <option value="default">Default</option>
                    <option value="low_freq">Low Freq</option>
                </select>
                <table>
                    <tr>
                        {this.state.headings}
                    </tr>
                    {/*{this.state.allGenes}*/}
                    {/*{this.state.currentGenePanel}*/}
                    {test}
                </table>


            </div>

        )
    };
}
