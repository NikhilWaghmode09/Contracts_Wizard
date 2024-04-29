import { AppContext } from '../App'
import { useContext } from 'react'

const contractTypes = [
  'ERC721',
  'ERC1155',
  'ERC20',
  'ERC721A',
  'ERC404',
  'ERC4907',
]

const ContractSelector = () => {
  const { setSelectedContract, selectedContract } = useContext(AppContext)

  const handleSelect = (contract) => {
    setSelectedContract(contract)
  }

  return (
    <div className="flex gap-4 flex-wrap [&>*]:text-slate-800 [&>*]:px-4 [&>*]:py-2 [&>*]:border-[2px] [&>*]:border-slate-600 [&>*]:rounded [&>*:hover]:text-white [&>*:hover]:bg-slate-700 [&>*]:transition-all pt-20">
      {contractTypes.map((contract) => (
        <button
          className={`${contract === selectedContract ? 'active' : ''}`}
          key={contract}
          onClick={() => handleSelect(contract)}
        >
          {contract}
        </button>
      ))}
    </div>
  )
}
export default ContractSelector
