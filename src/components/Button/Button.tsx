import React from 'react';
import style from './Button.module.css'

type ButtonPropsType = {
    name: string,
    callBack: () => void,
    disable?: boolean,
}

export const Button: React.FC<ButtonPropsType> = ({name, callBack, disable}) => {
    const onClickHandler = () => {
        callBack();
    }
    return (
        <button
            className={`${style.button} ${disable ? style.disable : style.button}`}
            disabled={disable}
            onClick={onClickHandler}>
            {name}
        </button>
    );
};
