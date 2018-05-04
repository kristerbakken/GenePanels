import React, { Component } from 'react';

export default class Gene2 extends Component {

    constructor(props) {
        super(props);


    }

    render() {

        return (
            <tbody>
                <tr>

                    {/* static fields*/}
                    <td className="gene_name">{this.props.name}</td>
                    <td><a href={"https://www.genenames.org/cgi-bin/gene_symbol_report?hgnc_id=HGNC:" + this.props.key}>{this.props.key}</a></td>
                    <td>{this.props.inheritance}</td>

                    {/* frequency fields*/}
                    <td className={"color_" + this.props.color.exHi}>
                        <input id={"ex;Hi" + this.props.name}
                               type="text"
                               value={this.props.freqs.exHi}
                               onChange={this.props.changeValue}
                        />
                    </td>
                    <td className={"color_" + this.props.color.inHi}>
                        <input id={"in;Hi" + this.props.name}
                               type="text"
                               value={this.props.freqs.inHi}
                               onChange={this.props.changeValue}
                        />
                    </td>
                    <td className={"color_" + this.props.color.exLo}>
                        <input id={"ex;Lo" + this.props.name}
                               type="text"
                               value={this.props.freqs.exLo}
                               onChange={this.props.changeValue}
                        />
                    </td>
                    <td className={"color_" + this.props.color.inLo}>
                        <input id={"in;Lo" + this.props.name}
                               type="text"
                               value={this.props.freqs.inLo}
                               onChange={this.props.changeValue}
                        />
                    </td>

                    {/* disease mode and last exon important fields*/}
                    <td className={"color_" + this.props.color.disease_mode}>
                        <select id={"dm;" + this.props.name} value={this.props.disease_mode} onChange={this.props.changeOption}>
                            <option value="ANY">ANY</option>
                            <option value="LOF">LOF</option>
                            <option value="MISS">MISS</option>
                        </select>
                    </td>
                    <td className={"color_" + this.props.color.last_exon_important}>
                        <select id={"lei;" + this.props.name} value={this.props.last_exon_important} onChange={this.props.changeOption}>
                            <option value="LENI">LENI</option>
                            <option value="LEI">LEI</option>
                        </select>
                    </td>

                    {/* comment field*/}
                    <td className={this.props.commentClass}>
                        <div className="inner"> <textarea id={"comment;" + this.props.name} onFocus={this.props.changeCommentClass} onBlur={this.props.blurComment} defaultValue={this.props.comment}/></div>
                    </td>

                </tr>
            </tbody>
        );
    }
}

