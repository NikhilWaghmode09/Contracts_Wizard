import { useEffect, useState } from "react";
import "./App.css";
import { erc20 } from "@openzeppelin/wizard";

function ERC20() {
  const [code, setCode] = useState("");
  const [mintable, setMintable] = useState(false);
  const [burnable, setBurnable] = useState(false);
  const [pausable, setPausable] = useState(false);
  const [votes, addVotes] = useState(false);
  const [permit, Permitable] = useState(false);
  const [name, setName] = useState(""); // State for name
  const [symbol, setSymbol] = useState(""); // State for symbol

  useEffect(() => {
    const contractParams = {
      name: name || "ExampleToken", // Use entered name or default
      symbol: symbol || "ETK", // Use entered symbol or default
      mintable,
      burnable,
      pausable,
      votes,
      permit,

    };

    setCode(erc20.print(contractParams));
  }, [name, symbol, mintable, burnable, pausable, votes, permit]);

  const handleChange = (e) => {
    console.log(e)
    setMintable(e.target.checked)
  }
  const handleChange1 = (f) => {
    console.log(f)
    setBurnable(f.target.checked)
  }
  const handleChange2 = (g) => {
    console.log(g)
    setPausable(g.target.checked)
  }
  const handleChange3 = (h) => {
    console.log(h)
    addVotes(h.target.checked)
  }
  const handleChange4 = (i) => {
    console.log(i)
    Permitable(i.target.checked)
  }
  const handleNameChange = (j) => {
    setName(j.target.value); // Update name state
  };

  const handleSymbolChange = (k) => {
    setSymbol(k.target.value); // Update symbol state
  };
  return (
    <>
      <h1>ERC20</h1>
      <label>Name: </label>
      <input type="text" value={name} onChange={handleNameChange} />
      <br />
      <label>Symbol: </label>
      <input type="text" value={symbol} onChange={handleSymbolChange} />
      <br />
      <label>Mintable</label>
      <input type="checkbox" onChange={(e) => handleChange(e)} />
      <label>Burnable</label>
      <input type="checkbox" onChange={(f) => handleChange1(f)} />
      <label>Pausable</label>
      <input type="checkbox" onChange={(g) => handleChange2(g)} />      
      <label>Votes</label>
      <input type="checkbox" onChange={(h) => handleChange3(h)} />
      <label>Permit</label>
      <input type="checkbox" onChange={(i) => handleChange4(i)} />


      <pre>{code}</pre>
    </>
  );
}

export default ERC20;
