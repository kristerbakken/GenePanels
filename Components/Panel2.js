import React from 'react';
import Gene from "./Gene";
import API from "../api";

export default class Panel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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

    createGenes() {
        /*Create the genes based on the list of genes */
        const list = this.props.geneList;
        for (const i in list)
        {
            this.state.currentGenePanel[list[i]] =
                this.createGene(list[i], list[i]);
        }
    }

    adaptToConfig() {
        /*
        Skal alle gener ha verdier fra freq_cutoffs (untatt exclude), eller kun de nevnt i genes ?
         */

        const config = this.props.panelConfig.config;
        // console.log(config.data.groups.default.config);
        // const exclude = config.data.groups.default.config.exclude_genes;
        // console.log(exclude);

        var genes = config.data.groups.default.config.genes;
        var cutoffs = config.data.groups.default.config.freq_cutoffs.AD;
        var lei = config.data.groups.default.config.last_exon_important;
        // console.log(genes);
        for(const x in genes) {
            for (const y in genes[x]){
                this.state.currentGenePanel[x][y] = genes[x][y];
            }
            this.state.currentGenePanel[x].internal = cutoffs.internal;
            this.state.currentGenePanel[x].external = cutoffs.external;
            this.state.currentGenePanel[x].last_exon_important = lei;
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
        var external = this.props.globalDefault.freq_cutoffs.AD.external;
        var internal = this.props.globalDefault.freq_cutoffs.AD.internal;
        // var frequencyLowExternal = this.props.globalDefault.freq_cutoffs.AD.external.lo_freq_cutoff;
        // var frequencyLowInternal = this.props.globalDefault.freq_cutoffs.AD.internal.lo_freq_cutoff;
        var disease_mode = this.props.globalDefault.disease_mode;
        var last_exon_important = this.props.globalDefault.last_exon_important;

        return {
            "key": id,
            "name": name,
            "inheritance": inheritance,
            // "frequencyHiExternal": external.hi_freq_cutoff,
            // "frequencyHiInternal": internal.hi_freq_cutoff,
            // "frequencyLowExternal": external.lo_freq_cutoff,
            // "frequencyLowInternal": internal.lo_freq_cutoff
            "external": external,
            "internal": internal,
            "disease_mode": disease_mode,
            "last_exon_important": last_exon_important
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
