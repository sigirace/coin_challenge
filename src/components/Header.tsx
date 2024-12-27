import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atom";

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
  color: ${(props) => props.theme.textColor};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const DarkModeButton = styled.i`
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
  cursor: pointer;
`;

export default function Header() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const toggleDarkMode = () =>
    setIsDark((prev) => {
      return !prev;
    });
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
        <DarkModeButton
          className={isDark ? "fas fa-sun" : "fas fa-moon"}
          onClick={toggleDarkMode}
        ></DarkModeButton>
      </HeaderColumn>
    </Container>
  );
}
