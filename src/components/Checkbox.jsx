import React from 'react'

const Checkbox = ({ identifier, label }) => {
  return (
    <label className="w-full cursor-pointer inline-block">
      <input className="mr-2" type="checkbox" name={identifier} />
      {label}
    </label>
  )
}

export default Checkbox
