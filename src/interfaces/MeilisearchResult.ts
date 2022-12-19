export interface MeiliPostSearchResult<T> {
  hits: T[];
  estimatedTotalHits: number;
  query: string;
  limit: string;
  offset: number;
  processingTimeMs: number;
}
