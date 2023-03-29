import {
  CardContainer,
  AdressContent,
  IconMapContainer,
  SuccessContainer,
  SuccessContent,
  TextContainer,
  TimerContent,
  PaymentContainer,
  IconTimerContainer,
  IconDolarContainer,
} from './styles'

import delivery from '../../assets/delivery.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
    <SuccessContainer>
      <h3>Uhu!Pedido confirmado</h3>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <SuccessContent>
        <CardContainer>
          <AdressContent>
            <IconMapContainer>
              <MapPin size={16} weight="fill" color="white" />
            </IconMapContainer>
            <TextContainer>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </TextContainer>
          </AdressContent>

          <TimerContent>
            <IconTimerContainer>
              <Timer size={16} weight="fill" color="white" />
            </IconTimerContainer>
            <TextContainer>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </TextContainer>
          </TimerContent>

          <PaymentContainer>
            <IconDolarContainer>
              <CurrencyDollar size={16} weight="fill" color="white" />
            </IconDolarContainer>
            <TextContainer>
              <span>Pagamento na entrega</span>
              <span>
                <strong>Cartão de Crédito</strong>
              </span>
            </TextContainer>
          </PaymentContainer>
        </CardContainer>
        <img src={delivery} alt="" />
      </SuccessContent>
    </SuccessContainer>
  )
}
