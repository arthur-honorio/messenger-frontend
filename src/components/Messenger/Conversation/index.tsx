import React from "react"
import { MessageInput } from "./MessageInput"
import { MessagesHeader } from "./MessagesHeader"
import { MessagesList } from "./MessagesList"
import { MessageProps } from "./MessagesList/MessageItem"

import { Container } from "./style"

type ConversationProps = {
    messages: MessageProps[]
}

export const Conversation: React.FC<ConversationProps> = ({ messages }) => {
    const orderedMessages: MessageProps[] = messages.sort(
        (a: MessageProps, b: MessageProps) => {
            return a.created_at > b.created_at
                ? -1
                : a.created_at === b.created_at
                ? 0
                : 1
        }
    )
    console.log(orderedMessages)
    return (
        <Container className="conversation">
            <MessagesHeader />
            <hr />
            <MessagesList messages={orderedMessages} />
            <hr />
            <MessageInput />
        </Container>
    )
}
