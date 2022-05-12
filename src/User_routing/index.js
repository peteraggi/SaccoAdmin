import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Routes/dashboard";

export default function User(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path ="/" element = {<Dashboard />} />
        </Routes>
        </BrowserRouter>
    );
}