import { NextApiRequest, NextApiResponse } from 'next';

export type Middleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: (result?: unknown) => void
) => Promise<void> | void;

export async function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  ...middlewares: Middleware[]
) {
  for (const middleware of middlewares) {
    await new Promise((resolve, reject) => {
      middleware(req, res, (result?: unknown) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
  }
}
