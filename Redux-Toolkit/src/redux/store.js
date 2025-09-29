import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});


// steps
// step1 - create store
// step2 - wrap app component under Provider
// step3 - create slice for states and reducer definition
// step4 - register reducer in store