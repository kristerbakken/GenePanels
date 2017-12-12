import React from 'react';
import API from "../api"


//IS NOT USED IN CURRENT VERSION
export default class ExtendedGene extends React.Component {

    constructor(props) {
        super(props);

        // this.handleClick = this.handleClick.bind(this);
        // this.onChange = this.onChange.bind(this);

    }

    render() {

        const gene = this.props.values;
        console.log(gene);

        var freqs = [];

        const currentValues = [
            gene.cutoffs.AD.external.hi_freq_cutoff,
            gene.cutoffs.AD.internal.hi_freq_cutoff,
            gene.cutoffs.AD.external.lo_freq_cutoff,
            gene.cutoffs.AD.internal.lo_freq_cutoff,
            gene.disease_mode,
            gene.last_exon_important
        ];

        const ids = ["ex;Hi;", "in;Hi;", "ex;Lo;", "in;Lo;"];
        var color = (gene.name === "globalDefault") ? "white" : "red";

        for (var i = 0; i < 4; i++) {

            freqs.push(
                <td className={"color_" + color}><input id={ids[i] + gene.name} type="number" value={currentValues[i]} onChange={this.props.changeValue}/></td>
            );
        }
        //
        // freqs.push(
        //     <td className={"color_" + color}><select>
        //         <option value={gene.disease_mode}>{gene.disease_mode}</option>
        //         <option value="ANY">ANY</option>
        //         <option value="LOF">LOF</option>
        //         <option value="MISS">MISS</option>
        //     </select></td>
        // );
        //
        // freqs.push(
        //     <td className={"color_" + color}><select>
        //         <option value={gene.last_exon_important}>{gene.last_exon_important}</option>
        //         <option value="LENI">LENI</option>
        //         <option value="LEI">LEI</option>
        //     </select></td>
        // );
        //
        // freqs.push(
        //     <td>
        //         <p>{gene.comment}</p>
        //     </td>
        //
        // );


        return (
            <div>
                <tr>
                    <td rowSpan="2">{gene.name}</td>
                    <td rowSpan="2">{gene.key}</td>
                    <td>AD</td>
                    {freqs}
                </tr>
                <tr>
                    <td>default</td>
                </tr>
            </div>
        )
    };
}