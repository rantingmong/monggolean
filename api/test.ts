import type { NowRequest, NowResponse } from '@vercel/node'

module.exports = function(req: NowRequest, res: NowResponse) {
  res.status(200).send('nice.')
}
