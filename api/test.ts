import type { NowRequest, NowResponse } from '@vercel/node'

export default function(req: NowRequest, res: NowResponse) {
    res.status(200).send('nice.')
}
