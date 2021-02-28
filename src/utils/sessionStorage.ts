const saveCoinListToSessionStorage = (data: any) => {
  sessionStorage.setItem('coin_list', data);
};

const getCoinListFromSessionStorage = () => {
  sessionStorage.getItem('coin_list');
};
