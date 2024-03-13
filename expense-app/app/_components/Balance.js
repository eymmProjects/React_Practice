import React, { useContext } from "react";
import { transactions } from "./TransactionData";
import { GlobalContext } from "../context/GlobalState";

function moneyFormatter(num) {
  let p = num?.toFixed(2).split(".");
  return (
    " P " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions?.map((transaction) => transaction.amount);

  const total = amounts?.reduce((acc, item) => (acc += item), 0);
  return (
    <>
      <div className="flex">
        <h2 className="mr-2">Your Balance </h2>
        <h1>{moneyFormatter(total)}</h1>
        {/* {total} */}
      </div>
    </>
  );
};
