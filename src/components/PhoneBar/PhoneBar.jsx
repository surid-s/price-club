import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data=> setPhones(data)

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesLoaded = data.data.data;
                const phoneData = phonesLoaded.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price,
                    }
                    return singlePhone
                })
                console.log(phoneData)
                setPhones(phoneData)
            })
    });
    return (
        <div>
            <BarChart
                width={500}
                height={200}
                data={phones}
            >

                <Bar dataKey="price" fill="#8884d8" />
                <Line type="monotone" dataKey="name" stroke="#8884d8" />
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
            </BarChart>
        </div>
    );
};

export default PhoneBar;