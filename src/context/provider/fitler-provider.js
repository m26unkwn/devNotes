import { useContext, createContext, useReducer } from "react";
import fitlerReducer from "../reducer/filter-reducer";

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);

const intialFilterState = {
  label: "all",
  priority: "all",
  sortByDate: "",
};

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    fitlerReducer,
    intialFilterState,
  );

  return (
    <FilterContext.Provider value={{ filterDispatch, filterState }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
