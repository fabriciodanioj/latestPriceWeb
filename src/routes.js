import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Historical from "./pages/Historical";
import Company from "./pages/Company";
import Symbols from "./pages/Symbols";
import Search from "./pages/Search";
import SetHistoricalData from "./pages/SetHistoricalData";



export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Search}/>
                <Route path="/company" component={Company}/>
                <Route path="/historical" component={Historical}/>
                <Route path="/symbols" component={Symbols}/>
                <Route path="/setdata" component={SetHistoricalData}/>
            </Switch>
        </BrowserRouter>
    ); 
}