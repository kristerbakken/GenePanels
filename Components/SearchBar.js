import React from 'react';
export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);


        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

    }

    render() {


        return (
            <div id="search_bar" className="search_bar">
                <div classname="test1"><h2>Search:</h2></div>
                <div classname="test2"><input id="search" type="text" value={this.props.value} onChange={this.props.onChange}/></div>
            </div>

        )
    };
}