import React from 'react'

const Checkbox = ({ name, label }) => {
  return (
    <label className="w-full cursor-pointer inline-block">
      <input className="mr-2" type="checkbox" name={name} />
      {label}
    </label>
  )
}

export default Checkbox
