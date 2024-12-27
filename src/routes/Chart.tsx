import { useQuery } from "react-query";
import { ICoinProps, IHistorical } from "../interface";
import { fetchCoinHistory } from "../api";
import { isDarkAtom } from "../atom";
import { useRecoilValue } from "recoil";
import { getTimeFormat } from "../utils";
import ApexChart from "react-apexcharts";

export default function Chart({ coinID }: ICoinProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinID], () =>
    fetchCoinHistory(coinID)
  );
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "price",
              data: data?.map((price) => ({
                x: new Date(price.time_close),
                y: [price.open, price.high, price.low, price.close],
              })) as { x: Date; y: number[] }[],
            },
          ]}
          options={{
            theme: { mode: isDark ? "dark" : "light" },
            chart: { toolbar: { show: false }, background: "transparent" },
            xaxis: {
              type: "datetime",
              categories: data?.map((price) => getTimeFormat(price.time_close)),
            },
            stroke: { curve: "smooth", width: 3 },
            yaxis: { show: false },
            tooltip: {
              y: { formatter: (value) => `$${value}` },
            },
          }}
        ></ApexChart>
      )}
    </div>
  );
}
