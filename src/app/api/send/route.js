import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req,res) {
    try {
        const fromEmail = process.env.FROM_EMAIL;
        const myEmail = process.env.MY_EMAIL;
        const {email,subject,message} = await req.json();
        const resData = await resend.emails.send({
            from: fromEmail,
            to: [email,myEmail],
            subject: subject,
            react: (
                <>
                    <h4>Thank you for contacting me.</h4>
                    <h5>I will try to get back to you soon</h5>
                    <h5>Received mail from {email}</h5>
                    <p>Here&apos;s what was received:</p>
                    <p>{message}</p>
                </>
            )
        });
        return Response.json({status:200,success:true,resData});
    } catch (error) {
        return Response.json({ error });
    }
}
