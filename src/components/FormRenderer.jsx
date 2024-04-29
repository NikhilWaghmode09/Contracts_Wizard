import TextInput from './TextInput'
import Checkbox from './Checkbox'

import { AppContext } from '../App'
import { useContext } from 'react'

const FormRenderer = ({ schema }) => {
  const { userPreferences, setUserPreferences } = useContext(AppContext)

  const handleFormChange = (event) => {
    const { name, value, checked } = event.target
    if (event.target.type === 'checkbox') {
      setUserPreferences((prev) => ({ ...prev, [name]: checked }))
    } else {
      setUserPreferences((prev) => ({ ...prev, [name]: value }))
    }
  }

  return (
    <div className="bg-slate-100 rounded-xl p-4">
      <form
        className="grid md:grid-cols-2 items-center gap-2"
        onChange={handleFormChange}
      >
        {schema.map((field, index) => {
          return (
            <div key={index}>
              {field.type === 'text' && (
                <TextInput label={field.label} identifier={field.name} />
              )}
              {field.type === 'checkbox' && (
                <Checkbox label={field.label} identifier={field.name} />
              )}
            </div>
          )
        })}
      </form>
    </div>
  )
}

export default FormRenderer
