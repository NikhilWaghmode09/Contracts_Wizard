import { AppContext } from '../App'
import { useContext } from 'react'
import contracts from '../contracts'

const SalesOptionSelector = ({ salesOptions }) => {
  const { setSelectedContract, selectedContract } = useContext(AppContext)

  // const handleSelect = (contract) => {
  //   setSelectedContract(contract)
  // }

  return (
    <div className="flex gap-4 flex-wrap [&>*]:text-slate-800 [&>*]:px-4 [&>*]:py-2 [&>*]:border-[2px] [&>*]:border-slate-600 [&>*]:rounded [&>*:hover]:text-white [&>*:hover]:bg-slate-700 [&>*]:transition-all">
      {salesOptions.map((option) => (
        <button
          // className={`${contract === selectedContract ? 'active' : ''}`}
          key={option.identifier}
          // onClick={() => handleSelect(contract)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
export default SalesOptionSelector
