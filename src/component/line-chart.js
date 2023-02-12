import React from 'react';
import ReactEcharts from "echarts-for-react"; 
const LineChart = ()=>{
const option={
    tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
    title: {
        text: 'Line Chart',
        left: 'center'
      },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
}
return <ReactEcharts option={option}  />;

}

export default LineChart;