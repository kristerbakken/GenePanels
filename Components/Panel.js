import React from 'react';
import Gene from "./Gene";
import API from "../api";

export default class Panel extends React.Component {

    render() {

        var genes = API.getGenes().genes;

        var allGenes = [];

        for (var item in genes) {
            allGenes.push(genes[item]);
        }

        // console.log(genes);
        
        
        const values = [
            "Gene name",
            "Inheritance",
            "Frequency HI external",
            "Frequency HI internal",
            "Frequency LOW external",
            "Frequency LOW internal",
            "Disease mode"
        ];

        const headings = [];
        for (const i in values) {
            headings.push(<th>{values[i]}</th>);
        }

        const listItems = genes
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



        return (
            <div>
                <table>
                    <tr>
                        {headings}
                    </tr>
                    {listItems}
                </table>

            </div>

        )
    };
}
