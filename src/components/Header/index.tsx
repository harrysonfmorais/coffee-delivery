import { NavLink } from 'react-router-dom'

import {
  ButtonCarShoppContainer,
  HeaderContainer,
  HeaderContent,
  LocationContainer,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logo} alt="imagem de Coffee Delivery" />
        </NavLink>

        <HeaderContent>
          <LocationContainer>
            <MapPin size={20} weight="fill" />
            Fortaleza, CE
          </LocationContainer>

          <NavLink to="/checkout">
            <ButtonCarShoppContainer>
              <ShoppingCart size={20} weight="fill" />
            </ButtonCarShoppContainer>
          </NavLink>
        </HeaderContent>
      </div>
    </HeaderContainer>
  )
}
