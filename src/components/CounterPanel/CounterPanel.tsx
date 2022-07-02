import React, {useCallback} from 'react';
import style from './CounterPanel.module.css'
import {Counter} from "../Counter/Counter";
import {Button} from "../Button/Button";
import {useDispatch} from "react-redux";
import {decrementAC, incrementAC, resetAC, setStatusAC} from "../../state/counter-reducer";
import {useAppSelector} from "../../state/store";

export const CounterPanel: React.FC = React.memo(() => {
    const counter = useAppSelector(state => state);
    const {count, min, max, isSettings} = counter;
    const dispatch = useDispatch()

    const increment = useCallback(() => {
        localStorage.setItem('countValue', JSON.stringify(count + 1));
        dispatch(incrementAC())
    }, [count, dispatch]);

    const decrement = useCallback(() => {
        localStorage.setItem('countValue', JSON.stringify(count - 1));
        dispatch(decrementAC())
    }, [count, dispatch]);

    const reset = useCallback(() => {
        localStorage.setItem('countValue', JSON.stringify(min));
        dispatch(resetAC())
    }, [min, dispatch]);

    const setStatus = useCallback(() => {
        localStorage.setItem('isSettings', JSON.stringify(!isSettings));
        dispatch(setStatusAC());
    }, [isSettings, dispatch]);

    return (
        <div className={style.counterPanel}>
            <Counter count={count}
                     max={max}
                     min={min}/>

            <div className={style.buttons}>
                <Button name={'+'}
                        callBack={increment}
                        disable={count >= max}/>
                <Button name={'-'}
                        callBack={decrement}
                        disable={count <= min}/>
                <Button name={'Reset'}
                        callBack={reset}/>
            </div>

            <div className={style.buttonBlock}>
                <Button name={'Settings'} callBack={setStatus}/>
            </div>
        </div>
    );
});
