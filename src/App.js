import React, { Component } from 'react';
// import logo from './logo.svg';
import API from "./api";
import Panel from "./Components/Panel";
import App2 from "./App2";

class App extends Component {
  render() {
    return (
        <div>
            <Panel //comment/uncomment to get the wanted panel/gene list
                //panelConfig={API.getGenePanelConfig()}
                //panelConfig={API.getGenePanelConfig2()}
                panelConfig={API.getModifiedPanel()}
                globalDefault={API.getGlobalDefault()}
                geneList={API.getGeneList()}
                // geneList={API.testLargeAmountOfGenes()} // uses a list of 2700+ genes
            />
            <App2
                panelConfig={API.getModifiedPanel()}
                globalDefault={API.getGlobalDefault()}
                geneList={API.getGeneList()}
            />
        </div>
    );
  }
}

export default App;
