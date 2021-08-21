import React from "react"

interface InputProps {
  label: string
  value: string
  handleOnChange: (event: { target: { value: string } }) => void
}

const Input = ({ label, value, handleOnChange }: InputProps) => {
  return (
    <div>
      <label>
        {label}
        <br />
        <input value={value} onChange={handleOnChange} />
      </label>
    </div>
  )
}

export default Input
