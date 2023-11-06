import React, {
  useRef,
  useState,
  ReactNode,
  createContext,
  useEffect,
} from 'react';

import {Material} from '../types/search';
import {searchRequest} from '../api/search';

const DEFAULT_PAGE = 1;
const DEFAULT_QUERY = '';
const DEFAULT_TOTAL_COUNT = 0;
const DEFAULT_RESULTS: Material[] = [];

interface SearchContextProviderProps {
  children: ReactNode | undefined;
}

export const SearchContextProvider = ({
  children,
}: SearchContextProviderProps) => {
  const pageRef = useRef<number>(DEFAULT_PAGE);
  const queryRef = useRef<string>(DEFAULT_QUERY);
  const totalCountRef = useRef<number>(DEFAULT_TOTAL_COUNT);

  const [results, setResults] = useState<Material[]>(DEFAULT_RESULTS);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  useEffect(() => {
    search();
  }, []);

  const search = async (text = '') => {
    try {
      const {data} = await searchRequest(DEFAULT_PAGE, text);
      setResults(data?.items?.materials || []);

      queryRef.current = text;
      totalCountRef.current = data.total;
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = async () => {
    const hasMore = !!(totalCountRef.current - results.length);
    const shouldCancelLoadingMore = isLoading || isLoadingMore || !hasMore;

    if (shouldCancelLoadingMore) {
      return;
    }

    try {
      setIsLoadingMore(true);

      const {data} = await searchRequest(pageRef.current + 1, queryRef.current);
      const materials = data?.items?.materials || [];
      setResults(prev => [...new Set([...prev, ...materials])]);

      pageRef.current += 1;
    } catch (err) {
    } finally {
      setIsLoadingMore(false);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        data: results,
        isLoading,
        isLoadingMore,
        search,
        loadMore,
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export const SearchContext = createContext({
  data: [] as Material[] | undefined,
  isLoading: false,
  isLoadingMore: false,
  loadMore: async () => {},
  search: async (_text = '') => {},
});
