import React from 'react';
export default class Panel extends React.Component {

    constructor(props) {
        super(props);


        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        console.log("Selection");
        console.log(this.props);

    }

    render() {

        const genes = [];
        var gene;
        for (const i in this.props.geneList) {
            gene = this.props.geneList[i];
            genes.push(
                    <div id="toggle">
                        <label>
                            <input
                                type="checkbox"
                                id={gene}
                                value={gene}
                                defaultChecked={gene[1]}
                                onChange={this.props.onChange}
                            />
                            <span>{gene}</span>
                        </label>
                    </div>
            );
            // console.log(gene);
        }


        return (
            <div id='selection_panel'>
                <h1>Genes</h1>
                {genes}
            </div>

        )
    };
}