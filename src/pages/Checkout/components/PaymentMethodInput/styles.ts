import styled from 'styled-components'

export const PaymentMethodInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  border: 6px;
  height: 3rem;
  padding: 0 1rem;
  font-size: 0.74rem;
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  transition: 0.4s;
  user-select: none;
  cursor: pointer;

  background: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
`
