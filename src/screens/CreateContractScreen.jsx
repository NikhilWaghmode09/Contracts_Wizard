import ContractDisplay from '../components/ContractDisplay'
import ContractSelector from '../components/ContractSelector'
import FormRenderer from '../components/FormRenderer'

import { AppContext } from '../App'
import { useContext } from 'react'

import contracts from '../contracts'

const CreateContractScreen = () => {
  const { selectedContract } = useContext(AppContext)

  return (
    <div className="flex flex-col gap-12">
      <ContractSelector />
      <h1 className="text-slate-700 font-bold text-5xl">{selectedContract}</h1>
      <FormRenderer schema={contracts[selectedContract].formFields} />
      <ContractDisplay />
    </div>
  )
}

export default CreateContractScreen
