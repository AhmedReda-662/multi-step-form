/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

const initialState = {
  data: null,
  selectedPlan: null,
  selectedServices: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "setData":
      return { ...state, data: action.payload };
    case "setSelectedPlan":
      return { ...state, selectedPlan: action.payload };
    case "setSelectedServices":
      return { ...state, selectedServices: action.payload };
    default:
      throw new Error("Please select an action");
  }
}

const DataContext = createContext();

function DataProvider({ children }) {
  const [{ data, selectedPlan, selectedServices }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <DataContext.Provider
      value={{
        data,
        selectedPlan,
        selectedServices,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined) throw new Error("failed to get the meaning data");

  return context;
}

export { DataProvider, useData };
