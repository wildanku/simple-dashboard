import { ArrowDown, ArrowUp } from "@phosphor-icons/react"
import { Chart as ChartDOM } from "react-chartjs-2"
import { Chart as ChartJs, ChartArea, ChartData } from 'chart.js';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useRef, useState } from "react";

type Props = {
  title: string|null
  amount: number|null
  grow: string|null
  growAmount: number|null
  data: any
}

Chart.register(CategoryScale);

const CardInfo = ({title, amount, grow, growAmount, data}: Props) => {

  const initialData = {
    title: title ?? '',
    amount: amount ?? 0,
    grow: grow ?? 'up',
    growAmount: growAmount ?? 0,
    data: data ?? {}
  }

  const [chartData, setChartData] = useState<ChartData<'line'>>({datasets: []})
  const chartRef = useRef<ChartJs>(null)

  const gradientColor = (ctx: CanvasRenderingContext2D|undefined, area: ChartArea|undefined) => {
    
    let colorStart = "gray"
    let colorEnd = "gray"

    if(grow === "up") {
      colorStart = "#86efac";
      colorEnd = "#fff"
    }

    if(grow === "down") {
      colorStart = "#fca5a5";
      colorEnd = "#fff"
    }

    if (ctx && area) {
      const gradient = ctx?.createLinearGradient(0, area.bottom, 0, area.top);
      gradient?.addColorStop(0, colorEnd);
      gradient?.addColorStop(1, colorStart);
      return gradient;
    }

    return "gray"
  }

  useEffect(() => {
    const chart = chartRef.current;
    let borderColor = "gray"

    if (!chart) {
      return;
    }

    if (initialData.grow === "up") {
      borderColor = "#22c55e"
    } 

    if (initialData.grow === "down") {
      borderColor = "#dc2626"
    } 

    const chartData = {
      labels: initialData.data.labels ?? ["","","",""],
      datasets: [
        {
          ...initialData.data.datasets[0],
          backgroundColor: gradientColor(chart?.ctx, chart?.chartArea),
          borderColor: borderColor,
        }
      ]
    }

    setChartData(chartData);
  }, [])
  
  return (
    <div className="p-4 border border-gray-200 shadow-lg rounded-lg flex gap-2 items-center">
      
      <div style={{width: "60%"}}>
        <span className="text-sm font-semibold">{initialData.title}</span>
        <div className="py-3 text-3xl font-semibold">
          { initialData.amount.toLocaleString() }
        </div>
        <div className="flex text-xs gap-2">
          <span className={`flex items-center gap-1 font-bold ${initialData.grow === "up" ? "text-green-500" : "text-red-600" }`}>
            {
              initialData.grow === "up" ? (
                <ArrowUp weight="bold" />
              ) : (
                <ArrowDown weight="bold" />
              )
            }
            { initialData.growAmount.toLocaleString() }
          </span>
          vs yesterday
        </div>
      </div>

      <div style={{width: "40%"}}>
        <ChartDOM
          type="line"
          ref={chartRef}
          data={chartData}
          height={'180px'}
          options={
            {
              scales: {
                x: {
                  grid: {
                    display: false
                  },
                  ticks: {
                    display: false
                  },
                  border: {
                    display: false
                  }
                },
                y: {
                  grid: {
                    display: false,
                    lineWidth: 0
                  },
                  ticks: {
                    display: false,
                  },
                  beginAtZero: true,
                  border: {
                    display: false
                  }
                },
                
              },
              plugins: {
                legend: {
                    display: false
                },
              }
            }
          }
        />
      </div>
    </div>
  )
}

export default CardInfo