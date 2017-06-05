import React from 'react';
import API from "./api";


import Panel2 from "./Components/Panel2";

export default class App extends React.Component {


    render() {
        return (
            <div>
               <Panel2
                   panelConfig={API.getGenePanelConfig()}
                   globalDefault={API.getGlobalDefault()}
                   geneList={API.getGeneList()}
               />
            </div>
        );
    }
}

//export default App;