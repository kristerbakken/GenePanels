import React from 'react';

/**
 * React component for displaying values for a given gene.
 */
export default class Gene extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            commentClass: "comment"
        };
        this.changeCommentClass = this.changeCommentClass.bind(this);
        this.blurComment = this.blurComment.bind(this);
    }

    /**
     * Changes the CSS class of the comment-element for appearance purposes
     */
    changeCommentClass() {
        this.setState({
            commentClass: (this.state.commentClass === "comment") ? "comment comment_test" : "comment"
        });
    }

    /**
     * Triggers the change of the comment when the element loses focus
     */
    blurComment(event) {
        this.changeCommentClass();
        this.props.changeComment(event);
    }

    /**
     * Computes what to render and renders it
     */
    render() {
        const gene = this.props.values;
        const inheritance = (gene.inheritance === "AD") ? "AD" : "default";
        const ids = ["ex;Hi;", "in;Hi;", "ex;Lo;", "in;Lo;"];

        // Values used for comparing global, panel and current gene
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

        let color = "white";
        const freqs = [];

        // Creates the elements for frequency elements
        for (let i = 0; i < ids.length; i++) {

            // Decides which color the element should have
            if (currentValues[i] === ("" + globalDefaults[i])) {
                color = "white";
            } else if (currentValues[i] === ("" + groupDefaults[i])){
                color = "red";
            } else {
                color = "yellow"
            }

            // Adds the frequency elements
            freqs.push(
                <td className={"color_" + color}><input id={ids[i] + gene.name} type="text" value={currentValues[i]} onChange={this.props.changeValue}/></td>
            );
        }

        // Decides which color the element should have
        if (currentValues[4] === globalDefaults[4]){
            color = "white";
        } else if (currentValues[4] === groupDefaults[4]) {
            color = "red";
        } else {
            color = "yellow"
        }

        // Adds disease mode element
        freqs.push(
            <td className={"color_" + color}>
                <select id={"dm;" + gene.name} value={gene.disease_mode} onChange={this.props.changeOption}>
                    <option value="ANY">ANY</option>
                    <option value="LOF">LOF</option>
                    <option value="MISS">MISS</option>
                </select>
            </td>
        );

        // Decides which color the element should have
        if (currentValues[5] === globalDefaults[5]){
            color = "white";
        } else if (currentValues[5] === groupDefaults[5]) {
            color = "red";
        } else {
            color = "yellow"
        }

        // Adds last exon important element
        freqs.push(
            <td className={"color_" + color}>
                <select id={"lei;" + gene.name} value={gene.last_exon_important} onChange={this.props.changeOption}>
                    <option value="LENI">LENI</option>
                    <option value="LEI">LEI</option>
            </select>
            </td>
        );

        // Adds comment element
        freqs.push(
            <td className={this.state.commentClass}>
                <div className="inner"> <textarea id={"comment;" + gene.name} onFocus={this.changeCommentClass} onBlur={this.blurComment} defaultValue={this.props.values.comment}/></div>
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