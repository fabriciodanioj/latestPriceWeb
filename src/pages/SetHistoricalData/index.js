import React , { useState } from "react";

import "./styles.css"

export default function SetHistoricalData({ history }) {
    const [range, setRange] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        localStorage.setItem("range", range);

        history.push("/historical")
    };

    return (
      <>
      <form onSubmit={handleSubmit} autoComplete="off">       
        <label htmlFor="range">Enter a range:</label>
        <input 
          type="text" 
          id="range" 
          value={range}
          onChange={event => setRange(event.target.value)}
          placeholder="y to years, m to months and d to days. EX: 10d"
          />
          
        <button type="submit">Plot chart</button>
      </form>
      
      <button type="submit" className="symbols" onClick={() => {
        history.push('/company')
      }}>Back</button>
      <div className="ranges">
        <span>Available ranges:</span>
        <ul>
          <li>max: All available data up to 15 years</li>
          <li>5y: Five years</li>
          <li>2y: Two years</li>
          <li>1y: One year</li>
          <li>6m: Six months</li>
          <li>3m: Three months</li>
          <li>1m: One month</li>
          <li>5d: Five Days </li>
          <li>1d: One day</li>
        </ul>
      </div>
      </>
    )
}