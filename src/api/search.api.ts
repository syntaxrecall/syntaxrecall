export interface PageData {
  objectID: string;
  slug: string;
  title: string;
  description: string;
  keywords: string[];
}

export interface SearchResult {
  item: PageData;
  rank: number;
}

export async function GetSearch(searchText: string): Promise<PageData[]> {
  const response = await fetch('data.json', {
    method: 'GET',
  });

  try {
  if (response.ok) {
    const data = (await response.json()) as PageData[];
    return search(searchText, data);
  }
    return Promise.reject('Invalid search');
  } catch (err) {
    return Promise.reject(err);
  }
}

function search(searchText: string, data: PageData[]): PageData[] {
  const searchTextLower = searchText.toLowerCase();
  const searchTerms = searchTextLower.split(' ');
  let results: SearchResult[] = data.map((item) => {
    let rank = 0;

    for (const searchTerm of searchTerms) {
      for (const keyword of item.keywords) {
        if (keyword.toLowerCase().includes(searchTerm)) {
          rank++;
        }
      }
    }
    return { item: item, rank: rank };
  });

  results = results.filter((item) => item.rank > 0);
  results.sort((a, b) => {
    return b.rank - a.rank;
  });
  return results.map((item) => item.item);
}
