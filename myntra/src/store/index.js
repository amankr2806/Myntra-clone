import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemslice";

const MyntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
  },
});

export default MyntraStore;
