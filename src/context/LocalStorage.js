import React, { createContext, useEffect, useReducer } from "react";

export const lStorageContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return { ...state, expenses: [...state.expenses, action.payLoad] };
    case "DELETE_EXPENSE":
      const restExpenses = state.expenses.filter((expense) => {
        return expense.id !== action.payLoad
      })
      return {...state, expenses: restExpenses};

    case "CLEAR_EXPENSES": return {...state, expenses: []}

    case "EDIT_EXPENSE":
        let edit = state.expenses.map((expense) => {
          if(expense.id === action.payLoad[0]) {
            expense.name = action.payLoad[1];
            expense.cost = parseFloat(action.payLoad[2]);
          }
          return expense;
        })

      return {...state, expenses: edit}
    case "ADD_BUDGET":
      return {...state, budget: (Number(action.payLoad) + Number(state.budget))}

    case "CLEAR_BUDGET": return {...state, budget: action.payLoad}
    default:
      return state;
  }
};

function LStorageProvider(props) {
  const [state, dispatch] = useReducer(reducer, [], () => {
    let localData = localStorage.getItem("expenses");
    let expenses = localData ? JSON.parse(localData) : [];
    let budgetAmount = localStorage.getItem("budget");
    let budget = budgetAmount ? budgetAmount : 0;
    return budget, expenses;
  });

  console.log(state);


    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(state));
    }, [state])

    console.log(state.budget);

  return (
    <lStorageContext.Provider value={{ dispatch, budget: state.budget, expenses: state.expenses }}>
      {props.children}
    </lStorageContext.Provider>
  );
}

export default LStorageProvider;
