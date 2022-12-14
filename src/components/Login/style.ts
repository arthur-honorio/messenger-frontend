import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 500px;
    height: 400px;
    background: orchid;
    border-radius: 10px;
    margin: calc((100vh - 400px) / 2) auto;

    &.online-user-search {
        justify-content: space-around;
        h2 {
            color: orchid;
        }
        background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            darkorchid
        );
    }

    h1 {
        color: white;
        text-align: center;
    }

    &>.spinner {
        width: 80px;
        height: 80px;
        border-radius: 80px;
        border: 15px dotted orchid;
    }

    .signUp > form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 70%;

        input {
            height: 40px;
            padding: 10px 20px;
            border-radius: 10px;
            border: none;
        }
    }
`
