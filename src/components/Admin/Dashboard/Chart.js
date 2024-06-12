import React from 'react';

// Importing necessary components from Chart.js library
import {
    Chart as chartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend,
} from 'chart.js';

// Importing Line component from react-chartjs-2 library
import { Doughnut, Line } from 'react-chartjs-2';

// Registering required Chart.js components
chartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend,
);

// React component for a Line Chart
export const LineChart = ({ views = [] }) => {
    // Data for the x-axis (labels) of the chart
    const labels = getLastyearMonths()

    // Configuration options for the chart
    const options = {
        responsive: true, // Make the chart responsive to screen size
        plugins: {
            legend: {
                position: 'bottom', // Set legend position at the bottom of the chart
            },
            title: {
                display: true,
                text: 'Yearly Views', // Title for the chart
            },
        },
    };

    // Data to be displayed on the chart
    const data = {
        labels, // Assign the x-axis labels to the data
        datasets: [
            {
                label: 'views', // Label for the dataset
                data: views, // Y-axis data points corresponding to each label
                borderColor: 'rgba(107,70,193,0.5)', // Border color of the line
                backgroundColor: '#6b46c1', // Background color of the line
            },
        ],
    };

    // Render the Line Chart component with provided options and data
    return <Line options={options} data={data} />;
};


export const DohghnutChart = ({ users = [] }) => {
    // Data for the x-axis (labels) of the chart



    // Data to be displayed on the chart
    const data = {
        labels: ["Subscribed", "Not Subscribed"],// Assign the x-axis labels to the data
        datasets: [
            {
                label: 'views', // Label for the dataset
                data: users, // Y-axis data points corresponding to each label
                borderColor: ['rbga(62,12,171)', 'rgba(214,43,129)'],// Border color of the line
                backgroundColor: ['rbga(62,12,171,0.3)', 'rgba(214,43,129,0.3)'], // Background color of the line
                borderWidth: "1"
            },
        ],
    };

    return <Doughnut data={data} />
}

function getLastyearMonths() {
    const lables = [];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const currentMonth = new Date().getMonth();



    for (let i = currentMonth; i < months.length; i--) {
        const element = months[i];
        lables.unshift(element);
        if (i === 0) {
            break
        }
    }

    for (let i = 11; i > currentMonth; i--) {
        if (i === currentMonth) {
            break;
        }
        const element = months[i];
        lables.unshift(element)

    }

    return lables;
}
