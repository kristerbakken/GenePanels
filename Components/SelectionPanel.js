import React from 'react';
export default class SelectionPanel extends React.Component {

    constructor(props) {
        super(props);


        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        // console.log("Selection");
        // console.log(this.props);

    }

    render() {

        const genes = [];
        var gene;
        for (const i in this.props.geneList) {
            gene = this.props.geneList[i][0];

            if (gene.includes(this.props.searchValue)) {
                genes.push(
                        <div className="toggle">
                            <label>
                                <input
                                    type="checkbox"
                                    className={gene}
                                    value={gene}
                                    defaultChecked={gene[1]}
                                    onChange={this.props.onChange}
                                />
                                <span>{gene}</span>
                            </label>
                        </div>
                );
            }
        }

        return (
            <div className='selection_panel'>
                <h1>Genes</h1>
                {genes}
            </div>

        )
    };
}