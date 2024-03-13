import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "  P " +
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

export const IncomeExpense = () => {
  // const {transaction} =
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions?.map((transaction) => transaction.amount);

  const income = amounts
    ?.filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts
      ?.filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <>
      <div className="flex flex-row w-40 my-2 justify-between">
        <div>
          <h4>Income</h4>
          <p className="money plus">{moneyFormatter(income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{moneyFormatter(expense)}</p>
        </div>
      </div>
    </>
  );
};
