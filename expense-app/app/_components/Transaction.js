import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {" "}
          <h3 className="text-">
            {item.amount < 0 ? "-" : "+"}
            {moneyFormatter(item.amount)} {/* Corrected to use item.amount */}
          </h3>
          {transaction.amount}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  );
};
