import { Trash } from 'phosphor-react'
import { Count } from '../../../../components/Count'
import {
  ButtonsContainer,
  SelectedCoffeesContainer,
  SelectedCoffeesContent,
} from './styles'

import coffee from '../../../../assets/express-americano.png'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <img src={coffee} alt="" />
      <SelectedCoffeesContent>
        <span>Expresso Tradicional</span>
        <ButtonsContainer>
          <Count />
          <button>
            <Trash size={16} color="#8047F8" />
            Remover
          </button>
        </ButtonsContainer>
      </SelectedCoffeesContent>
      <strong>9,90</strong>
    </SelectedCoffeesContainer>
  )
}
