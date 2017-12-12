import React from 'react';
export default class ToolsPanel extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='tools_panel'>
                <input type="text" placeholder="search" onChange={this.props.changeSearch} value={this.props.searchValue}/>
                <div className="toggle">
                    <label>
                        <input
                            type="checkbox"
                            value="Modified"
                            defaultChecked={true}
                            onChange={this.props.toggleModified}
                        />
                        <span>Show modified</span>
                    </label>
                </div>
                <button onClick={this.props.savePanel}>Save panel</button>
            </div>

        )
    };
}