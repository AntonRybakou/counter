import React from 'react';
import style from './CounterPanel.module.css'
import {Counter} from "../Counter/Counter";
import {Button} from "../Button/Button";

type CounterPanelPropsType = {
    data: number
    min: number
    max: number
    increment: () => void
    decrement: () => void
    reset: () => void
    statusCallback: () => void
}

export const CounterPanel: React.FC<CounterPanelPropsType> = ({
                                                                  data,
                                                                  min,
                                                                  max,
                                                                  decrement,
                                                                  reset,
                                                                  increment,
                                                                  statusCallback
                                                              }) => {
    return (
        <div className={style.counterPanel}>
            <Counter data={data}
                     max={max}
                     min={min}/>

            <div className={style.buttons}>
                <Button name={'+'}
                        callBack={increment}
                        disable={data >= max}/>
                <Button name={'-'}
                        callBack={decrement}
                        disable={data <= min}/>
                <Button name={'Reset'}
                        callBack={reset}/>
            </div>

            <div className={style.buttonBlock}>
                <Button name={'Settings'} callBack={statusCallback}/>
            </div>
        </div>
    );
}