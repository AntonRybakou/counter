import React from 'react';
import style from './Counter.module.css'

type CounterPropsType = {
    data: number,
    max: number,
    min: number,
}

export const Counter: React.FC<CounterPropsType> = ({
                                                        data,
                                                        max,
                                                        min
                                                    }) => {

    return <div
        className={`${style.count} ${(data >= max) ? style.error : (data <= min) ? style.disable : ''}`}>
        {data}
    </div>
};
