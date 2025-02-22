import React from "react";
import logo from "./logo.svg";
import "./App.css";
const { SingleNodeClient, deserializeNftOutput } = require("@iota/iota.js");
const { Converter, ReadStream } = require("@iota/util.js");



const API_ENDPOINT = "http://localhost:14265/";

function App() {

  const init = async (): Promise<void> => {
    const client = new SingleNodeClient(API_ENDPOINT);
    console.log("client", client);

    const info = await client.info();
    console.log("Node Info", info);
    
    const firstResult = await client.block("0xfb26e7a2a2e6a44a7ab71d1a55eb40c8a2035ad233710afe2399fae1ba24029c");
    console.log("firstResult", firstResult);
    const output = await client.output("0x3459a69b8a394f64ad3b7e9b149263f0659fe8af843af4f20c690cd30177be08");
    console.log("output", output);
    // const outputBytes = await client.outputRaw("0x3459a69b8a394f64ad3b7e9b149263f0659fe8af843af4f20c690cd30177be08");
    // console.log("outputBytes", outputBytes);
    // let data = new ReadStream(outputBytes)
    // let test = deserializeNftOutput(data)
    // console.log("test", test);
    // const outputMetadata = await client.outputMetadata("0x3459a69b8a394f64ad3b7e9b149263f0659fe8af843af4f20c690cd30177be08");
    // console.log("outputMetadata", outputMetadata);


  };

  init()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
