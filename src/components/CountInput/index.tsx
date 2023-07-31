import { Minus, Plus } from 'phosphor-react'
import { CountInputContainer, IconWrapper } from './styles'

interface CountInputProps {
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
  size?: 'medium' | 'small'
}

export function CountInput({
  onIncrease,
  onDecrease,
  quantity,
  size = 'medium',
}: CountInputProps) {
  return (
    <CountInputContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </CountInputContainer>
  )
}
