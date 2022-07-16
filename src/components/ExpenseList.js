import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { lStorageContext } from "../context/LocalStorage";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({searchTerm}) {
  // const { expenses } = useContext(AppContext);
  const { expenses } = useContext(lStorageContext);

  return (
    <ul className="list-group">
      
      {expenses.filter((val) => {
        if(searchTerm === "") {
          return val;
        } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((item) => {
        return <ExpenseItem key={item.id} id={item.id} name={item.name} cost={item.cost}></ExpenseItem>;
      })}
    </ul>
  );
}

export default ExpenseList;
