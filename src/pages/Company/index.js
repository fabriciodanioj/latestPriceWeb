import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./styles.css"

export default function Company({ history }) {
    const [info, setInfo] = useState({});

    useEffect(() => {
        async function loadInfo() {
            const _id = localStorage.getItem("symbol_id");
            
            const response = await api.get("/show", {
                headers: { _id }
            });

            setInfo(response.data);
        };

        loadInfo();
    }, []);

    return (
        <>
        <div className="info">
            <header>
                <h1>{info.companyName}</h1>
                <h2>Latest Price: $ {info.latestPrice}</h2> 
            </header>

            <div className="symbol">
                <strong>Symbol: {info.symbol}</strong>
            </div>

            <p className="description">{info.description}</p>

            <div className="add">
            <span><strong>Exchange:</strong> {info.exchange}</span>
            <p><strong>Industry:</strong> {info.industry}</p>
            </div>

            <div className="website">
            <p><strong>Website:</strong></p>
            <a href={info.website}>{info.website}</a>
            </div>
            
        </div>
        <div className="options">
            <button type="submit" onClick={() => {
                history.push('/')
            }}>Back</button>

            <button type="submit" onClick={() => {
                history.push('/setdata')
            }}>Historical Prices</button>
        </div>
        </>
    )
}