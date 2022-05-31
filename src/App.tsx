import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter'
import {Button} from "./components/Button/Button";
import {Input} from "./components/Input/Input";

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
                <Counter data={state} endCount={max}/>
                <div className='buttons'>
                    <Button name={'+'} callBack={increment} disable={state >= max}/>
                    <Button name={'-'} callBack={decrement} disable={state <= min}/>
                    <Button name={'Reset'} callBack={reset}/>
                </div>
            </div>

            <div className="Set">

                <div className="Max">
                    Maximum
                    <Input value={max} callBack={resetMax} type={'number'}/>
                </div>

                <div className="Min">
                    Minimum
                    <Input value={min} callBack={resetMin} type={'number'}/>
                </div>

                <Button name={'Set'} callBack={setLocalStorage}/>
            </div>
        </>
    );
}

export default App;
