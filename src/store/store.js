import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import animeReducer from "../reducers/anime";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: [
    "animeReducer",
  ],
};

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const appReducer = combineReducers({
  animeReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
