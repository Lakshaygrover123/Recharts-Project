import React, { useEffect, useState } from 'react'
import * as echarts from 'echarts';
// import { ScatterChart } from 'echarts/charts';
import Json from "../Wine-Data.json";
import ReactECharts from 'echarts-for-react';

// interface Obj {
//     "Alcohol": number;
//     'Malic Acid': number;
//     "Ash": number,
//     "Alcalinity of ash": number
//     "Magnesium": number
//     "Total phenols": number
//     "Flavanoids": number
//     "Nonflavanoid phenols": number
//     "Proanthocyanins": string
//     "Color intensity": number
//     "Hue": number
//     "OD280/OD315 of diluted wines": number
//     "Unknown": number
// }


function BarChart() {
    // States+++++++++
    const [Alcohol, setAlcohol] = useState<number[]>([])
    const [Acid, setAcid] = useState<number[]>([])
    // end of States+++++++++++

    let AlcoholArray: number[] = []
    let AcidArray: number[] = []

    function supplies() {
        // mapping data from Provided Json+++++++++++
        Json.map((val):void => {
            // putting extracted values in respective arrays++++++++++++
            AlcoholArray.push(val['Alcohol'])
            AcidArray.push(Number(val['Malic Acid']))
            return;
        })
    }

    useEffect(() => {
        supplies()
        // for having uniuq values in an array+++++++++++++++++++
        const Sets = new Set(AlcoholArray);
        // Updating the states++++++++++++++
        setAlcohol(Array.from(Sets))
        setAcid(AcidArray)
        // eslint-disable-next-line
    }, [])
    // ending of updating array of color and hue++++++++++++++++++

    let finaldata:number;

    // getting average=+++++++++++++++++++
    function getAverage() {
        let arr: number[] | number = Acid
        arr = arr.reduce((a, b) => a + b, 0) / arr.length;
        return arr
    }

    finaldata=getAverage()

    const option = {
        xAxis: {
            data: Alcohol
        },
        yAxis: {
            data: Acid
        },
        series: [
            {
                type: 'bar',
                symbolSize: 20,
                data: [finaldata]
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

export default BarChart;