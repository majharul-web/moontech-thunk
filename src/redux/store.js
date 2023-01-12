import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { cartCounter } from "./middlewares/cartCounters";
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter, thunk)));

export default store;
