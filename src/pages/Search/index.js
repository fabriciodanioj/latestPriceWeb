import React , { useState } from "react";
import api from "../../services/api";

export default function Search({ history }) {
    const [symbol, setSymbol] = useState("");

    async function handleSubmit(event) {
      event.preventDefault();
  
      const response = await api.post("/company", {
        symbol: symbol.toUpperCase()
      });
  
      const { _id }  = response.data;
      
      localStorage.setItem("symbol_id", _id);
      localStorage.setItem("symbol", symbol.toUpperCase());

      history.push("/company")
    };

    return (
    <>
      <p>
        <strong>
          Enter an action symbol to return the last company stock value.
        </strong>
      </p>
      
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="symbol">Enter Company Symbol:</label>
        <input 
          type="text" 
          id="symbol" 
          value={symbol}
          onChange={event => setSymbol(event.target.value)}
          placeholder="Ex: FB to Facebook."
          />
          
        <button type="submit">Search by last price</button>
      </form>

      <button type="submit" className="symbols" onClick={() => {
                history.push('/symbols')
            }}>List of symbols</button>
    </>
    )
}