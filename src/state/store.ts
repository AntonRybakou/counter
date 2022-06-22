import {counterReducer} from "./counter-reducer";
import {compose, legacy_createStore as createStore} from 'redux';
import {TypedUseSelectorHook, useSelector} from "react-redux";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

export const store = createStore(counterReducer, composeEnhancers());
export type AppRootStateType = ReturnType<typeof counterReducer>

// @ts-ignore
window.store = store;