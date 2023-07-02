import { Post } from '../interfaces/Post';

export async function GetSearch(searchText: string): Promise<Post[]> {
  const params = new URLSearchParams();
  params.set('q', searchText);
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/search?${params.toString()}`, {
    method: 'GET',
  });

  try {
  if (response.ok) {
    const data = (await response.json()) as Post[];
    return data;
  }
    return Promise.reject('Invalid search');
  } catch (err) {
    return Promise.reject(err);
  }
}
