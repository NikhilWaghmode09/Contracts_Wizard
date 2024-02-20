import { useEffect, useState } from "react";
import "./App.css";
import { erc721 } from "@openzeppelin/wizard";

function ERC721() {
  const [code, setCode] = useState("");
  const [mintable, setMintable] = useState(false);
  const [burnable, setBurnable] = useState(false);
  const [pausable, setPausable] = useState(false);
  const [votes, addVotes] = useState(false);
  const [name, setName] = useState(""); // State for name
  const [symbol, setSymbol] = useState(""); // State for symbol
  const [baseUri, setBaseURI] = useState("");
  const [uriStorage, setURIStorage] = useState(false);
  const [enumerable, setEnumerable] = useState(false);
  const [incremental, setincremental] = useState(false);

  useEffect(() => {
    const contractParams = {
      name: name || "ExampleToken", // Use entered name or default
      symbol: symbol || "ETK", // Use entered symbol or default
      mintable,
      burnable,
      pausable,
      votes,
      baseUri,
      uriStorage,
      enumerable,
      incremental,
    };

    setCode(erc721.print(contractParams));
  }, [
    name,
    symbol,
    baseUri,
    uriStorage,
    mintable,
    burnable,
    pausable,
    votes,
    enumerable,
    incremental,
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
  const handleVotes = (h) => {
    console.log(h);
    addVotes(h.target.checked);
  };

  const handleNameChange = (j) => {
    setName(j.target.value); // Update name state
  };

  const handleSymbolChange = (k) => {
    setSymbol(k.target.value); // Update symbol state
  };

  const handleBaseURIChange = (l) => {
    setBaseURI(l.target.value);
  };
  const handleURIStorage = (m) => {
    console.log(m);
    setURIStorage(m.target.checked);
  };
  const handleEnumerable = (n) => {
    console.log(n);
    setEnumerable(n.target.checked);
  };
  const handleAutoIncrement = (o) => {
    setincremental(o.target.checked);
  };
  return (
    <>
      <h1>ERC721</h1>
      <label>Name: </label>
      <input type="text" value={name} onChange={handleNameChange} />
      <br />

      <label>Symbol: </label>
      <input type="text" value={symbol} onChange={handleSymbolChange} />
      <br />

      <label>Base URI: </label>
      <input type="text" value={baseUri} onChange={handleBaseURIChange} />
      <br />

      <label>Mintable</label>
      <input type="checkbox" onChange={(e) => handleMintable(e)} />

      <label>Auto Increment IDs</label>
      <input type="checkbox" onChange={(o) => handleAutoIncrement(o)} />

      <label>Burnable</label>
      <input type="checkbox" onChange={(f) => handleBurnable(f)} />

      <label>Pausable</label>
      <input type="checkbox" onChange={(g) => handlePausable(g)} />

      <label>Votes</label>
      <input type="checkbox" onChange={(h) => handleVotes(h)} />

      <label>URI Storage</label>
      <input type="checkbox" onChange={(m) => handleURIStorage(m)} />

      <label>Enumerable</label>
      <input type="checkbox" onChange={(n) => handleEnumerable(n)} />

      <pre>{code}</pre>
    </>
  );
}

export default ERC721;
