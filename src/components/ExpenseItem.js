import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import EditExpense from "./EditExpense";
import { AppContext } from "../context/AppContext";
import { lStorageContext } from "../context/LocalStorage";

function ExpenseItem({ name, cost, id }) {
  // const { dispatch } = useContext(AppContext);
  const { dispatch } = useContext(lStorageContext);

  const deleteItem = () => {
    dispatch({ type: "DELETE_EXPENSE", payLoad: id });
  };



  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <h5>{name}</h5>
      <div className="d-flex justify-content-between align-items-center">
        <span className="m-3" style={{fontSize: '18px', fontWeight: '700', color: 'gray'}}>&#8360;.{cost}</span>
        <EditExpense id={id} name={name} cost={cost} />
        <TiDelete size="1.7em" color="red" onClick={deleteItem}></TiDelete>
      </div>
    </li>
  );
}

export default ExpenseItem;
