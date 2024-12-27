import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICoin } from "../interface";

const CardContainer = styled.div`
  background-color: white;
  color: black;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: red;
    }
  }
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

export default function Card(coin: ICoin) {
  return (
    <CardContainer>
      <Link to={{ pathname: `/${coin.id}` }}>
        <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} />
        {coin.name} &rarr;
      </Link>
    </CardContainer>
  );
}
