import React from 'react';

export default class Gene extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            commentClass: "comment"
        }

        this.changeCommentClass = this.changeCommentClass.bind(this);
        this.blurComment = this.blurComment.bind(this);
    }

    changeCommentClass() {
        this.setState({
            commentClass: (this.state.commentClass === "comment") ? "comment comment_test" : "comment"
        });
    }

    blurComment(event) {
        this.changeCommentClass();
        this.props.changeComment(event);
    }

    render() {
        const gene = this.props.values;
        const inheritance = (gene.inheritance === "AD") ? "AD" : "default";
        const ids = ["ex;Hi;", "in;Hi;", "ex;Lo;", "in;Lo;"];

        const currentValues = [
            "" + gene.external.hi_freq_cutoff,
            "" + gene.internal.hi_freq_cutoff,
            "" + gene.external.lo_freq_cutoff,
            "" + gene.internal.lo_freq_cutoff,
            gene.disease_mode,
            gene.last_exon_important
        ];
        const globalDefaults = [
            this.props.defaultValues.freq_cutoffs[inheritance].external.hi_freq_cutoff,
            this.props.defaultValues.freq_cutoffs[inheritance].internal.hi_freq_cutoff,
            this.props.defaultValues.freq_cutoffs[inheritance].external.lo_freq_cutoff,
            this.props.defaultValues.freq_cutoffs[inheritance].internal.lo_freq_cutoff,
            this.props.defaultValues.disease_mode,
            this.props.defaultValues.last_exon_important,
        ];
        const groupDefaults = [
            this.props.groupValues.freq_cutoff_groups[inheritance].external.hi_freq_cutoff,
            this.props.groupValues.freq_cutoff_groups[inheritance].internal.hi_freq_cutoff,
            this.props.groupValues.freq_cutoff_groups[inheritance].external.lo_freq_cutoff,
            this.props.groupValues.freq_cutoff_groups[inheritance].internal.lo_freq_cutoff,
            this.props.groupValues.disease_mode,
            this.props.groupValues.last_exon_important,
        ];

        const freqs = [];
        var color = "white";

        for (var i = 0; i < ids.length; i++) {

            if (currentValues[i] === ("" + globalDefaults[i])) {
                color = "white";
            } else if (currentValues[i] === ("" + groupDefaults[i])){
                color = "red";
            } else {
                color = "yellow"
            }

            freqs.push(
                <td className={"color_" + color}><input id={ids[i] + gene.name} type="text" value={currentValues[i]} onChange={this.props.changeValue}/></td>
            );
        }

        if (currentValues[4] === globalDefaults[4]){
            color = "white";
        } else if (currentValues[4] === groupDefaults[4]) {
            color = "red";
        } else {
            color = "yellow"
        }

        freqs.push(
            <td className={"color_" + color}>
                <select id={"dm;" + gene.name} value={gene.disease_mode} onChange={this.props.changeOption}>
                    <option value="ANY">ANY</option>
                    <option value="LOF">LOF</option>
                    <option value="MISS">MISS</option>
                </select>
            </td>
        );

        if (currentValues[5] === globalDefaults[5]){
            color = "white";
        } else if (currentValues[5] === groupDefaults[5]) {
            color = "red";
        } else {
            color = "yellow"
        }

        freqs.push(
            <td className={"color_" + color}>
                <select id={"lei;" + gene.name} value={gene.last_exon_important} onChange={this.props.changeOption}>
                    <option value="LENI">LENI</option>
                    <option value="LEI">LEI</option>
            </select>
            </td>
        );

        freqs.push(
            <td className={this.state.commentClass}>
            {/*<td className="comment">*/}
                <div className="inner"> <textarea id={"comment;" + gene.name} onFocus={this.changeCommentClass} onBlur={this.blurComment} defaultValue={this.props.values.comment}/></div>
                {/*<input id={"comment;" + gene.name} type="text" value={this.props.values.comment} onChange={this.props.changeComment}/>*/}
                {/*<div className="inner" contentEditable={true}><p>{this.props.values.comment}</p></div>*/}
            </td>

        );

        return (
            <tr>
                <td className="gene_name">{gene.name}</td>
                <td><a href={"https://www.genenames.org/cgi-bin/gene_symbol_report?hgnc_id=HGNC:" + gene.key}>{gene.key}</a></td>
                <td>{gene.inheritance}</td>
                {freqs}
            </tr>
        )
    };
}