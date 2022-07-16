import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { GrAdd } from "react-icons/gr";
import { lStorageContext } from "../context/LocalStorage";
import AddBudget from "./AddBudget";
import DeleteBudget from "./DeleteBudget";

function Budget() {
  // const {budget} = useContext(AppContext);
  const { budget } = useContext(lStorageContext);
  return (
    <>
      <div className="alert alert-secondary d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center"><span className="badge bg-dark">Budget </span><h3 className="d-inline">&#8360;.{budget}</h3></div> <div className="d-flex justify-content-between align-items-center"><AddBudget /><DeleteBudget /></div>
      </div>
    </>
  );
}

export default Budget;
