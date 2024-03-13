import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    " ₹ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const TransactionList = () => {
  const { deleteTransaction, transactions } = useContext(GlobalContext); // Changed to transactions

  return (
    <div className="m-2 mt-10 mx-auto grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none ">
      <div className="mx-auto w-full max-w-lg">
        <div className="flow-root">
          <ul
            role="list"
            className="-my-6 divide-y items-start divide-gray-200"
          >
            {transactions?.map(
              (
                item // Changed to transactions.map
              ) => (
                <li key={item.id} className="flex space-x-6 py-6">
                  <div className="flex-auto">
                    <div className="space-y-1 flex items-start sm:justify-between sm:space-x-6">
                      <div className="flex-auto space-y-1 items-start text-sm font-medium">
                        <h3 className="text-">
                          {item.text}
                          {/* Corrected to use item.amount */}
                        </h3>
                        <h3 className="text-">
                          {item.amount < 0 ? "-" : "+"}
                          {moneyFormatter(item.amount)}{" "}
                          {/* Corrected to use item.amount */}
                        </h3>
                        {/* <p className="text-">{item.price}</p> */}
                      </div>
                      <div className="flex flex-none space-x-4">
                        <button
                          type="button"
                          className="text-sm font-medium text-amber-300 hover:text-indigo-500"
                          onClick={() => deleteTransaction(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
