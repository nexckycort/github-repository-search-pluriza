import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  onInput?: (...args: any[]) => any
}

const Input: React.FC<Props> = (props) => {
  const { className, children, onInput, ...rest } = props

  const handleOnInput = (event: React.ChangeEvent<HTMLInputElement>): any => {
    if (onInput !== undefined) {
      onInput(event.target.value)
    }
    return null
  }

  return <input className={className} onInput={handleOnInput} autoCorrect="off" autoCapitalize="off" spellCheck="false" {...rest} />
}

export default Input
