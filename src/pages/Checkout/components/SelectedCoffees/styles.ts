import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.5rem 0;

  > img {
    width: 4rem;
    height: 4rem;
  }

  border-bottom: 1px solid ${(props) => props.theme['base-hover']};
`
export const SelectedCoffeesContent = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  margin-top: 0.5rem;

  > button {
    border: none;
    height: 2rem;
    padding: 0.5rem;
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
    border-radius: 8px;

    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`
