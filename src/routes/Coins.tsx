import styled from "styled-components";
import Card from "../components/Card";
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { ICoin } from "../interface";
import { useSetRecoilState } from "recoil";
import { headerTitleAtom } from "../atom";
import { useEffect } from "react";

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

  const setHeaderTitle = useSetRecoilState(headerTitleAtom);
  useEffect(() => {
    setHeaderTitle("Coin Challenge");
  }, [setHeaderTitle]);

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
