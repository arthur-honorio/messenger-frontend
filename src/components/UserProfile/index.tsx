import React, { useState } from "react"
import { getAuth, signOut } from "firebase/auth"
import { useSnackbarStore } from "../../states/snackbar"
import { Tooltip } from "@mui/material"
import { AddContactModal } from "./AddContactModal"

import { IoPersonAdd, IoPencilSharp, IoLogOut } from "react-icons/io5"
import { useLoggedUserStore } from "../../states/loggedUser"
import { updateDocument } from "../../firebase/firestoreFunctions"
import { UserForm } from "../UserForm"
import { UserDetails } from "../UserDetails"

import {
    Container,
    UserProfileButton,
    UserProfileButtonsContainer,
} from "./style"
import { contactPropsTypes, UserProfileContainerProps } from "../../types/types"

export const UserProfile: React.FC<UserProfileContainerProps> = ({
    isFromProfile,
}) => {
    const { loggedUser, setLoggedUser } = useLoggedUserStore(state => state)
    const [editUser, setEditUser] = useState(false)
    const [addContact, setAddContact] = useState(false)

    const handleSignOut = async () => {
        signOut(getAuth()).then(() => {
            setLoggedUser(null)
            loggedUser &&
                updateDocument("users", { status: " offline" }, loggedUser.uid)
            useSnackbarStore.setState({
                open: true,
                message: "Usuário deslogado com sucesso",
                type: "info",
            })
        })
    }

    return (
        <Container className="user-profile" isFromProfile={isFromProfile}>
            {loggedUser && (
                <UserDetails
                    className="user-details"
                    imgSize="L"
                    user={loggedUser as contactPropsTypes}
                    isFromProfile
                />
            )}
            {isFromProfile ? (
                <>
                    <AddContactModal
                        show={addContact}
                        setShow={setAddContact}
                    />
                    <UserProfileButtonsContainer className="user-buttons">
                        <Tooltip title="Adicionar contato">
                            <UserProfileButton
                                className="add-contacts"
                                onClick={() => {
                                    setAddContact(true)
                                }}
                            >
                                <IoPersonAdd />
                            </UserProfileButton>
                        </Tooltip>
                        <UserForm show={editUser} setShow={setEditUser} />
                        <Tooltip title="Editar usuário">
                            <UserProfileButton
                                className="user-edit"
                                onClick={() => {
                                    setEditUser(true)
                                }}
                            >
                                <IoPencilSharp />
                            </UserProfileButton>
                        </Tooltip>
                        <Tooltip title="Sair">
                            <UserProfileButton
                                className="user-signout"
                                onClick={handleSignOut}
                            >
                                <IoLogOut />
                            </UserProfileButton>
                        </Tooltip>
                    </UserProfileButtonsContainer>
                </>
            ) : (
                <></>
            )}
        </Container>
    )
}
