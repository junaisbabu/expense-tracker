import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { lStorageContext } from '../context/LocalStorage';

function Remaining() {

  // const {budget, expenses} = useContext(AppContext);
  const {budget, expenses} = useContext(lStorageContext);

  function calculateExpense() {
    // const total = expenses.reduce((curr, acc) => {
    //   curr += acc.cost;
    //   console.log(curr);
    //   return curr;
    // }, 0)

    console.log("exp: ", expenses);
    console.log('bud: ', budget);
    let total = 0;
    for (let i of expenses) {
      total += i.cost;
    }

    return total;
  }


  return (
    <div className={budget - calculateExpense() > 0 ? ('alert d-flex justify-content-start align-items-center alert-success') : ('alert d-flex justify-content-start align-items-center alert-danger')}><span className="badge bg-dark">Remaining</span><h3 className="d-inline">&#8360;.{budget - calculateExpense()}</h3></div>
  )
}

export default Remaining