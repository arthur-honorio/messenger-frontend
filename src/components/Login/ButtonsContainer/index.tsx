import React from "react"
import { signIn } from "../../../firebase"
import { useSnackbarStore } from "../../../states/snackbar"

import { Container } from "./style"

type ButtonsContainerProps = {
    setShowSignUp: (arg0: boolean) => void
}

export const ButtonsContainer: React.FC<ButtonsContainerProps> = ({
    setShowSignUp,
}) => {
    const handleLogInClick = async (event: React.MouseEvent) => {
        event.preventDefault()
        let htmlElements: HTMLCollectionOf<HTMLInputElement> =
            document.getElementsByTagName("input")
        let email = htmlElements[0]?.value
        let password = htmlElements[1]?.value

        if (email && password) {
            const user = await signIn(email, password)
            if (typeof user === "object") {
                useSnackbarStore.setState({
                    open: true,
                    message: `Usuário logado: ${user.user.email}`,
                    type: "success",
                })
            } else if (user === "user-not-found") {
                useSnackbarStore.setState({
                    open: true,
                    message: "Usuário não existe",
                    type: "warning",
                })
            }
        }
    }

    const handleSignUpClick = (event: React.MouseEvent) => {
        event.preventDefault()
        setShowSignUp(true)
    }

    return (
        <Container>
            <button onClick={handleLogInClick}>Entrar</button>
            <button onClick={handleSignUpClick}>Criar conta</button>
        </Container>
    )
}
