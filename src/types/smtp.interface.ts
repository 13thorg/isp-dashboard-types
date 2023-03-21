export type SmtpConfigType = {
    user: string,
    pass: string,
    service: string
}

export type SmtpPayloadType = {
    to: string,
    title: string,
    subject: string
    body: string
}