import { NavLink } from 'react-router-dom'

import {
  ButtonCarShoppContainer,
  HeaderContainer,
  HeaderContent,
  LocationContainer,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.png'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()

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
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </ButtonCarShoppContainer>
          </NavLink>
        </HeaderContent>
      </div>
    </HeaderContainer>
  )
}
