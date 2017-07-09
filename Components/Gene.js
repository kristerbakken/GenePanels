import React from 'react';
import API from "../api"

/*
Should specify more, i.e. adding proptypes
 */
export default class Gene extends React.Component {

    /*
        Inheritance: velge mellom AD/AR/XD/XR  - enum?
        Frequency: value, typ 0.005
        Disease mode: true/false?
        Last exon important: true/false
        Free text: string(s)
         */
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //
    //     console.log(this.props);
    // }

    // componentWillReceiveProps(nextProps) {
    //     console.log("nye");
    //     console.log(nextProps);
    // }

    render() {

        // console.log(this.props);

        // var values = [];
        // for (var i in this.props.values) {
        //     values.push(
        //         <td>{this.props.values[i]}</td>
        //     );
        // }
        const gene = this.props.values;

        return (
            <tr>
                <td>{gene.name}</td>
                <td>{gene.key}</td>
                <td>{gene.inheritance}</td>
                <td>{gene.external.hi_freq_cutoff}</td>
                <td>{gene.internal.hi_freq_cutoff}</td>
                <td>{gene.external.lo_freq_cutoff}</td>
                <td>{gene.internal.lo_freq_cutoff}</td>
                <td>{gene.disease_mode}</td>
                <td>{gene.last_exon_important}</td>
            </tr>
        )
    };
}