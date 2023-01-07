import React, { useEffect, useState } from 'react'
import * as echarts from 'echarts';
// import { ScatterChart } from 'echarts/charts';
import Json from "../Wine-Data.json";
import ReactECharts from 'echarts-for-react';

// interface Obj {
//   "Alcohol": number;
//   'Malic Acid': number;
//   "Ash": number,
//   "Alcalinity of ash": number
//   "Magnesium": number
//   "Total phenols": number
//   "Flavanoids": number
//   "Nonflavanoid phenols": number
//   "Proanthocyanins": string
//   "Color intensity": number
//   "Hue": number
//   "OD280/OD315 of diluted wines": number
//   "Unknown": number
// }


function ScatteredCharts() {
  // States+++++++++
  const [color, setColor] = useState<number[]>([])
  const [Hue, setHue] = useState<number[]>([])
  // end of States+++++++++++

  let HueArray: number[] = []
  let ColorArray: number[] = []

  function supplies() {
    // mapping data from Provided Json+++++++++++
    Json.map((val):void => {
      // putting extracted values in respective arrays++++++++++++
      HueArray.push(val['Hue'])
      ColorArray.push(Number(val['Color intensity']))
      return;
    })
  }

  useEffect(() => {
    supplies()
    // Updating the states++++++++++++++
    setColor(ColorArray)
    setHue(HueArray)
    // eslint-disable-next-line
  }, [])
  // ending of updating array of color and hue++++++++++++++++++

  let i;
  let finaldata: number[][] = []

  // function to put Data inside the options=+++++++++++++++++++
  function getSupplies() {
    for (i in Hue) {
      finaldata.push([Hue[i], color[i]])
    }
    // limiting length to 40 only+++++++++++++++
    return finaldata.length=40
  }

    getSupplies()

  const option = {
    xAxis: {
      data: color
    },
    yAxis: {
      data: Hue
    },
    series: [
      {
        type: 'scatter',
        symbolSize: 10,
        data: finaldata ? finaldata : [[67, 89], [98, 67]]
      }
    ]
  };
  return (
    <div>
      <ReactECharts
        echarts={echarts}
        option={option}
      />
    </div>
  )
}

export default ScatteredCharts;