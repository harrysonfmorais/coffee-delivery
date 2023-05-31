import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import {
  AmountContainer,
  ButtonContainer,
  CoffeeContainer,
  CountContainer,
  PriceContainer,
  TagContainer,
} from './styles'

import { NavLink } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../../../context/CoffeeContext'

interface CoffeesForSaleProps {
  coffeeImg: string
  tag: string
  name: string
  description: string
  price: number
}

export function CoffeesForSale({
  coffeeImg,
  description,
  name,
  tag,
  price,
}: CoffeesForSaleProps) {
  const { updateCoffeeAmount } = useContext(CoffeeContext)

  const [coffeeAmount, setCoffeeAmount] = useState(0)

  function handleCoffeePlus() {
    setCoffeeAmount((state) => {
      return state + 1
    })
  }

  function handleCoffeeMinus() {
    if (coffeeAmount === 0) {
      return alert('você não possui café nenhum café adicionado!')
    } else {
      setCoffeeAmount((state) => {
        return state - 1
      })
    }
  }

  useEffect(() => {
    updateCoffeeAmount(name, coffeeAmount)
  }, [name, coffeeAmount, updateCoffeeAmount])

  return (
    <CoffeeContainer>
      <img src={coffeeImg} alt="" />
      <TagContainer>{tag}</TagContainer>
      <h3>{name}</h3>
      <p>{description}</p>
      <PriceContainer>
        <strong>{price}</strong>
        <CountContainer>
          <ButtonContainer onClick={handleCoffeeMinus}>
            <Minus size={14} color="#8047F8" weight="bold" />
          </ButtonContainer>
          <AmountContainer>{coffeeAmount}</AmountContainer>
          <ButtonContainer onClick={handleCoffeePlus}>
            <Plus size={14} color="#8047F8" weight="bold" />
          </ButtonContainer>
        </CountContainer>
        <NavLink type="submit" to="/checkout">
          <ShoppingCartSimple size={22} color="#F3F2F2" />
        </NavLink>
      </PriceContainer>
    </CoffeeContainer>
  )
}
