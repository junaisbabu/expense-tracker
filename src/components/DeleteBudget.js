import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti'
import { lStorageContext } from '../context/LocalStorage'


function DeleteBudget() {
const {dispatch, budget} = useContext(lStorageContext);

    const DeleteBudget = () => {
        dispatch({type: "CLEAR_BUDGET", payLoad: 0})
    }
  return (
    <TiDelete size="1.7em" color="red" display={budget === 0 ? 'none' : 'block'} onClick={DeleteBudget}></TiDelete>
  )
}

export default DeleteBudget