import { useQuery } from "react-query";
import { ICoinProps, IHistorical } from "../interface";
import { fetchCoinHistory } from "../api";
import { styled } from "styled-components";
import { getTimeFormat } from "../utils";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const TableHead = styled.thead`
  background-color: ${(props) =>
    props.theme.isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${(props) =>
      props.theme.isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"};
  }
`;

const TableHeader = styled.th`
  border: 1px solid ${(props) => props.theme.textColor};
  padding: 8px;
  text-align: left;
  font-size: 14px;
`;

const TableCell = styled.td`
  border: 1px solid ${(props) => props.theme.textColor};
  padding: 8px;
  text-align: left;
  font-size: 12px;
`;

export default function Price({ coinID }: ICoinProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinID], () =>
    fetchCoinHistory(coinID)
  );

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Time Open</TableHeader>
              <TableHeader>Time Close</TableHeader>
              <TableHeader>Open</TableHeader>
              <TableHeader>High</TableHeader>
              <TableHeader>Low</TableHeader>
              <TableHeader>Close</TableHeader>
              <TableHeader>Volume</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {data
              ?.slice()
              .sort((a, b) => Number(b.time_open) - Number(a.time_open))
              .slice(0, 10)
              .map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{getTimeFormat(item.time_open)}</TableCell>
                  <TableCell>{getTimeFormat(item.time_close)}</TableCell>
                  <TableCell>{item.open}</TableCell>
                  <TableCell>{item.high}</TableCell>
                  <TableCell>{item.low}</TableCell>
                  <TableCell>{item.close}</TableCell>
                  <TableCell>{Number(item.volume).toFixed(2)}</TableCell>
                </TableRow>
              ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
