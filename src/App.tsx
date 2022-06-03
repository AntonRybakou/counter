import React, {useEffect, useState} from 'react';
import './App.css';
import {SettingsPanel} from "./components/SettingsPanel/SettingsPanel";
import {CounterPanel} from "./components/CounterPanel/CounterPanel";

function App() {
    const [state, setState] = useState(0)
    const increment = () => {
        const newState = state + 1;
        setState(newState);
        localStorage.setItem('countValue', JSON.stringify(newState));
    }
    const decrement = () => {
        const newState = state - 1;
        setState(newState);
        localStorage.setItem('countValue', JSON.stringify(newState));
    }
    const reset = () => {
        setState(min);
    }

    const [min, setMin] = useState(0);
    const resetMin = (value: number) => {
        setMin(value);
    }

    const [max, setMax] = useState(3);
    const resetMax = (value: number) => {
        setMax(value);
    }

    const [status, setStatus] = useState(true);
    const statusCallback = () => {
        setStatus(!status);
        localStorage.setItem('status', JSON.stringify(!status));
    }

    const setLocalStorage = () => {
        localStorage.setItem('minValue', JSON.stringify(min));
        localStorage.setItem('maxValue', JSON.stringify(max));
        statusCallback();
    }

    useEffect(() => {
        const localMin = localStorage.getItem('minValue');
        const localMax = localStorage.getItem('maxValue');
        const localCurrent = localStorage.getItem('countValue');
        const localStatus = localStorage.getItem('status');
        if (localMin) {
            setMin(JSON.parse(localMin));
        }
        if (localMax) {
            setMax(JSON.parse(localMax));
        }
        if (localCurrent) {
            setState(JSON.parse(localCurrent));
        }
        if (localStatus) {
            setStatus(JSON.parse(localStatus));
        }
    }, [])

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

export default App;
