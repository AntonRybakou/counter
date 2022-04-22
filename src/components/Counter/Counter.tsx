import React from 'react';
import style from './Counter.module.css'

type CounterPropsType = {
    data: number,
    endCount: number,
}

export const Counter: React.FC<CounterPropsType> = ({data, endCount}) => {
    return <div className={(data === endCount) ? style.red : style.count}>{data}</div>
};