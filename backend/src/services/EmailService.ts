interface IMailTo{
    name: String,
    email:String
}

interface iMailMessage{
    subject: string,
    body: string,
    attachment ?: string[];
}

interface IMessageDTO{
    to: IMailTo,
    message: iMailMessage
}

interface IEmailService{
    sendMail(req: IMessageDTO): void;
}

class EmailService implements IEmailService{
    sendMail({to, message}: IMessageDTO){
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }
}

export default EmailService;