import styled from 'styled-components'

export const CoffeeContainer = styled.section`
  width: 16rem;
  height: 19.3rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 8px 2.5rem;

  img {
    margin-top: -1.25rem;
    background: transparent;
    border-radius: 50%;
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;

    margin-top: 1rem;
  }

  p {
    font-size: 0.9rem;
    text-align: center;
    color: ${(props) => props.theme['base-label']};

    margin-top: 0.5rem;
  }
`

export const TagContainer = styled.span`
  font-size: 0.625rem;
  font-weight: bold;
  line-height: 1.3;
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};

  padding: 0.25rem;
  margin-top: 1rem;
  border-radius: 1rem;
`

export const PriceContainer = styled.div`
  width: 12rem;
  height: 2rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
  }

  > a {
    border: none;
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
    background: ${(props) => props.theme['purple-dark']};
  }
`

/* Count */

export const CountContainer = styled.div`
  width: 4.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;

  background: ${(props) => props.theme['base-hover']};
`

export const ButtonContainer = styled.button`
  border: none;

  background: ${(props) => props.theme['base-hover']};
`

export const AmountContainer = styled.span`
  padding: 0 0.5rem;
`
