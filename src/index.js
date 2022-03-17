import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import * as serviceWorker from "./serviceWorker"
import 'antd/dist/antd.css';
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);


serviceWorker.unregister()