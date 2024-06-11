import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemslice";
import bagSlice from "./bagSlice";

const MyntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default MyntraStore;
