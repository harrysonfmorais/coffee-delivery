import styled from 'styled-components'

export const SuccessContainer = styled.div`
  width: 90rem;
  margin: 6rem auto;
  padding: 0 10rem;

  h3 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.6;
  }
`

export const SuccessContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2.5rem;
`

export const CardContainer = styled.div`
  width: 33rem;
  padding: 2.5rem;
  border-radius: 8px 2rem;
  border: 1px solid ${(props) => props.theme.purple};

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const AdressContent = styled(Content)``

const IconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IconMapContainer = styled(IconContainer)`
  background: ${(props) => props.theme.purple};
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 1rem;
    line-height: 1.4;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const TimerContent = styled(Content)``

export const IconTimerContainer = styled(IconContainer)`
  background: ${(props) => props.theme.yellow};
`

export const PaymentContainer = styled(Content)``

export const IconDolarContainer = styled(IconContainer)`
  background: ${(props) => props.theme['yellow-dark']};
`
