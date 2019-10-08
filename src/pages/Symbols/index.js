import React, { useState, useEffect } from "react";
import api from "../../services/api"

import "./styles.css"

export default function Symbols({ history }) {
    const [symbols, setSymbols] = useState([]);

    useEffect(() => {
        async function loadInfo() {
                       
            const response = await api.get("/symbols");
            setSymbols(response.data);
        };

        loadInfo();
    }, []);

    return (
        <>
        <button type="submit" className="symbols" onClick={() => {
        history.push('/')
        }}>Back</button>
        
        <div>
        <h1>Symbol List</h1>
        <ul className="symbols-list">
           {symbols.map(symbol => (
               <li key={symbol.iexID}>
                   <h2>Name: {symbol.name}</h2>
                   <p>Symbol: {symbol.symbol}</p>
               </li>
           ))}
        </ul>
        </div>
        </>
    )
}