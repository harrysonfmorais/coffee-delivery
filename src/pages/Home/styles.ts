import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 90rem;
  margin: 6rem auto;
  padding: 0 10rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.6;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.4;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem 0.5rem;
  margin-top: 3.85rem;
`

const BaseBenfits = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }

  > span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`

export const CarShopContainer = styled(BaseBenfits)`
  > div {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
export const TimerContainer = styled(BaseBenfits)`
  > div {
    background: ${(props) => props.theme.yellow};
  }
`
export const PackageContainer = styled(BaseBenfits)`
  > div {
    background: ${(props) => props.theme['base-text']};
  }
`
export const CoffeeContainer = styled(BaseBenfits)`
  > div {
    background: ${(props) => props.theme.purple};
  }
`

export const CoffeeListContainer = styled.div`
  width: 90rem;
  margin: 6rem auto;
  padding: 0 10rem;
`
export const CoffeeListContent = styled.div`
  margin-top: 3.5rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2.5rem 2rem;
`
