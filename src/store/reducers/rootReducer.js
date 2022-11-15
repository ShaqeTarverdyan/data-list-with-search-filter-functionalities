import { combineReducers } from "redux";

import appReducer from "./appReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  app: appReducer,
  category: categoryReducer,
});

export default rootReducer;
