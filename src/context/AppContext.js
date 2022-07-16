import { createContext, useReducer } from "react";

const initialState = {
  budget: 2000,
  expenses: [
    {
      id: 12,
      name: "shopping",
      cost: 40,
    },
    {
      id: 13,
      name: "holiday",
      cost: 400,
    },
    {
      id: 14,
      name: "car service",
      cost: 700,
    },
  ],
};

const AppReducer = (state, action) => {
  if (action.type === "ADD_EXPENSE") {
    return { ...state, expenses: [...state.expenses, action.payLoad] };
    // state.expenses.push(action.payLoad);
    // console.log(state);
    // return state;
  } else if (action.type === "DELETE_EXPENSE") {
    const restExpenses = state.expenses.filter(
      (expense) => {
        console.log(expense);
        return action.payLoad !== expense.id
        // return true
      }
    );

    console.log('rest ', restExpenses);

    return { ...state, expenses: restExpenses };
  } else {
    return state;
  }
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{ budget: state.budget, expenses: state.expenses, dispatch }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

//! -> Global state -> budget, expenses, dispatch
