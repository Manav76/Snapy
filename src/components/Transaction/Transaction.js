import React from "react";
import "./Transaction.css";
import Crypto from "./trade.png";
const Transaction = () => {
  return (
    <div className="transaction" >
      <div className="container">
        <div className="left">
          <img src={Crypto} alt="" />
        </div>
        <div className="right">
          <h2>All about Transactions</h2>
          <p>
            It uses a digital signature feature to conduct fraud-free
            transactions making it impossible to corrupt or change the data of
            an individual by the other users without a specific digital
            signature.With Blockchain, transactions are done with the mutual consensus of
            users resulting in smoother, safer, and faster transactions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
