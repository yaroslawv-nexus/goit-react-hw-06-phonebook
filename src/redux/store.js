import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { combineReducers } from "redux";
import { filterReducer } from "./filterSlice";
import { contactsReducer } from "./contactsSlice";


const enhancer = devToolsEnhancer();


const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});



export const store = createStore(rootReducer, enhancer);