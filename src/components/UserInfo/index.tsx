import React from "react"

import { Container } from "./style"

type UserInfoProps = {
    user: { name: string; position: string }
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
    return (
        <Container>
            <h5>{user.name}</h5>
            <h6>{user.position}</h6>
        </Container>
    )
}
