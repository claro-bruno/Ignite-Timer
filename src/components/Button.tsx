// import styles from './Button.module.css'
import { ButtonContainer, buttonVariant } from './Button.styles'

interface ButtonProps {
  variant?: buttonVariant
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
  // return <button className={`${styles.button} ${styles[color]}`} >Enviar</button>
}
