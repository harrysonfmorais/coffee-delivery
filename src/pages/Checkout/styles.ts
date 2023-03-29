import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const CheckoutContainer = styled.div`
  width: 90rem;
  margin: 2.5rem auto 0;
  padding: 0 10rem;

  display: grid;
  grid-template-columns: 40rem 28rem;
  grid-gap: 2rem;
  grid-template-areas: 'adress coffee';
`

export const CompleteYourOrderContainer = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;

  grid-area: 'adress';

  > h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`

export const AdressContainer = styled.div`
  padding: 2.5rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  p {
    font-size: 0.8 rem;
    color: ${(props) => props.theme['base-text']};
    margin-left: 1.9rem;
  }
`

export const IconAndTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InputsContainer = styled.div`
  margin-top: 2rem;
`

export const NumberAndComplementContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.75rem;
`

export const NeighborhoodCityAndUFContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.75rem;
`

export const PaymentContainer = styled.div`
  padding: 2.5rem;
  margin-top: 0.75rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  p {
    font-size: 0.8 rem;
    color: ${(props) => props.theme['base-text']};
    margin-left: 1.5rem;
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-top: 2rem;
`
export const TransactionTypeButton = styled(RadioGroup.Item)`
  height: 3rem;
  padding: 1rem;
  width: 11rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 8px;

  text-transform: uppercase;
  font-size: 0.75rem;

  border: none;
`

export const CoffeeSelectContainer = styled.div`
  grid-area: 'coffee';

  width: 100%;
  max-width: 480px;
  margin: 0 auto;

  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1rem;
  }
`

export const CoffeeSelectContent = styled.div`
  border-radius: 8px 3rem;
  margin-top: 1.3rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > button {
    width: 100%;
    height: 3rem;
    border-radius: 8px;
    margin-top: 1.5rem;

    border: none;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
  }
`

export const TotalItensContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.85rem;

  margin-top: 1.5rem;
`

const BaseContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 0.85rem;
  color: ${(props) => props.theme['base-text']};
`

export const ItensContent = styled(BaseContent)``

export const DeliveryContent = styled(BaseContent)``

export const TotalEndContent = styled(BaseContent)`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
`
