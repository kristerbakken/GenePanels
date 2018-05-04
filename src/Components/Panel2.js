import React, { Component } from 'react';
import ToolsPanel from "./ToolsPanel";
import Gene2 from "./Gene2";

export default class Panel2 extends Component {



    render() {

        let extendedGenes = {};
        let genes = [];

        let color = {};
        color.exHi="red";
        color.exLo="red";
        color.inHi="red";
        color.inLo="red";


        for (let x in this.props.genes) {
            let freq = {};
            freq.exHi=this.props.genes[x].freqExHi;
            freq.inHi=this.props.genes[x].freqInHi;
            freq.exLo=this.props.genes[x].freqExLo;
            freq.inLo=this.props.genes[x].freqInLo;

            genes.push(<Gene2
                name={this.props.genes[x].name}
                key={this.props.genes[x].key}
                inheritance={this.props.genes[x].inheritance}
                // freqExHi={this.props.genes[x].freqExHi}
                // freqInHi={this.props.genes[x].freqInHi}
                // freqExLo={this.props.genes[x].freqExLo}
                // freqInLo={this.props.genes[x].freqInLo}
                freqs={freq}
                diseaseMode={this.props.genes[x].disease_mode}
                lastExonImportant={this.props.genes[x].last_exon_important}
                comment={this.props.genes[x].comment}
                blurComment={this.props.blurComment}
                changeCommentClass={this.props.changeCommentClass}
                color={color}
            />);
        }



        return (
            <div id='main_panel' className="main_panel">
                <ToolsPanel toggleModified={this.props.toggleModified}
                            showModified={this.props.showModified}
                            changeSearch={this.props.changeSearch}
                            savePanel={this.props.savePanel}
                            searchValue={this.props.searchValue}
                />

                <div className="extended_genes">
                    <table>
                        <tbody>

                            <tr>
                                {this.props.headings}
                            </tr>
                            {/*{extendedGenes}*/}
                        </tbody>
                    </table>
                </div>
                <div className="genes">
                    <table>
                        {genes}
                    </table>
                </div>
            </div>
        );
    }
}
