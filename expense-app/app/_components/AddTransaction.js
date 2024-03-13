import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <form action="flex flex-row" onSubmit={onSubmit}>
      <div className="sm:col-span-4">
        <label
          htmlFor="website"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Website
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm p-2 mb-2  ring-1 ring-inset ring-gray-300 sm:max-w-md">
            <input
              value={text}
              type="text"
              name="website"
              id="website"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Add Name Transaction"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="flex rounded-md shadow-sm  ring-1 ring-inset ring-gray-300 sm:max-w-md">
            <input
              value={amount}
              type="text"
              name="website"
              id="website"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Add Transaction"
              onChange={(e) => setAmount(e.target.value)}
            />
            <button className="p-2 bg-zinc-700 rounded-md m-2">Add</button>
          </div>
        </div>
      </div>
    </form>
  );
};
