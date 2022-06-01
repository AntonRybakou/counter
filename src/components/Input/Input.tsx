import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

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

    return <input value={value}
                  onChange={onChangeHandler}
                  onKeyDown={onKeyDownHandler}
                  className={error ? "error" : ""}
                  type={type}/>
}
