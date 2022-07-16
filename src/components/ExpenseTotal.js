import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { lStorageContext } from "../context/LocalStorage";

function ExpenseTotal() {
  // const {expenses} = useContext(AppContext);
  const { expenses } = useContext(lStorageContext);

  function calculateExpense() {
    // const total = expenses.reduce((curr, acc) => {
    //   curr += acc.cost;
    //   console.log(curr);
    //   return parseInt(curr);
    // }, 0)

    let total = 0;
    for (let i of expenses) {
      total += i.cost;
    }

    return total;
  }
  return (
    <div className="alert alert-primary d-flex justify-content-start align-items-center">
      <span className="badge bg-dark">ExpenseTotal </span>
      <h3 className="d-inline">&#8360;.{calculateExpense()}</h3>
    </div>
  );
}

export default ExpenseTotal;
