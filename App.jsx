import React from 'react';
import API from "./api";
import './sass/style.scss';


import Panel2 from "./Components/Panel2";
import SelectionPanel from "./Components/SelectionPanel";

export default class App extends React.Component {


    render() {
        return (
            <div>

               <Panel2
                   panelConfig={API.getGenePanelConfig2()}
                   globalDefault={API.getGlobalDefault()}
                   geneList={API.getGeneList()}
               />
            </div>
        );
    }
}

//export default App;