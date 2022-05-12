import React from "react";
import "../Design/maindash.css";
import Cards from "./cards";
import Table from "./table";

export default function Maindash(){
    return(
        <div className="m-dash">
            <h1>Dashboard</h1>
            <Cards />
            <Table />
        </div>
    );
}