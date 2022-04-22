import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter'
import {Button} from "./components/Button/Button";

function App() {
    const startCount = 0;
    const endCount = 5
    const [state, setState] = useState(startCount)
    const increment = () => {
        setState( a => ++a );
    }
    const decrement = () => {
        setState( a => --a );
    }
    const reset = () => {
        setState(0);
    }

    return (
        <div className="App">
            <Counter
                data={state}
                endCount={endCount}/>
            <div className='buttons'>
                <Button
                    name={'+'}
                    callBack={increment}
                    disable={state === endCount}/>
                <Button
                    name={'-'}
                    callBack={decrement}
                    disable={state === endCount}/>
                <Button
                    name={'Reset'}
                    callBack={reset}/>
            </div>
        </div>
    );
}

export default App;
