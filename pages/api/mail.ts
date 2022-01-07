import { NextApiRequest, NextApiResponse } from 'next';
import AWS from "aws-sdk";

// @ts-ignore
import mailcomposer from 'mailcomposer';
import {CloneReceiptRuleSetCommand, SendRawEmailCommand, SESClient} from '@aws-sdk/client-ses';


AWS.config.update({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: process.env.BEU_AWS_ACCESS_KEY as string,
        secretAccessKey: process.env.BEU_AWS_SECRET_ACCESS_KEY as string,
    },
});

const getParams = (type: "User" | "Instructor") => ( {
    Destination: {
        ToAddresses: [
            "beuniquestudios0@gmail.com"
        ]
    },
    Message: {
        Body: {
            Text: {
                Charset: "UTF-8",
                Data: `Hey John new registration recieved check ${type} DB, , access the list here https://beuniqestudios.com/admin/${type.toLocaleLowerCase()}`
            }
        },
        Subject: {
            Charset: 'UTF-8',
            Data: `New registration for ${type} received`
        }
    },
    Source: `prideproject01@gmail.com`,
})


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).send({
            error: 'Method Not Allowed',
        });
    }

    try {

        const params = getParams(req.body.type);

        const data = await new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

        return res.status(200).send({
            message: "Mail delivered!",
            data
        })

    } catch (error) {
        console.error(`❌ Failed to send email: `, error);

        return res.status(400).send({
            error: 'Could not send the email',
        });
    }

}