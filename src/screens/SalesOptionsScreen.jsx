import ContractDisplay from '../components/ContractDisplay'
import ContractSelector from '../components/ContractSelector'

import { AppContext } from '../App'
import { useContext } from 'react'
import SalesOptionSelector from '../components/SalesOptionSelector'
import { useNavigate } from 'react-router-dom'

const SalesOptionsScreen = () => {
  const { selectedContract } = useContext(AppContext)
  const navigate = useNavigate()

  const saleOptions = [
    {
      label: 'Simple NFT Sale',
      identifier: 'simple',
    },
    {
      label: 'Limited Sale',
      identifier: 'limited',
    },
    {
      label: 'Raffle',
      identifier: 'raffle',
    },
    {
      label: 'Sale with Cap',
      identifier: 'cap',
    },
    {
      label: 'Subscription',
      identifier: 'subscription',
    },
  ]

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-slate-700 font-bold text-5xl mt-24">Sales Options</h1>
      <SalesOptionSelector salesOptions={saleOptions} />
      <ContractDisplay />
      <button
        onClick={() => navigate('/')}
        className="mb-8 mr-auto uppercase bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700"
      >
        Back
      </button>
    </div>
  )
}

export default SalesOptionsScreen
