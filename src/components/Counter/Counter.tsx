import React from 'react';
import style from './Counter.module.css'

type CounterPropsType = {
    count: number,
    max: number,
    min: number,
}

export const Counter: React.FC<CounterPropsType> = ({
                                                        count,
                                                        max,
                                                        min
                                                    }) => {

    return <div
        className={`${style.count} ${(count >= max)
            ? style.error
            : (count <= min)
                ? style.disable
                : ''}`}>
        {count}
    </div>
};
