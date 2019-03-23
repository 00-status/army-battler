// @flow

export type Message = {
    key: number,
    title: string,
    text: string
}

export type State = {
    messages: Array<Message>
}