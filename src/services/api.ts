import axios from "axios";

export const getCoinsList = axios
  .get("https://api.coingecko.com/api/v3/coins/list?include_platform=true")
  .then((res) => {
    const data = res.data;
    return data;
  });
