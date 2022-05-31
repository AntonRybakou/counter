import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter'
import {Button} from "./components/Button/Button";
import {SettingsPanel} from "./components/SettingsPanel/SettingsPanel";

function App() {
    const [state, setState] = useState(0)
    const increment = () => {
        setState(a => ++a);
    }
    const decrement = () => {
        setState(a => --a);
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

    const setLocalStorage = () => {
        localStorage.setItem('min', JSON.stringify(min));
        localStorage.setItem('max', JSON.stringify(max));
    }

    return (
        <>
            <div className="App">
                <Counter data={state}
                         endCount={max}/>

                <div className='buttons'>
                    <Button name={'+'}
                            callBack={increment}
                            disable={state >= max}/>
                    <Button name={'-'}
                            callBack={decrement}
                            disable={state <= min}/>
                    <Button name={'Reset'}
                            callBack={reset}/>
                </div>
            </div>

            <SettingsPanel min={min}
                           max={max}
                           resetMin={resetMin}
                           resetMax={resetMax}
                           setLocalStorage={setLocalStorage}/>
        </>
    );
}

export default App;
