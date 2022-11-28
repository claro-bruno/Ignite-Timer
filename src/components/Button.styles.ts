import styled, { css } from 'styled-components'

export type buttonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'sucess'
  | 'neutral'

interface ButtonContainerProps {
  variant: buttonVariant
}

const buttonVariants = {
  primary: '#8257e6',
  secondary: 'orange',
  danger: 'red',
  sucess: 'green',
  neutral: 'yellow',
}
export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  border-radius: 4px;
  border: 0;
  margin: 8px;

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }} */
`

// .button {
//     width: 100px;
//     height: 40px;
// }

// .primary {
//     background: purple;
// }

// .secondary {
//     background: orange;
// }

// .danger {
//     background: red;
// }

// .sucess {
//     background: green;
// }
