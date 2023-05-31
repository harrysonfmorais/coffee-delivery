import { Trash } from 'phosphor-react'
import { Count } from '../../../../components/Count'
import {
  ButtonsContainer,
  SelectedCoffeesContainer,
  SelectedCoffeesContent,
} from './styles'
import { useContext, useEffect } from 'react'
import { CoffeeContext } from '../../../../context/CoffeeContext'

interface SelectedCoffeesProps {
  name: string
  img: string
  price: number
}

export function SelectedCoffees({ img, name, price }: SelectedCoffeesProps) {
  const { updateCoffeeAmount, coffeeAmount } = useContext(CoffeeContext)

  useEffect(() => {
    updateCoffeeAmount(name, coffeeAmount)
  }, [name, coffeeAmount, updateCoffeeAmount])
  return (
    <SelectedCoffeesContainer>
      <img src={img} alt="" />
      <SelectedCoffeesContent>
        <span>{name}</span>
        <ButtonsContainer>
          <Count />
          <button>
            <Trash size={16} color="#8047F8" />
            Remover
          </button>
        </ButtonsContainer>
      </SelectedCoffeesContent>
      <strong>{price}</strong>
    </SelectedCoffeesContainer>
  )
}
