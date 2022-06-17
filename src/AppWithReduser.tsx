import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {SettingsPanel} from "./components/SettingsPanel/SettingsPanel";
import {CounterPanel} from "./components/CounterPanel/CounterPanel";
import {counterReducer, decrementAC, incrementAC, resetAC, setMaxValueAC, setMinValueAC} from "./state/counter-reducer";

function AppWithReducer() {
    const [state, dispatchToState] = useReducer(counterReducer, Number(localStorage.getItem('countValue')))

    const increment = () => {
        const action = incrementAC();
        dispatchToState(action);
    }
    const decrement = () => {
        const action = decrementAC();
        dispatchToState(action);
    }
    const reset = () => {
        const action = resetAC();
        dispatchToState(action);
    }

    const [min, setMin] = useState(0);
    const resetMin = (value: number) => {
        const action = setMinValueAC(value);
        dispatchToState(action);
    }

    const [max, setMax] = useState(3);
    const resetMax = (value: number) => {
        const action = setMaxValueAC(value);
        dispatchToState(action);
    }

    const [status, setStatus] = useState(true);
    const statusCallback = () => {
        setStatus(!status);
        localStorage.setItem('status', JSON.stringify(!status));
    }

    const setLocalStorage = () => {
        statusCallback();
    }

    useEffect(() => {
        const localMin = localStorage.getItem('minValue');
        const localMax = localStorage.getItem('maxValue');
        const localCurrent = localStorage.getItem('countValue');
        const localStatus = localStorage.getItem('status');
        if (localMin) {
            dispatchToState(setMinValueAC(Number(localMin)));
        }
        if (localMax) {
            dispatchToState(setMaxValueAC(Number(localMax)));
        }
        if (localCurrent) {
            dispatchToState(JSON.parse(localCurrent));
        }
        if (localStatus) {
            setStatus(JSON.parse(localStatus));
        }
    }, [])

    // useEffect(() => {
    //     if (max < state) {
    //         dispatchToState(max);
    //         localStorage.setItem('countValue', JSON.stringify(max));
    //     }
    //     if (min > state) {
    //         setState(min);
    //         localStorage.setItem('countValue', JSON.stringify(min));
    //     }
    // }, [min, max, state])

    return (
        <>
            {status
                ? <SettingsPanel min={min}
                                 max={max}
                                 resetMin={resetMin}
                                 resetMax={resetMax}
                                 setLocalStorage={setLocalStorage}/>

                : <CounterPanel data={state}
                                min={min}
                                max={max}
                                increment={increment}
                                decrement={decrement}
                                reset={reset}
                                statusCallback={statusCallback}/>}
        </>
    );
}

export default AppWithReducer;
