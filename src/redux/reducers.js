// reducers.js
const initialState = {
    count: "nazir",
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count:  "hamza"};
      case 'DECREMENT':
        return { ...state, count: "ali" };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  