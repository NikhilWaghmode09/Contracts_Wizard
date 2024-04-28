import React from 'react'

const TextInput = ({ name, identifier }) => {
  return (
    <div>
      <label>
        {name}:
        <input type="text" name={identifier} />
      </label>
    </div>
  )
}

export default TextInput
