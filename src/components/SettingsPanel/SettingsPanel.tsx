import React, {useEffect, useState} from 'react';
import style from './SettingsPanel.module.css';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {setMaxValueAC, setMinValueAC, setStatusAC} from "../../state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {StateType} from "../../App";

export const SettingsPanel: React.FC = () => {

    const counter = useSelector<AppRootStateType, StateType>(state => state)
    const dispatch = useDispatch();
    const {min, max} = counter;
    const [error, setError] = useState('');

    useEffect(() => {
        (min < 0)
            ? setError('Minimum must be >= 0')
            : (min >= max)
                ? setError('Maximum must be > Minimum')
                : setError('')
    }, [min, max, error])

    return (
        <div className={style.Set}>
            <div className={style.inputBlock}>
                <Input title={'Maximum'}
                       value={max}
                       callBack={(value: number) => dispatch(setMaxValueAC(value))}
                       type={'number'}
                       error={error}/>
            </div>

            <div className={style.inputBlock}>
                <Input
                    title={'Minimum'}
                    value={min}
                    callBack={(value: number) => dispatch(setMinValueAC(value))}
                    type={'number'}
                    error={error}/>
            </div>


            <div className={style.buttonBlock}>
                <Button name={error ? error : 'Save settings'}
                        callBack={() => dispatch(setStatusAC())}
                        disable={!!error}/>
            </div>
        </div>
    );
}
