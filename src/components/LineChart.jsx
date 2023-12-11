import React from 'react'
import { Chart } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const LineChart = () => {

    const data = {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May'
        ],
        datasets: [{
          label: 'Monthly Slaes',
          data: [300, 50, 100, 25, 50],
          backgroundColor: "orange"
            
        }]
      };

  return (
    <div className='bg-light'>
        <Line data={data}/>
    </div>
  )
}

export default LineChart