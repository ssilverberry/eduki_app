import axios from 'axios';
import {SearchResponse} from '../types/search';
import Config from 'react-native-config';

const LIMIT = 20;
const WORLD = 'de';
const API_URL = 'https://api.eduki.com/api/v1/elastic';

export const searchRequest = async (
  page = 1,
  query = '',
): Promise<SearchResponse> => {
  const {data} = await axios.get(`${API_URL}`, {
    headers: {
      Authorization: `Bearer ${Config.BEARER_TOKEN}`,
    },
    params: {
      limit: LIMIT,
      q: query,
      p: page,
      world: WORLD,
    },
  });

  return data;
};
