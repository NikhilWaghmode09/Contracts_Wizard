import { CodeBlock, atomOneLight } from 'react-code-blocks'

import { AppContext } from '../App'
import { useContext, useEffect, useState } from 'react'

import contracts from '../contracts'

const ContractDisplay = () => {
  const { selectedContract, userPreferences } = useContext(AppContext)
  const [generatedCode, setGeneratedCode] = useState('')

  useEffect(() => {
    const contractCode =
      contracts[selectedContract].generatorFunction(userPreferences)
    setGeneratedCode(contractCode)
  }, [selectedContract, userPreferences])

  return (
    <div
      className="p-4 rounded-lg border-slate-700 border-[1px]"
      style={{
        backgroundColor: atomOneLight.backgroundColor,
      }}
    >
      <CodeBlock
        showLineNumbers={false}
        theme={atomOneLight}
        text={generatedCode}
        language="javascript"
        customStyle={{ fontFamily: 'monospace', fontSize: '0.9rem' }}
      />
    </div>
  )
}

export default ContractDisplay
