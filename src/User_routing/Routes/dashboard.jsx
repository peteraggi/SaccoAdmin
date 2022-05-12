import React from "react";
import Maindash from "../../Components/Maindash";
import Rightbar from "../../Components/rightbar";
import Sidebar from "../../Components/sidebar";

export default function Dashboard(){
    return(
        <div className="dashboard">
            <div className="dsh-glass">
              <Sidebar />
              <Maindash />
              <Rightbar />
            </div>
        </div>
    );
}