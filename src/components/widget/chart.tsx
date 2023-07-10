import { Chart as ChartDOM } from "react-chartjs-2"
import { Chart as ChartJs, ChartArea, ChartData } from 'chart.js';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useRef, useState } from "react";

type Props = {
  data: any
}

Chart.register(CategoryScale);

export const ChartLine = ({data}: Props) => {
  const initialData = {
    data: data ?? {}
  }

  const [chartData, setChartData] = useState<ChartData<'line'>>({datasets: []})
  const chartRef = useRef<ChartJs>(null)

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      labels: initialData.data.labels ?? ["","","",""],
      datasets: [...initialData.data.datasets]
    }

    setChartData(chartData);
  }, [])

  return (
    <>
      <ChartDOM
        type="line"
        ref={chartRef}
        data={chartData}
        options={
          {
            scales: {
              y: {
                beginAtZero: true,
              },
              
            },
          }
        }
      />
    </>
  )
}