import { Post } from '../interfaces/Post';
import { MeiliPostSearchResult } from './../interfaces/MeilisearchResult';

export async function GetSearch(searchText: string): Promise<MeiliPostSearchResult<Post>> {
  const params = new URLSearchParams();
  params.set('q', searchText);
  const response = await fetch(`http://localhost:3000/api/search?${params.toString()}`, {
    method: 'GET',
  });

  try {
  if (response.ok) {
    const data = (await response.json()) as MeiliPostSearchResult<Post>;
    return data;
  }
    return Promise.reject('Invalid search');
  } catch (err) {
    return Promise.reject(err);
  }
}
