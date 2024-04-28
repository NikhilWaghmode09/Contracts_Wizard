import ContractDisplay from '../components/ContractDisplay'
import ContractSelector from '../components/ContractSelector'
import FormRenderer from '../components/FormRenderer'
import ercdemo from '../contracts/ercdemo'

const CreateContractScreen = () => {
  return (
    <div className="flex flex-col gap-12">
      <ContractSelector />
      <h1 className="text-slate-700 font-bold text-5xl">ERC1155</h1>
      <FormRenderer schema={ercdemo.formFields} />
      <ContractDisplay />
    </div>
  )
}

export default CreateContractScreen
