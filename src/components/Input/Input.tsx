import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type InputPropsType = {
    value: number
    callBack: (value: number) => void
}

export const Input: React.FC<InputPropsType> = (props) => {
    let [value, setValue] = useState(props.value);
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.currentTarget.value));
        props.callBack(Number(e.currentTarget.value));
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === 'Enter') {
            setValue(Number(e.currentTarget.value));
            props.callBack(Number(e.currentTarget.value));
        }
    }

    return (
        <div>
            <input value={props.value}
                   onChange={onChangeHandler}
                   onKeyDown={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
        </div>
    );
}