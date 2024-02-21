import React, { useState } from 'react';
import ERC20 from './ERC20.jsx';
import ERC721 from './ERC721.jsx';
import ERC1155 from './ERC1155.jsx'
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [activeFileType, setActiveFileType] = useState('ERC721');

  const selectERC721 = () => {
    setActiveFileType('ERC721');
  };
  const selectERC1155 = () => {
    setActiveFileType('ERC1155');
  };
  const selectERC20 = () => {
    setActiveFileType('ERC20');
  };
  return (
<<<<<<< HEAD
    <div>
      
      {/* Button for ERC721 */}
      <button className="toggle-button" onClick={selectERC721}>
        ERC721
      </button>
      {/* Button for ERC1155 */}
      <button className="toggle-button" onClick={selectERC1155}>
        ERC1155
      </button>
      {/* Button for ERC20 */}
      <button className="toggle-button" onClick={selectERC20}>
        ERC20
      </button>
      {/* Render different components based on active file type */}
      
      {activeFileType === 'ERC721' && <ERC721 />}
      {activeFileType === 'ERC1155' && <ERC1155 />}
      {activeFileType === 'ERC20' && <ERC20 />}
    </div>
=======
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
>>>>>>> 72ab1e44188cde6a6956144b3e01979891dd7ae7
  );
};

export default App;
