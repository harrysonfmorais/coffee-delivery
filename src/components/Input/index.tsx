import { InputHTMLAttributes } from 'react'
import { InputStyleContainer } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...rest }: InputProps) {
  return <InputStyleContainer {...rest} />
}
