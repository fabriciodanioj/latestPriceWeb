import React, { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Brush } from 'recharts';
import api from "../../services/api"

import "./styles.css";

export default function Chart({ history }) {
    const [data, setData] = useState({});

    useEffect(() => {
        async function loadInfo() {
            const symbol = localStorage.getItem("symbol");
            const range = localStorage.getItem("range");

            const response = await api.get("/chart", {
                headers: { symbol, range }
            });

            setData(response.data);
        };
        
        loadInfo();
    }, []);

    return (
        <div className="chart">
        <LineChart 
            width={400}  
            height={400} 
            data={data} 
            margin={{ 
                top: 5, 
                right: 5, 
                bottom: 5, 
                left: 5 
                }}
        >
            
        <Line 
            type="monotone" 
            dataKey="close" 
            stroke="#8884d8" 
        />
        <Legend />
        <Line 
            type="monotone" 
            dataKey="open" 
            stroke="#82ca9d" 
        />

        <CartesianGrid 
            stroke="#ccc" 
            strokeDasharray="5 5" 
        />

        <XAxis dataKey="label"/>

        <YAxis />

        <Brush dataKey="label"  height={30} stroke="#8884d8"/>

        <Tooltip />

        </LineChart>

        <button type="submit" onClick={() => {
                history.push('/setdata')
            }}>Voltar</button>
            
        </div>
    )
}