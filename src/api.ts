const BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoins = async () => {
  return await fetch(`${BASE_URL}/coins`).then((response) => response.json());
};

export const fetchCoinInfo = async (coinId: string) => {
  return await fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
};

export const fetchCoinTickers = async (coinId: string) => {
  return await fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
};

export const fetchCoinHistory = async (coinId: string) => {
  return await fetch(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  ).then((response) => response.json());
};
