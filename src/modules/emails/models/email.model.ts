export class EmailModel {
    from: string;
    to: string;
    subject: string;
    text: string;
    html: string;

    constructor(
        from: string,
        to: string,
        subject: string,
        text: string,
        html: string
    ) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.text = text;
        this.html = html;
    }

    public static of(from: string,
        to: string,
        subject: string,
        text: string,
        html: string
    ): EmailModel {
        return new EmailModel(from, to, subject, text, html)
    }

}
