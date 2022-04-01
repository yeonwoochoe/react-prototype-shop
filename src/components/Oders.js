import React from "react";
import useOders from "../hooks/useOders";
const Oders = () => {
  const oders = useOders();
  console.log(oders);
  return (
    <div className="empty">
      <div className="title">You don't have any orders</div>
      <div className="subtitle">Click on a + to add an order</div>
    </div>
  );
};

export default Oders;
