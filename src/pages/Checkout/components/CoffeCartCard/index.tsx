import { Trash } from 'phosphor-react'
import { CountInput } from '../../../../components/CountInput'
import { RegularText } from '../../../../components/Typhography'
import {
  ActionsContainer,
  CoffeCartCardContainer,
  RemoveButton,
} from './styles'

export function CoffeCartCard() {
  return (
    <CoffeCartCardContainer>
      <div>
        <img src="/public/assets/americano.png" alt="" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <CountInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>RS 9,90</p>
    </CoffeCartCardContainer>
  )
}
