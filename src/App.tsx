import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter/Counter'

function App() {
    const [state, setState] = useState(0)
    const [disable, setDisable] = useState(false)
    const increment = () => {
        setState( (a) => ++a );
    }
    const reset = () => {
        setState(0);
        setDisable(false)
    }
    useEffect(() => {
        if (state === 5) {
            setDisable(true)
        }
    }, [state]);

    return (
        <div className="App">
            <Counter data={state} increment={increment} reset={reset} disable={disable}/>
        </div>
    );
}

export default App;
