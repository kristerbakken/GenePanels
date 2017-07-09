import React from 'react';
import Gene from "./Gene";
import API from "../api";

export default class Panel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentGenePanel: [],
            group: "default",

        };

        this.handleChange = this.handleChange.bind(this);
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
        var genes = [];
        for (const i in list)
        {
            // this.state.currentGenePanel[list[i]] =
            //     this.createGene(list[i], list[i]);
            genes[list[i]] = this.createGene(list[i], list[i]);
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


        var genes = config.data.groups[this.state.group].config.genes;
        var cutoffs = config.data.groups[this.state.group].config.freq_cutoffs.AD;
        var lei = config.data.groups[this.state.group].config.last_exon_important;
        // console.log(genes);
        var panel = this.state.currentGenePanel;
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
        for (const i in this.state.currentGenePanel) {
            gene = this.state.currentGenePanel[i];
            allGenes[gene.key] = <Gene key={gene.key} values={gene}/>;
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
        this.createHeadings();
        this.createGroups();
        this.createGenes();

         console.log("Current");
        console.log(this.props);

    }



    createGene(name, id) {
        var inheritance = "AD";
        var external = this.props.globalDefault.freq_cutoffs.AD.external;
        var internal = this.props.globalDefault.freq_cutoffs.AD.internal;
        var disease_mode = this.props.globalDefault.disease_mode;
        var last_exon_important = this.props.globalDefault.last_exon_important;

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

    render() {

        const genes = [];
        var gene;
        for (const i in this.state.allGenes) {
            gene = this.state.allGenes[i];
            genes.push(gene);
        }


        return (
            <div>
                <select value={this.state.group} onChange={this.handleChange}>
                    {this.state.groups}
                </select>
                <table>
                    <tr>
                        {this.state.headings}
                    </tr>
                    {genes}
                </table>


            </div>

        )
    };
}
