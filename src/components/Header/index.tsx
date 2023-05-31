import { NavLink } from 'react-router-dom'

import { CarShoppContainer, HeaderContainer, LocationContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.png'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

export function Header() {
  const { amountAllCoffee } = useContext(CoffeeContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="imagem de Coffee Delivery" />
      </NavLink>

      <div>
        <LocationContainer>
          <MapPin size={20} weight="fill" />
          <span>Fortaleza, CE</span>
        </LocationContainer>
        <CarShoppContainer>
          <span>{amountAllCoffee}</span>
          <NavLink to="/checkout">
            <ShoppingCart size={20} weight="fill" />
          </NavLink>
        </CarShoppContainer>
      </div>
    </HeaderContainer>
  )
}
