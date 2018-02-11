import React from 'react';
import API from "./api";
import Panel from "./Components/Panel";
import './sass/style.scss';

/**
 * Main class importing data and initiating the application
 */
export default class App extends React.Component {
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
            </div>
        );
    }
}