import {counterReducer} from "./counter-reducer";
import { legacy_createStore as createStore} from 'redux';

export const store = createStore(counterReducer);
export type AppRootStateType = ReturnType<typeof counterReducer>

// @ts-ignore
window.store = store;