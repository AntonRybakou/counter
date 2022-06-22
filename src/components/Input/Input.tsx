import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './Input.module.css';

type InputPropsType = {
    title: string
    value: number
    callBack: (value: number) => void
    error: string
    type: string
}

export const Input: React.FC<InputPropsType> = ({
                                                    title,
                                                    value,
                                                    callBack,
                                                    type,
                                                    error
                                                }) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callBack(Number(e.currentTarget.value));
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            callBack(Number(e.currentTarget.value));
        }
    }

    return (
        <>
            <span className={style.title}>{title}</span>
            <input value={value}
                   onChange={onChangeHandler}
                   onKeyDown={onKeyDownHandler}
                   className={`${style.default} ${error ? style.error : ''}`}
                   type={type}/>
        </>

    )

}
