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

        const listItems = genes
            .map(item => {
                return (
                        <Gene key={item.name}
                              name={item.name}
                              inheritance={item.values["Inheritance"]}
                              frequencyHiExternal={item.values["Frequency HI external"]}
                              frequencyHiInternal={item.values["Frequency HI internal"]}
                              frequencyLowExternal={item.values["Frequency LOW external"]}
                              frequencyLowInternal={item.values["Frequency LOW internal"]}
                        />
                )
            });


        return (
            <div>
                <table>
                    <tr>
                        <th>Gene name</th>
                        <th>Inheritance</th>
                        <th>Frequency HI External</th>
                        <th>Frequency HI Internal</th>
                        <th>Frequency LOW External</th>
                        <th>Frequency LOW Internal</th>
                    </tr>
                    {listItems}
                </table>

            </div>

        )
    };
}
