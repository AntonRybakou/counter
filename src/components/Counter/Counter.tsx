import React from 'react';
import style from './Counter.module.css'

type CounterPropsType = {
    data: number,
    endCount: number,
}

export const Counter: React.FC<CounterPropsType> = ({data, endCount}) => {
    return <div className={(data === endCount) ? style.redBoard : style.board}>
        <div className={style.text}>
            {data}
        </div>
    </div>
};