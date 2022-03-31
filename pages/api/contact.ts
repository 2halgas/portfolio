// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';

require('dotenv').config()
const PASSWORD = process.env.PASSWORD;
const MAIL = process.env.MAIL;
const MY_MAIL = process.env.MY_MAIL

type Data = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  error?: string;
}

async function SendMail(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: MAIL,
      pass: PASSWORD,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
});

  const body = req.body;

  if (!body.name || !body.email || !body.message) {
    return res.status(400).json({ error: 'name, email or message not found' })
  };

  const mailData = {
    from: MAIL,
    to: MY_MAIL,
    subject: `Message From ${body.name}`,
    text: body.message + " | Sent from: " + body.email,
    html: `<div>${body.message}</div><p>Sent from:
    ${body.email}</p>`
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            console.error(err);
            reject(err);
        } else {
            console.log(info);
            resolve(info);
        }
    });
  });

  res.status(200).json(body)
}

export default SendMail;