import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { q } = req.query;

  if (!q) {
    res.status(StatusCodes.BAD_REQUEST).end();
    return;
  }

  // read the data.json file
  // const json = await import('../../../data/data.json');

  // res.json(json);

  // if (results.hits) {
  //   res.status(StatusCodes.OK).json(results.hits);
  //   return;
  // }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
}
