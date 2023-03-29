import styled from 'styled-components'

interface InputProps {
  variant?: string
}

// export const InputContainer = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;

//   margin-bottom: 1rem;

//   > input {
//     height: 2.5rem;
//     width: 100%;
//     padding: 0.75rem;
//     border-radius: 6px;

//     background: transparent;
//     border-color: ${(props) => props.theme['base-button']};
//     color: ${(props) => props.theme['base-text']};
//   }
// `
export const InputContainer = styled.input<InputProps>`
  height: 2.5rem;
  /* width: 100%; */
  ${(props) => `width: ${props.variant}px;`}
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;

  background: transparent;
  border-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
`
