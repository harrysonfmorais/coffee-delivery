import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 90rem;
  height: 6.5rem;
  padding: 0 10rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`

export const LocationContainer = styled.div`
  height: 2rem;
  padding: 0.625rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['purple-light']};

  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CarShoppContainer = styled.div`
  position: relative;

  height: 2rem;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['yellow-light']};
  > svg {
    color: ${(props) => props.theme['yellow-dark']};
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
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
  }
`
