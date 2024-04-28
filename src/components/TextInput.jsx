import React from 'react'

const TextInput = ({ label, identifier }) => {
  return (
    <input
      className="border-slate-700 border-[1px] rounded px-4 py-2 text-slate-700 placeholder:text-slate-700 w-full bg-transparent"
      type="text"
      name={identifier}
      aria-label={label}
      placeholder={label}
    />
  )
}

export default TextInput
