
import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './custom.css';
const data = {
    labels: ['Finished', 'In progress', 'Not Started', 'Other'],
    datasets: [{
        data: [20, 15, 15, 50],
        backgroundColor: ['rgb(255, 0, 91)', 'rgb(255, 38, 255)', 'rgb(140, 44, 255)', 'rgb(255, 255, 255)'],
    }]
};

const options = {
    plugins: {
        legend: {
            position: 'right',  // Configura la leyenda para que se muestre a la derecha
        }
    }
};

const DonutChart = () => {
    return (
        <div className="donut-chart-container">
            <Pie data={data} options={options} />
        </div>
    );
}

export default DonutChart;

