import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";

import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import logger from "redux-logger";

const initialState = [
  {
    id: 1,
    name: "Mason",
    shirtColor: "Yes",
  },
  {
    id: 2,
    name: "David",
    shirtColor: "Green",
  },
  {
    id: 3,
    name: "Kenny",
    shirtColor: "Yellow",
  },
  {
    id: 4,
    name: "Alyssa",
    shirtColor: "Grey",
  },
  {
    id: 5,
    name: "Abdi",
    shirtColor: "Black",
  },
  {
    id: 6,
    name: "Joe",
    shirtColor: "Grey",
  },
];

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...state, action.payload];
    case "EDIT_STUDENT":
      const newState = state.filter(
        (student) => student.id !== action.payload.id
      );

      return [...newState, action.payload];
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ studentsReducer }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
