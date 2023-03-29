import { ShoppingCartSimple } from 'phosphor-react'
import { CoffeeContainer, PriceContainer, TagContainer } from './styles'

import { Count } from '../../../../components/Count'
import coffee from '../../assets/express-tradicional.png'

interface CoffeesForSaleProps {
  // coffeeImg:
  tag: string
  name: string
  description: string
  price: number
}

export function CoffeesForSale({
  // coffeeImg,
  description,
  name,
  tag,
  price,
}: CoffeesForSaleProps) {
  return (
    <CoffeeContainer>
      <img src={coffee} alt="" />
      <TagContainer>{tag}</TagContainer>
      <h3>{name}</h3>
      <p>{description}</p>
      <PriceContainer>
        <strong>{price}</strong>
        <Count />
        <button type="submit">
          <ShoppingCartSimple size={22} color="#F3F2F2" />
        </button>
      </PriceContainer>
    </CoffeeContainer>
  )
}
