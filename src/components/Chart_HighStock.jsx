import React from 'react'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [5, 2, 3, 4, 5, 6]
  }]
}


const Chart_HighStock = () => 


    <HighchartsReact
      highcharts={Highcharts}
      
      options={options}
    />


export default Chart_HighStock