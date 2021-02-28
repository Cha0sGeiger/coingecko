import { ApiData } from '../services/api';

export const saveCoinListToSessionOrLocalStorage = (data: ApiData[]) => {
  try {
    const parsedData = JSON.stringify(data);
    localStorage.setItem('coin_list', parsedData);
    sessionStorage.setItem('coin_list', parsedData);
  } catch (error) {
    return undefined;
  }
};

export const getCoinFromLocalStorage = () => {
  const local: string | null = localStorage.getItem('coin_list');
  if (local) {
    return JSON.parse(local);
  }
};

export const getCoinListFromSessionStorage = () => {
  const session: string | null = sessionStorage.getItem('coin_list');
  if (session) {
    return JSON.parse(session);
  }
};

export const getCoinListFromSessionOrStorage = () => {
  return getCoinListFromSessionStorage() ?? getCoinFromLocalStorage();
};
