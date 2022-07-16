import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContext } from "../context/AppContext";
import { lStorageContext } from "../context/LocalStorage";

function AddExpense() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  // const {dispatch} = useContext(AppContext);
  const { dispatch } = useContext(lStorageContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = {
      id: uuidv4(),
      name: name,
      cost: parseFloat(cost),
    };

    setName("");
    setCost("");

    dispatch({ type: "ADD_EXPENSE", payLoad: newData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mt-2">
        <div className="mt-2 col-sm-4">
          <label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter name"
              value={name}
              required
              onChange={(event) => setName(event.target.value)}
            />
          </label>
        </div>
        <div className="mt-2 col-sm-4">
          <label>
            <input
              className="form-control"
              type="number"
              placeholder="Enter cost"
              value={cost}
              required
              onChange={(event) => setCost(event.target.value)}
            />
          </label>
        </div>
        <div className="mt-2 col-sm">
          <button className="btn btn-primary btn-sm w-25" type="submit">
            Save
          </button>
        </div>
        {/* <div className="row mt-3">
            
        </div> */}
      </div>
    </form>
  );
}

export default AddExpense;
