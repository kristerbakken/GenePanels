import React from 'react';
export default class ToolsPanel extends React.Component {

    constructor(props) {
        super(props);


        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        // console.log("Selection");
        // console.log(this.props);

    }

    render() {



        return (
            <div className='tools_panel'>
                <h1>Tools</h1>
                <input type="text" placeholder="search" onChange={this.props.changeSearch} value={this.props.searchValue}/>
                <div className="toggle">
                    <label>
                        <input
                            type="checkbox"
                            value="Modified"
                            defaultChecked={true}
                            onChange={this.props.toggleModified}
                        />
                        <span>show modified</span>
                    </label>
                </div>
            </div>

        )
    };
}