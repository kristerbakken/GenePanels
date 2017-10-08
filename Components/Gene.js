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

        this.handleClick = this.handleClick.bind(this);
        // this.onChange = this.onChange.bind(this);

    }

    // componentDidMount() {
    //
    //     console.log(this.props);
    // }

    // componentWillReceiveProps(nextProps) {
    //     console.log("nye");
    //     console.log(nextProps);
    // }
    handleClick() {
        console.log("clicked");
    }

    // onChange(event) {
    //     console.log(event.target.id);
    //     // console.log(event.target.value);
    //     this.props.changeValue();
    //     // this.props.changeValue(key, ex, hi, event.target.value);
    // }

    render() {

        const gene = this.props.values;

        // var color = "white";
        // if(gene.external.hi_freq_cutoff !==this.props.defaultValues.external.hi_freq_cutoff) {
        //     color = "red";
        //     console.log(gene);
        // }

        const exHi = gene.external.hi_freq_cutoff;
        const inHi = gene.internal.hi_freq_cutoff;
        const exLo = gene.external.lo_freq_cutoff;
        const inLo = gene.internal.lo_freq_cutoff;

        const currentValues = [
            exHi,
            inHi,
            exLo,
            inLo,
            gene.disease_mode,
            gene.last_exon_important
        ];
        const globalDefaults = [
            this.props.defaultValues.freq_cutoffs.AD.external.hi_freq_cutoff,
            this.props.defaultValues.freq_cutoffs.AD.internal.hi_freq_cutoff,
            this.props.defaultValues.freq_cutoffs.AD.external.lo_freq_cutoff,
            this.props.defaultValues.freq_cutoffs.AD.internal.lo_freq_cutoff,
            this.props.defaultValues.disease_mode,
            this.props.defaultValues.last_exon_important,
        ];
        const ids = ["ex;Hi;", "in;Hi", "ex;Lo;", "in;Lo;"];

        const freqs = [];
        var color = "white";

        for (var i = 0; i < ids.length; i++) {

            if (currentValues[i] !== globalDefaults[i]) {
                color = "red";
            } else {
                color = "white";
            }

            freqs.push(
                <td className={"color_" + color}><input id={ids[i] + gene.key} type="number" value={currentValues[i]} onChange={this.props.changeValue}/></td>
            );
        }

        if (currentValues[4] !== globalDefaults[4]) {
            color = "red";
        } else {
            color = "white";
        }

        freqs.push(
            <td className={"color_" + color}><select>
                <option value={gene.disease_mode}>{gene.disease_mode}</option>
                <option value="ANY">ANY</option>
                <option value="LOF">LOF</option>
                <option value="MISS">MISS</option>
            </select></td>
        );

        if (currentValues[5] !== globalDefaults[5]) {
            color = "red";
        } else {
            color = "white";
        }

        freqs.push(
            <td className={"color_" + color}><select>
                <option value={gene.last_exon_important}>{gene.last_exon_important}</option>
                <option value="LENI">LENI</option>
                <option value="LEI">LEI</option>
            </select></td>
        );



        return (
            <tr>
                <td>{gene.name}</td>
                <td>{gene.key}</td>
                <td>{gene.inheritance}</td>
                {freqs}
            </tr>

        )
    };
}