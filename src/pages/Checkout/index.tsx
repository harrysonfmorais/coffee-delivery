import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { Input } from './components/Input'
import { SelectedCoffees } from './components/SelectedCoffees'

import {
  AdressContainer,
  CheckoutContainer,
  CoffeeSelectContainer,
  CoffeeSelectContent,
  CompleteYourOrderContainer,
  DeliveryContent,
  IconAndTextContainer,
  InputsContainer,
  ItensContent,
  NeighborhoodCityAndUFContainer,
  NumberAndComplementContainer,
  PaymentContainer,
  TotalEndContent,
  TotalItensContainer,
  TransactionType,
  TransactionTypeButton,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteYourOrderContainer>
        <h2>Complete seu pedido</h2>
        <AdressContainer>
          <IconAndTextContainer>
            <MapPin size={22} color="#C47F17" />
            <span>Endereço de Entrega</span>
          </IconAndTextContainer>
          <p>Informe o endereço onde deseja receber seu pedido</p>

          <InputsContainer>
            <Input placeholder="CPF" variant="200" />
            <Input placeholder="Rua" variant="560" />

            <NumberAndComplementContainer>
              <Input placeholder="Número" variant="200" />

              <Input placeholder="Complemento" variant="348" />
            </NumberAndComplementContainer>

            <NeighborhoodCityAndUFContainer>
              <Input placeholder="Bairro" variant="200" />

              <Input placeholder="Cidade" variant="276" />

              <Input placeholder="UF" variant="60" />
            </NeighborhoodCityAndUFContainer>
          </InputsContainer>
        </AdressContainer>

        <PaymentContainer>
          <IconAndTextContainer>
            <CurrencyDollar size={22} color="#8047F8" />
            <span>Pagamento</span>
          </IconAndTextContainer>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>

          <TransactionType>
            <TransactionTypeButton>
              <CreditCard size={16} color="#8047F8" />
              Cartão de Crédito
            </TransactionTypeButton>
            <TransactionTypeButton>
              <Bank size={16} color="#8047F8" />
              Cartão de Débito
            </TransactionTypeButton>
            <TransactionTypeButton>
              <Money size={16} color="#8047F8" />
              Dinheiro
            </TransactionTypeButton>
          </TransactionType>
        </PaymentContainer>
      </CompleteYourOrderContainer>

      <CoffeeSelectContainer>
        <h3>Cafés selecionados</h3>
        <CoffeeSelectContent>
          <div>
            <SelectedCoffees />
          </div>

          <TotalItensContainer>
            <ItensContent>
              <span>Total de itens</span>
              <span>29,70</span>
            </ItensContent>
            <DeliveryContent>
              <span>Entrega</span>
              <span>3,50</span>
            </DeliveryContent>
            <TotalEndContent>
              <span>Total</span>
              <span>33,20</span>
            </TotalEndContent>
          </TotalItensContainer>

          <button>CONFIRMAR PEDIDO</button>
        </CoffeeSelectContent>
      </CoffeeSelectContainer>
    </CheckoutContainer>
  )
}
