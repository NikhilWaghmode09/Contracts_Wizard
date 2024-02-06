import React, { useState } from 'react';
import ERC20 from './ERC20.jsx';
import ERC721 from './ERC721.jsx';
import ERC1155 from './ERC1155.jsx'
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [activeFileType, setActiveFileType] = useState('ERC20');

  const selectERC20 = () => {
    setActiveFileType('ERC20');
  };

  const selectERC721 = () => {
    setActiveFileType('ERC721');
  };
  const selectERC1155 = () => {
    setActiveFileType('ERC1155');
  };

  return (
    <div>
      {/* Button for ERC20 */}
      <button className="toggle-button" onClick={selectERC20}>
        ERC20
      </button>

      {/* Button for ERC721 */}
      <button className="toggle-button" onClick={selectERC721}>
        ERC721
      </button>
      {/* Button for ERC1155 */}
      <button className="toggle-button" onClick={selectERC1155}>
        ERC1155
      </button>

      {/* Render different components based on active file type */}
      {activeFileType === 'ERC20' && <ERC20 />}
      {activeFileType === 'ERC721' && <ERC721 />}
      {activeFileType === 'ERC1155' && <ERC1155 />}
    </div>
  );
};

export default App;
