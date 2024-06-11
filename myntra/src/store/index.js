import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import itemSlice from "./itemslice";
import bagSlice from "./bagSlice";
import { combineReducers } from "redux";

// Combine the reducers
const rootReducer = combineReducers({
  items: itemSlice.reducer,
  bag: bagSlice.reducer,
});

// Configure persist settings
const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
const MyntraStore = configureStore({
  reducer: persistedReducer,

});

export const persistor = persistStore(MyntraStore);
export default MyntraStore;
