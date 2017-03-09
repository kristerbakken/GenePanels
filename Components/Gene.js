import React from 'react';
import API from "../api"

export default class Gene extends React.Component {

    /*
        Inheritance: velge mellom AD/AR/XD/XR  - enum?
        Frequency: value, typ 0.005
        Disease mode: true/false?
        Last exon important: true/false
        Free text: string(s)
         */

    render() {

        // console.log(this.props);

        var values = [];
        for (var i in this.props) {
            values.push(
                <td>{this.props[i]}</td>
            );
        }

        return (
            <tr>
                {values}
            </tr>
        )
    };
}