import React from 'react';
export default class ToolsPanel extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        var modifiedLabel = (this.props.showModified) ? "   Show all genes  " : "Show modified genes";
        return (
            <div className='tools_panel'>
                <input type="text" placeholder="search" onChange={this.props.changeSearch} value={this.props.searchValue}/>
                <div className="toggle">
                    <label>
                        <input
                            type="checkbox"
                            value="Modified"
                            defaultChecked={this.props.showModified}
                            onChange={this.props.toggleModified}
                        />
                        <span>{modifiedLabel}</span>
                    </label>
                </div>
                <button onClick={this.props.savePanel}>Save panel</button>
            </div>

        )
    };
}