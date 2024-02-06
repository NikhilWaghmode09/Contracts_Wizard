import { useEffect, useState } from "react";
import "./App.css";
import { erc1155 } from "@openzeppelin/wizard";

function App() {
  const [code, setCode] = useState("");
  const [mintable, setMintable] = useState(false);
  const [burnable, setBurnable] = useState(false);
  const [pausable, setPausable] = useState(false);
  const [name, setName] = useState(""); // State for name
  const [uri, setURI] = useState("");
  const [updatableUri, setUpdatableUri] = useState(true)
  const [supply, setSupply] = useState(false);
  useEffect(() => {
    const contractParams = {
      name: name || "ExampleToken",
      uri, // Use entered name or default // Use entered symbol or default
      mintable,
      burnable,
      pausable,
      updatableUri,
      supply
      
    };

    setCode(erc1155.print(contractParams));
  }, [
    name,
    uri,
    mintable,
    burnable,
    pausable,
    updatableUri,
    supply,

  ]);

  const handleMintable = (e) => {
    console.log(e);
    setMintable(e.target.checked);
  };
  const handleBurnable = (f) => {
    console.log(f);
    setBurnable(f.target.checked);
  };
  const handlePausable = (g) => {
    console.log(g);
    setPausable(g.target.checked);
  };

  const handleNameChange = (j) => {
    setName(j.target.value); // Update name state
  };

  const handleURIChange = (l) => {
    setURI(l.target.value);
  };

  const handleUpdatableURI = (m) => {
    console.log(m);
    setUpdatableUri(m.target.checked);
  };
  const handleSupplyTracking = (h) =>{
    console.log(h);
    setSupply(h.target.value);
  }
  
  return (
    <>
      <h1>ERC1155</h1>
      <label>Name: </label>
      <input type="text" value={name} onChange={handleNameChange} />
      <br />

      <label>URI: </label>
      <input type="text" value={uri} onChange={handleURIChange} />
      <br />

      <label>Mintable</label>
      <input type="checkbox" onChange={(e) => handleMintable(e)} />

      <label>Burnable</label>
      <input type="checkbox" onChange={(f) => handleBurnable(f)} />

      <label>Supply Tracking</label>
      <input type = "checkbox" onChange={(h) => handleSupplyTracking(h)} />
      <label>Pausable</label>
      <input type="checkbox" onChange={(g) => handlePausable(g)} />


      <label>Upgradable URI</label>
      <input type="checkbox" onChange={(m) => handleUpdatableURI(m)} />


      <pre>{code}</pre>
    </>
  );
}

export default App;
