import {
  AboutContainer,
  AboutContent,
  AboutTitle,
  BenefitsContainer,
} from './styles'

import coffee from '../../../../assets/coffee.png'
import { RegularText } from '../../../../components/Typhography'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function About() {
  const { colors } = useTheme()

  return (
    <AboutContainer>
      <AboutContent className="container">
        <div>
          <section>
            <AboutTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </AboutTitle>

            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
              iconColor={colors['yellow-dark']}
            />

            <InfoWithIcon
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
              iconColor={colors['base-text']}
            />

            <InfoWithIcon
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
              iconColor={colors.yellow}
            />

            <InfoWithIcon
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
              iconColor={colors.purple}
            />
          </BenefitsContainer>
        </div>

        <img src={coffee} alt="" />
      </AboutContent>
    </AboutContainer>
  )
}
