import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLSelectElement> {
  onChange?: (...args: any[]) => any
  options: Array<{
    value: string
    text: string
  }>
}

const Select: React.FC<Props> = (props) => {
  const { className, onChange, options, ...rest } = props

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>): any => {
    if (onChange !== undefined) {
      onChange(event.target.value)
    }
    return null
  }

  return (
    <select className={className} onChange={handleOnChange} {...rest}>
      {options.map(({ value, text }, index) => (
        <option key={`${text}-${index}`} value={value}>
          {text}
        </option>
      ))}
    </select>
  )
}

export default Select
