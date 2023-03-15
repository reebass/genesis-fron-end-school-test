import { Btn } from "./Button.styled"

export const Button = ({onLoad, children}) => {
    return(
    <Btn onClick={() => onLoad()}>{children}</Btn>
    )
}