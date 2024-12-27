import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  width: 100%;
`;

const HeaderColumn = styled.div`
  width: 33%;
  display: flex;
  &:first-child {
    justify-content: flex-start;
  }
  &:nth-child(2) {
    justify-content: center;
    white-space: nowrap;
  }
  &:last-child {
    justify-content: flex-end;
  }
`;

const Icon = styled.i`
  font-size: 18px;
  left: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const DarkModeButton = styled.i`
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

export default function Header() {
  return (
    <Container>
      <HeaderColumn>
        <Icon className="fas fa-coins"></Icon>
      </HeaderColumn>
      <HeaderColumn>
        <Link to="/">
          <Title>Coin Challenge</Title>
        </Link>
      </HeaderColumn>
      <HeaderColumn>
        <DarkModeButton className="fas fa-moon"></DarkModeButton>
      </HeaderColumn>
    </Container>
  );
}
