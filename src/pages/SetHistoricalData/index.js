import React , { useState } from "react";


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
      </>
    )
}