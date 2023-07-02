import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import agoliasearch from 'algoliasearch';

const algoliaClient = agoliasearch(process.env.ALGOLIA_APP_ID || '', process.env.ALGOLIA_API_KEY || '');
const index = algoliaClient.initIndex('cheatsheet_index');

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { q } = req.query;

  if (!q) {
    res.status(StatusCodes.BAD_REQUEST).end();
    return;
  }

  const results = await index.search(q.toString(), {
    attributesToRetrieve: ['id', 'title', 'description', 'slug']
  });

  if (results.hits) {
    res.status(StatusCodes.OK).json(results.hits);
    return;
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
}
