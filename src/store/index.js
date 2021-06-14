import {createStore} from "redux";
import reducer  from "./reducer"; //注意reducer,而不是{reducer}
const store=createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
export default store