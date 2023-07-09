import BaseLayout from "../components/base/base"
import Title from "../components/typography/title"
import CardInfo from "../components/widget/card-info"


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
          title="Total Revenue"
          amount={31000}
          grow="up"
          growAmount={145}
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
        
      </div>
    </BaseLayout>
  )
}

export default HomePage