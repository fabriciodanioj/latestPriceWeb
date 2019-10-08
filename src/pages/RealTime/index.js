import React, { useEffect, useState } from 'react';
import api from "../../services/api"
import { O_NOFOLLOW } from 'constants';

export default function RealTime() {
    const [data, setData] = useState("");

    useEffect(() => {
        async function loadInfo() {
            const symbol = localStorage.getItem("symbol");

            const response = await api.get("/realtime", {
                headers: { symbol }
            });

            const values = [
                {
                    value: 10,
                },
                {}
            ]

            values.push({})
            console.log(values.data)
            setData(response.data)            
        };
        
        loadInfo();
    }, []);

    

    return (
        <div>
            <h1>DEsgraça</h1>
        </div>
    );
}
