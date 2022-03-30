// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  error?: string;
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body

  console.log('body: ', body)

  if (!body.name || !body.email || !body.message) {
    return res.status(400).json({ error: 'name, email or message not found' })
  }

  res.status(200).json(body)
}

export default handler