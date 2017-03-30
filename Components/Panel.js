import React from 'react';
import Gene from "./Gene";
import API from "../api";

export default class Panel extends React.Component {

    constructor(props) {
        super();
        this.state = {
            group: "default",

        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({group: event.target.value});
        this.forceUpdate();
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

    render() {

        const values = [
            "Gene name",
            "Inheritance",
            "Frequency HI external",
            "Frequency HI internal",
            "Frequency LOW external",
            "Frequency LOW internal",
            "Disease mode"
        ];



        /* Groupings */
        var groups = API.getGenePanelConfig();
        console.log(groups);



        /*Creates a heading for each entry in "values" */
        const headings = [];
        for (const i in values) {
            headings.push(<th>{values[i]}</th>);
        }

        const allGenes = API.getGenes().genes
            .map(item => {
                return (
                        <Gene key={item.name}
                              name={item.name}
                              inheritance={item.values[values[1]]}
                              frequencyHiExternal={item.values[values[2]]}
                              frequencyHiInternal={item.values[values[3]]}
                              frequencyLowExternal={item.values[values[4]]}
                              frequencyLowInternal={item.values[values[5]]}
                              diseaseMode={item.values[values[6]]}
                        />
                )
            });

        /* Creates a gene based on the global default */
        var def = API.getGlobalDefault();
        console.log(def);
        var i = 0;
        allGenes.push(<Gene key={++i}
                            name={"Gene"+i}
                            // inheritance={def.freq_cutoffs.AD}
                            inheritance="AD"
                            frequencyHiExternal={def.freq_cutoffs.AD.external.hi_freq_cutoff}
                            frequencyHiInternal={def.freq_cutoffs.AD.internal.hi_freq_cutoff}
                            frequencyLowExternal={def.freq_cutoffs.AD.external.lo_freq_cutoff}
                            frequencyLowInternal={def.freq_cutoffs.AD.internal.lo_freq_cutoff}
                            diseaseMode={def.disease_mode}
        />
        );

        /* change a gene based on dropdown */
        var gene = this.setGroupGene();

        allGenes.push(gene);




        return (
            <div>
                <select value={this.state.group} onChange={this.handleChange}>
                    <option value="default">Default</option>
                    <option value="low_freq">Low Freq</option>
                </select>
                <table>
                    <tr>
                        {headings}
                    </tr>
                    {allGenes}
                    {this.state.group}
                </table>

            </div>

        )
    };
}
