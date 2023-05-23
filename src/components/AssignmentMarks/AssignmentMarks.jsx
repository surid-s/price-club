import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const AssignmentMarks = () => {
    const data = [
        {
            name: "Page A",
            marks: 4,
            quiz: 24,
            amt: 24
        },
        {
            name: "Page B",
            marks: 3,
            quiz: 1398,
            amt: 221
        },
        {
            name: "Page C",
            marks: 2,
            quiz: 98,
            amt: 229
        },
        {
            name: "Page D",
            marks: 278,
            quiz: 398,
            amt: 2
        },
        {
            name: "Page E",
            marks: 189,
            quiz: 48,
            amt: 2181
        },
        {
            name: "Page F",
            marks: 239,
            quiz: 38,
            amt: 25
        },
        {
            name: "Page G",
            marks: 349,
            quiz: 43,
            amt: 21
        }
    ];
    return (
        <div className='m-10'>
            <LineChart
                width={500}
                height={300}
                data={data}

            >
                <Line type="monotone" dataKey="marks" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="quiz"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </div>
    );
};

export default AssignmentMarks;