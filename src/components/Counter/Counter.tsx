import React from 'react';
import {Button} from "../Button/Button";
import style from './Counter.module.css'

type CounterPropsType = {
    data: number,
    increment: () => void,
    reset: () => void,
    disable: boolean,
}

export const Counter: React.FC<CounterPropsType> = ({data, increment, reset, disable}) => {
    return (
        <div className={style.counter}>
            <div className={ (data === 5) ? style.red : style.count}>{data}</div>
            <div className={style.buttons}>
                <Button
                    name={'+'}
                    callBack={increment}
                    disable={disable}/>
                <Button
                    name={'Reset'}
                    callBack={reset}/>
            </div>
        </div>
    );
};