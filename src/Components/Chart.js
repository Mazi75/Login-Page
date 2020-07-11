import React,{useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';

const Chart = () =>{
    const [chartData,setChartData] = useState({})
    const chart = () => {
        setChartData({
            labels: [' 1 ',' 2 ','3','4'],
            datasets: [{
                labels: 'dataset Label',
                data:[10,20,30,10],
                backgroundColor:[
                    'rgba(75,192,192,0.6)'
                ],
                borderWidth : 4
            }]
        })
    }


    useEffect(()=>{
        chart()
    },[])
    return (
        <div className="Chart">
            <Line data={chartData} />
        </div>
    )
}

export default Chart;