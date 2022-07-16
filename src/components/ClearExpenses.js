import React, { useContext } from 'react'
import { lStorageContext } from '../context/LocalStorage'

function ClearExpenses() {
  const {dispatch, expenses} = useContext(lStorageContext);

  const clearAll = () => {
    dispatch({type: 'CLEAR_EXPENSES'})
  }
  return (
    <button className='btn btn-danger btn-sm' disabled={expenses.length === 0 ? true : false} onClick={clearAll}>Clear All</button>
  )
}

export default ClearExpenses