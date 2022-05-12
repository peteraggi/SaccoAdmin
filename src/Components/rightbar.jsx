import React from "react";
import "../Design/Rightbar.css";
import CustomerReview from "./customerreview";
import Updates from "./updates";

export default function Rightbar() {
  return (
    <div className="right-bar">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  );
}
