import type { NowRequest, NowResponse } from '@vercel/node'

export const test = async function(req: NowRequest, res: NowResponse) {
  res.status(200).send('nice.')
}
