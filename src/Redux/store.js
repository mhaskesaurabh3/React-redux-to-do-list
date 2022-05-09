import todoReducers from "./reducer/todoReducer"
import { configureStore } from "@reduxjs/toolkit";

// import rootReducer from "./reducer/index";

const store = configureStore({
  reducer:{
      todoReducers:todoReducers
  }
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
});

export default store;
