import styled from 'styled-components'

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
