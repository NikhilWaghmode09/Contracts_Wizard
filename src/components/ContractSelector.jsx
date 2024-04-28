const ContractSelector = () => {
  return (
    <div className="flex gap-4 flex-wrap [&>*]:text-slate-800 [&>*]:px-4 [&>*]:py-2 [&>*]:border-[2px] [&>*]:border-slate-600 [&>*]:rounded [&>*:hover]:text-white [&>*:hover]:bg-slate-700 [&>*]:transition-all pt-20">
      <button>ERC721</button>
      <button>ERC1155</button>
      <button>ERC20</button>
      <button>ERC721A</button>
      <button>ERC404</button>
      <button>ERC4907</button>
    </div>
  )
}
export default ContractSelector
