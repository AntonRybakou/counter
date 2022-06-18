import React, {useEffect} from 'react';
import './App.css';
import {SettingsPanel} from "./components/SettingsPanel/SettingsPanel";
import {CounterPanel} from "./components/CounterPanel/CounterPanel";
import {
    decrementAC,
    incrementAC,
    resetAC,
    setCountValueAC,
    setMaxValueAC,
    setMinValueAC,
    setStatusAC
} from "./state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

export type StateType = {
    count: number;
    min: number;
    max: number;
    status: boolean;
}

function AppWithRedux() {

    const counter = useSelector<AppRootStateType, StateType>(state => state)
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(incrementAC());
    }
    const decrement = () => {
        dispatch(decrementAC());
    }
    const reset = () => {
        dispatch(resetAC());
    }

    const resetMin = (value: number) => {
        dispatch(setMinValueAC(value));
    }

    const resetMax = (value: number) => {
        dispatch(setMaxValueAC(value));
    }

    const statusCallback = () => {
        dispatch(setStatusAC(!counter.status));
    }

    const setLocalStorage = () => {
        statusCallback();
    }

    useEffect(() => {
        if (counter.max < counter.count) {
            dispatch(setCountValueAC(counter.max));
        }
        if (counter.min > counter.count) {
            dispatch(setCountValueAC(counter.min));
        }
    }, [counter.max, counter.min, counter.count, dispatch])

    return (
        <>
            {(counter.status)

                ? <SettingsPanel
                    min={counter.min}
                    max={counter.max}
                    resetMin={resetMin}
                    resetMax={resetMax}
                    setLocalStorage={setLocalStorage}
                />

                : <CounterPanel
                    data={counter.count}
                    min={counter.min}
                    max={counter.max}
                    increment={increment}
                    decrement={decrement}
                    reset={reset}
                    statusCallback={statusCallback}
                />}
        </>
    );
}

export default AppWithRedux;
