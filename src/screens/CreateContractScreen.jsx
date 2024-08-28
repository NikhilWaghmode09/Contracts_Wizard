import ContractDisplay from '../components/ContractDisplay'
import ContractSelector from '../components/ContractSelector'
import FormRenderer from '../components/FormRenderer'

import { AppContext } from '../App'
import { useContext } from 'react'

import contracts from '../contracts'
import { useNavigate } from 'react-router-dom'

const CreateContractScreen = () => {
  const { selectedContract } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-12">
      <ContractSelector />
      <h1 className="text-slate-700 font-bold text-5xl">{selectedContract}</h1>
      <FormRenderer schema={contracts[selectedContract].formFields} />
      <ContractDisplay />
      {/* <button
        onClick={() => navigate('/salesoptions')}
        className="mb-8 ml-auto uppercase bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700"
      >
        Next
      </button> */}
    </div>
  )
}

export default CreateContractScreen
