import React, { useEffect, useState } from "react";
import api from "../../services/api";

import "./styles.css"

export default function Company({ history }) {
    const [news, setNews] = useState({});

    useEffect(() => {
        async function loadInfo() {
            const symbol = localStorage.getItem("symbol");
            
            const response = await api.get("/news", { headers: { symbol } });

            setNews(response.data[0]);
        };

        loadInfo();
    }, []);

    return (
        <>
        <div className="inf">
            <header>
                <h1>Latest News: {news.related}</h1>
            </header>

            <h1>{news.headline}</h1>
            <p>{news.summary}</p>

            <div className="source">
            <p>Link: <a href={news.url}>{news.url}</a></p>
            <span>Source: <strong>{news.source}</strong></span>
            </div>
            
        </div>

        <button onClick={() => {
            history.push("/company")
        }}>
            Voltar
        </button>
        </>
    )
}