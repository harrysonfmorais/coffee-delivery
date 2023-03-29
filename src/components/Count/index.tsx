import { Minus, Plus } from 'phosphor-react'
import { AmountContainer, ButtonContainer, CountContainer } from './styles'

export function Count() {
  return (
    <CountContainer>
      <ButtonContainer>
        <Minus size={14} color="#8047F8" weight="bold" />
      </ButtonContainer>
      <AmountContainer>1</AmountContainer>
      <ButtonContainer>
        <Plus size={14} color="#8047F8" weight="bold" />
      </ButtonContainer>
    </CountContainer>
  )
}
