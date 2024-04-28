import React, { useState } from 'react'
import ERC20 from './ERC20.jsx'
import ERC721 from './ERC721.jsx'
import ERC1155 from './ERC1155.jsx'
import ERC721A from './ERC721A.jsx'
import ERC404 from './ERC404.jsx'
import ERC4907 from './ERC4907.jsx'

import './App.css'

const App = () => {
  const [activeFileType, setActiveFileType] = useState('ERC721')

  const selectERC721 = () => {
    setActiveFileType('ERC721')
  }
  const selectERC1155 = () => {
    setActiveFileType('ERC1155')
  }
  const selectERC20 = () => {
    setActiveFileType('ERC20')
  }
  const selectERC721A = () => {
    setActiveFileType('ERC721A')
  }
  const selectERC404 = () => {
    setActiveFileType('ERC404')
  }
  const selectERC4907 = () => {
    setActiveFileType('ERC4907')
  }
  return (
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
      <button className="toggle-button" onClick={selectERC721A}>
        ERC721A
      </button>
      <button className="toggle-button" onClick={selectERC404}>
        ERC404
      </button>
      <button className="toggle-button" onClick={selectERC4907}>
        ERC4907
      </button>
      {/* Render different components based on active file type */}

      {activeFileType === 'ERC721' && <ERC721 />}
      {activeFileType === 'ERC1155' && <ERC1155 />}
      {activeFileType === 'ERC20' && <ERC20 />}
      {activeFileType === 'ERC721A' && <ERC721A />}
      {activeFileType === 'ERC404' && <ERC404 />}
      {activeFileType === 'ERC4907' && <ERC4907 />}
    </div>
  )
}

export default App
