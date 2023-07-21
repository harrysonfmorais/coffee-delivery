import { Minus, Plus } from 'phosphor-react'
import { CountInputContainer, IconWrapper } from './styles'

interface CountInputProps {
  size?: 'medium' | 'small'
}

export function CountInput({ size = 'medium' }: CountInputProps) {
  return (
    <CountInputContainer size={size}>
      <IconWrapper>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </CountInputContainer>
  )
}
