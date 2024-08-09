import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { subject , text} = req.body;
    
        // Create a transporter object using SMTP transport
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER, // SMTP username
                pass: process.env.SMTP_PASS, // SMTP password
            },
        });

        try {
            // Send mail with defined transport object
            let info = await transporter.sendMail({
                from: `<${process.env.SMTP_USER}>`, // sender address
                to : `info@qmindia.net`, // list of receivers
                subject : subject     , // Subject line
                text : text, // plain text body
            });

            res.status(200).json({ message: 'Email sent', info });
        } catch (error) {
            res.status(500).json({ message: 'Error sending email', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

export default sendEmail;
