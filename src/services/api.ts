import axios from 'axios';

export interface ApiData {
  id: string;
  name: string;
  platforms: { [key: string]: string };
  symbol: string;
}

export const getCoinsList: Promise<ApiData[]> = axios
  .get('https://api.coingecko.com/api/v3/coins/list?include_platform=true')
  .then((res) => {
    const data = res.data;
    return data;
  });
