import { apiSlice } from "../lib/api";
import ErrorReducer, { addError } from "./error/index";
import { configureStore, isRejectedWithValue } from "@reduxjs/toolkit";
import UserReducer,{logOut} from "./auth/auth_slice";
export const rtkQueryErrorLogger = (api) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action?.payload?.statuscode === 401) {
      store.dispatch(logOut());
    }
    console.log(action.payload)
    store.dispatch(addError(action.payload.error));
  }

  return next(action);
};
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: UserReducer,
    error: ErrorReducer,

  },
  middleware: (getMiddleware) =>
    getMiddleware({
      serializableCheck: false,
    })
      .concat(apiSlice.middleware)
      .concat(rtkQueryErrorLogger),
});
export default store;
