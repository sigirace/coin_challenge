import styled from "styled-components";
import Card from "../components/Card";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { ICoin } from "../interface";

const CoinsList = styled.ul``;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

export default function Coins() {
  const { isLoading: coinLoading, data: coins } = useQuery<ICoin[]>(
    "allCoins",
    fetchCoins
  );
  return (
    <>
      {coinLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {coins?.slice(0, 10).map((coin) => (
            <Card key={coin.id} {...coin} />
          ))}
        </CoinsList>
      )}
    </>
  );
}
