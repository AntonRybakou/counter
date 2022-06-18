import React from 'react';
import style from './CounterPanel.module.css'
import {Counter} from "../Counter/Counter";
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {decrementAC, incrementAC, resetAC, setStatusAC} from "../../state/counter-reducer";
import {StateType} from "../../App";
import {AppRootStateType} from "../../state/store";

export const CounterPanel: React.FC = () => {
    const counter = useSelector<AppRootStateType, StateType>(state => state)
    const dispatch = useDispatch();
    const {count, min, max} = counter;
    return (
        <div className={style.counterPanel}>
            <Counter count={count}
                     max={max}
                     min={min}/>

            <div className={style.buttons}>
                <Button name={'+'}
                        callBack={() => dispatch(incrementAC())}
                        disable={count >= max}/>
                <Button name={'-'}
                        callBack={() => dispatch(decrementAC())}
                        disable={count <= min}/>
                <Button name={'Reset'}
                        callBack={() => dispatch(resetAC())}/>
            </div>

            <div className={style.buttonBlock}>
                <Button name={'Settings'} callBack={() => dispatch(setStatusAC())}/>
            </div>
        </div>
    );
}
