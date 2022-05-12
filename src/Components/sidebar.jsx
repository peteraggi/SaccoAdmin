import React, { useState } from "react";
import { SidebarData } from "../Data/data.js";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import "../Design/sidebar.css";
import LOGO from "../assets/Logo.png";
export default function Sidebar() {
  const [selected, setSelected] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const sidebarVariants = {
    true:{
      left: "0"
    },
    false:{
      left: "-60%"
    }
  }
  return (
    <>
      <div className="bars" style={expanded ? { left: "60%" } : { left: "5%" }}
      onClick = {()=> setExpanded(!expanded)}>
        <UilBars />
      </div>
      <motion.div className="sidebar"
      variants={sidebarVariants}
      animate = {window.innerWidth<=768?`${expanded}`: ""}>
        <div className="logo">
          <img src={LOGO} alt="sacco" />
          <span>
            S<span>A</span>CCO
          </span>
        </div>
        <div className="sb-menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={
                  selected === index ? "sb-menu-item active" : "sb-menu-item"
                }
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}

          <div className="sb-menu-item">
            <div>
              <UilSignOutAlt />
            </div>
            <span>Sign Out</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
