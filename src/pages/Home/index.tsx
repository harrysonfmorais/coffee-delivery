import {
  BenefitsContainer,
  HomeContainer,
  CoffeeListContainer,
  TextContainer,
  CarShopContainer,
  TimerContainer,
  PackageContainer,
  CoffeeContainer,
  CoffeeListContent,
} from './styles'

import coffee from '../../assets/coffee.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeesForSale } from './components/CoffeesForSale'
import { useContext } from 'react'
import { CoffeeContext } from '../../context/CoffeeContext'

export function Home() {
  const { coffeeShop } = useContext(CoffeeContext)

  return (
    <>
      <HomeContainer>
        <TextContainer>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <BenefitsContainer>
            <CarShopContainer>
              <div>
                <ShoppingCart size={16} color="white" weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </CarShopContainer>

            <PackageContainer>
              <div>
                <Package size={16} color="white" weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </PackageContainer>

            <TimerContainer>
              <div>
                <Timer size={16} color="white" weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </TimerContainer>

            <CoffeeContainer>
              <div>
                <Coffee size={16} color="white" weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </CoffeeContainer>
          </BenefitsContainer>
        </TextContainer>
        <img src={coffee} alt="" />
      </HomeContainer>

      <CoffeeListContainer>
        <h2>Nossos cafés</h2>

        <CoffeeListContent>
          {coffeeShop.map((coffee) => {
            return (
              <CoffeesForSale
                key={coffee.name}
                coffeeImg={coffee.img}
                description={coffee.description}
                name={coffee.name}
                price={coffee.price}
                tag={coffee.tag}
              />
            )
          })}
        </CoffeeListContent>
      </CoffeeListContainer>
    </>
  )
}
