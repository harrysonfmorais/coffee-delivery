import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  background: ${(props) => props.theme.colors['base-background']};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationContainer = styled.div`
  min-width: 2.3rem;
  height: 2.3rem;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  > svg {
    color: ${(props) => props.theme.colors.purple};
  }
`

export const ButtonCarShoppContainer = styled.button`
  position: relative;

  height: 2.3rem;
  padding: 0.5rem;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.theme.colors['yellow-light']};
  > svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  span {
    position: absolute;
    top: -0.75rem;
    right: -0.75rem;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 1.25rem;
    width: 1.25rem;
    padding: 0.75rem;
    border-radius: 50%;
    font-weight: 700;
    background: ${(props) => props.theme.colors['yellow-dark']};
    color: ${(props) => props.theme.colors.white};
  }
`
