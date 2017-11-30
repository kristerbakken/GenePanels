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
                   //panelConfig={API.getGenePanelConfig2()}
                   panelConfig={API.getModifiedPanel()}
                   globalDefault={API.getGlobalDefault()}
                   geneList={API.getGeneList()}
                   // geneList={API.testLargeAmountOfGenes()} // uses a list of 2700+ genes
               />
            </div>
        );
    }
}

//export default App;