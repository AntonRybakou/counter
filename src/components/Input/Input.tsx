import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './Input.module.css';

type InputPropsType = {
    value: number
    callBack: (value: number) => void
    type?: string
}

export const Input: React.FC<InputPropsType> = ({value, callBack, type}) => {

    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callBack(Number(e.currentTarget.value));
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === 'Enter') {
            callBack(Number(e.currentTarget.value));
        }
    }

    return <input value={error ? error : value}
                  onChange={onChangeHandler}
                  onKeyDown={onKeyDownHandler}
                  className={error ? style.error : style.default}
                  type={type}/>
}
