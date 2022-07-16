import { useState } from "react";
import "./App.css";
import AddExpense from "./components/AddExpense";
import Budget from "./components/Budget";
import ClearExpenses from "./components/ClearExpenses";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import Remaining from "./components/Remaining";
import { AppProvider } from "./context/AppContext";
import LStorageProvider from "./context/LocalStorage";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    // <AppProvider>
    <LStorageProvider>
      <div className="container">
        <h1 className="">My Budget Planner 🤑</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center"><h3 className="mt-3">Expenses <ClearExpenses /></h3><label><input className="form-control" type='text' placeholder="Search..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} /></label></div>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList searchTerm={searchTerm} />
          </div>
        </div>
        <h3 className="mt-5">
          Add Expenses
        </h3>
        <div className="row">
          <div className="col-sm">
            <AddExpense />
          </div>
        </div>
      </div>
    </LStorageProvider>
    // </AppProvider>
  );
}

export default App;
