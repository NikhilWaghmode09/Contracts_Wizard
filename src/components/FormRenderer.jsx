import TextInput from './TextInput'
import Checkbox from './Checkbox'

const FormRenderer = ({ schema }) => {
  return (
    <div className="grid md:grid-cols-2 gap-2 bg-slate-100 rounded-xl p-4">
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
    </div>
  )
}

export default FormRenderer
