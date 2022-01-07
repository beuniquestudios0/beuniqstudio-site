import axios from "axios";

export const sendMail = async (type: "Enquiry" | "Instructor") => {
    try{
    await axios({
        method: "POST",
        url: "https://api.mailjet.com/v3.1/send",
        auth: {
            username: process.env.NEXT_PUBLIC_MAIL_API_KEY as string,
            password: process.env.NEXT_PUBLIC_MAIL_SECRET_KEY as string
        },
        headers: {"Content-Type": "application/json"},
        data: {
            Messages: [{
                From: {
                    Email: "beuniquestudios0@gmail.com",
                    Name: "John Bosco"
                },
                To: [{
                    Email: "beuniquestudios0@gmail.com",
                    Name: "John Bosco"
                }]
            }],
            Subject: `New ${type} application received`,
            "TextPart": `Hi John, A new ${type} has been received, please check the database.`,
        }
    })
    }catch (error: any){
        return error;
    }
}