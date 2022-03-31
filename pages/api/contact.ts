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
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: MAIL,
      pass: PASSWORD,
    },
    secure: true,
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
  console.log(transporter)

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  });
  res.status(200).json(body)
}

export default SendMail;