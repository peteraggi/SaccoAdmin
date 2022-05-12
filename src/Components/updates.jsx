import React from "react";
import { UpdatesData } from "../Data/data";
import "../Design/Updates.css";

export default function Updates() {
  return (
    <div className="updates">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} />
            <div className="notif">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <span>{update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
