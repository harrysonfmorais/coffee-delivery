import { InputContainer } from './styles'

interface InputProps {
  placeholder: string
  variant: string
}

export function Input({ placeholder, variant }: InputProps) {
  return <InputContainer placeholder={placeholder} variant={variant} />
}
