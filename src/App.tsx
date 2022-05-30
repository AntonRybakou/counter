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
    const incrementMin = () => {
        setMin(a => ++a);
    }
    const decrementMin = () => {
        setMin(a => --a);
    }
    const resetMin = (value: number) => {
        setMin(value);
    }

    const [max, setMax] = useState(3);
    const incrementMax = () => {
        setMax(a => ++a);
    }
    const decrementMax = () => {
        setMax(a => --a);
    }
    const resetMax = (value: number) => {
        setMax(value);
    }


    return (
        <>
            <div className="App">
                <Counter data={state} endCount={max}/>
                <div className='buttons'>
                    <Button name={'+'} callBack={increment} disable={state === max}/>
                    <Button name={'-'} callBack={decrement} disable={state === min}/>
                    <Button name={'Reset'} callBack={reset}/>
                </div>
            </div>

            <div className="Set">

                <div className="Max">
                    <Input value={max} callBack={resetMax}/>
                    <Button name={"+"} callBack={incrementMax}/>
                    <Button name={"-"} callBack={decrementMax}/>
                </div>

                <div className="Min">
                    <Input value={min} callBack={resetMin}/>
                    <Button name={"+"} callBack={incrementMin}/>
                    <Button name={"-"} callBack={decrementMin}/>
                </div>

                <Button name={'Set'} callBack={reset}/>
            </div>
        </>
    );
}

export default App;
