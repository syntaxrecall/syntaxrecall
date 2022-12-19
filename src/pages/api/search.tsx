import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import fetch from 'isomorphic-unfetch';
import { MeiliPostSearchResult } from "../../interfaces/MeilisearchResult";
import { Post } from "../../interfaces/Post";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { q } = req.query;

  if (!q) {
    res.status(StatusCodes.BAD_REQUEST).end();
    return;
  }

  const response = await fetch(`${process.env.MEILISEARCH_URL}/indexes/posts/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'q': q, 'attributesToRetrieve': ['id'] })
  });

  if (response.ok) {
    const data = await response.json() as MeiliPostSearchResult<Post>
    res.status(StatusCodes.OK).json(data);
    return;
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
}
