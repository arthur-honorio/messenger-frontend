import styled from "styled-components"

type ContainerProps = {
    isUserLoggedIn: boolean
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
`

export const MessageAndIconContainer = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: ${props => (props.isUserLoggedIn ? "flex-end" : "")};
    gap: 10px;

    width: 100%;
`

export const MessageContainer = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    min-height: 50px;
    width: fit-content;
    min-width: 100px;
    max-width: 50%;
    padding: 25px;

    color: ${props => (props.isUserLoggedIn ? "white" : "black")};
    background-color: ${props =>
        props.isUserLoggedIn ? "orange" : "greenyellow"};
    border-radius: ${props =>
        props.isUserLoggedIn ? "40px 40px 0 40px" : "0 40px 40px 40px"};

    .message-sent-time {
        font-size: small;
        margin-top: auto;
    }
`