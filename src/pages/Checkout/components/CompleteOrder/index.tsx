import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { TitleText } from '../../../../components/Typhography'
import { CompleteOrderContainer, FormSectionContainer } from './styles'
import { useTheme } from 'styled-components'
import { SectionTitle } from '../SectionTitle'
import { AdressForm } from '../AdressForm'
import { PaymentMethodOptions } from '../PaymentMethodOptions'

export function CompleteOrder() {
  const { colors } = useTheme()

  return (
    <CompleteOrderContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color={colors['yellow-dark']} />}
        />

        <AdressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={colors.purple} />}
        />

        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderContainer>
  )
}
