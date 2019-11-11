const dataReducer = (state, action) => {
  if (action.type === "SET_ERROR") {
    return { ...state, list: action.list, error: null };
  }

  if (action.type === "SET_LIST") {
    return { ...state, list: action.list, error: null };
  }
  throw new Error();
};

export default dataReducer;
