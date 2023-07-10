import BaseLayout from "../components/base/base"
import Title from "../components/typography/title"
import CardInfo from "../components/widget/card-info"
import { ChartLine } from "../components/widget/chart"


const HomePage = () => {
  return (
    <BaseLayout>
      <Title title="Dashboard" />
      <div className="md:grid md:grid-cols-4 md:gap-3 mt-4">
        <CardInfo
          title="Total Employees"
          amount={2420}
          grow="up"
          growAmount={425}
          data={{
            labels: ["","","",""],
            datasets: [
              {
                label: '',
                data: [11, 12, 9, 15],
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0
              }
            ]
          }}    
        />
        <CardInfo
          title="New Customer"
          amount={5410}
          grow="down"
          growAmount={42}
          data={{
            labels: ["","","",""],
            datasets: [
              {
                label: '',
                data: [11, 12, 10, 9],
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0
              }
            ]
          }}    
        />

        <CardInfo
          title="New Product"
          amount={30}
          grow="up"
          growAmount={2}
          data={{
            labels: ["","","",""],
            datasets: [
              {
                label: '',
                data: [10, 12, 28, 30],
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0
              }
            ]
          }}    
        />

        <CardInfo
          title="New Visitor"
          amount={12687}
          grow="up"
          growAmount={1432}
          data={{
            labels: ["","","",""],
            datasets: [
              {
                label: '',
                data: [312, 410, 415, 420],
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0
              }
            ]
          }}    
        />
      </div>

      <div>
      <div className="mt-8 bg-white shadow-xl border p-4 rounded-lg">
          <div className="py-3 flex items-center justify-between">
            <h3 className="text-xl font-semibold">Data Chart</h3>
            <div className="bg-gray-100 rounded-lg text-sm p-2 flex gap-2">
              <div className="py-1 px-4 rounded-lg bg-white">Daily</div>
              <div className="py-1 px-4 rounded-lg hover:bg-white cursor-pointer">Weekly</div>
              <div className="py-1 px-4 rounded-lg hover:bg-white cursor-pointer">Monthly</div>
            </div>
          </div>
          <ChartLine data={{
            labels: ["Jan","Feb","Mar","Apr","May","Jun"],
            datasets: [
              {
                label: 'Data 1',
                data: [312, 410, 415, 420, 110, 310],
                tension: 0.4,
              },
              {
                label: 'Data 2',
                data: [123, 399, 449, 410, 210, 510],
                tension: 0.4,
              }
            ]
          }} />
        </div>
      </div>
    </BaseLayout>
  )
}

export default HomePage