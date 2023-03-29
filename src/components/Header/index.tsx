import { CarShoppContainer, HeaderContainer, LocationContainer } from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

export function Header() {
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
          <span>3</span>
          <ShoppingCart size={20} weight="fill" />
        </CarShoppContainer>
      </div>
    </HeaderContainer>
  )
}
