import React, {useCallback, useEffect, useState} from 'react';
import style from './SettingsPanel.module.css';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {setMaxValueAC, setMinValueAC, setStatusAC} from "../../state/counter-reducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../state/store";

export const SettingsPanel: React.FC = React.memo(() => {
    const counter = useAppSelector(state => state);
    const {count, min, max, isSettings} = counter;
    const dispatch = useDispatch();

    const [error, setError] = useState('');

    const setStatus = useCallback(() => {
        localStorage.setItem('isSettings', JSON.stringify(!isSettings));
        dispatch(setStatusAC());
    }, [isSettings, dispatch]);

    const setMinValue = useCallback((value: number) => {
        localStorage.setItem('minValue', JSON.stringify(value));
        const localCount = count < value ? value : count;
        localStorage.setItem('countValue', JSON.stringify(localCount));
        dispatch(setMinValueAC(value));
    }, [count, dispatch]);

    const setMaxValue = useCallback((value: number) => {
        localStorage.setItem('maxValue', JSON.stringify(value));
        const localCount = count > value ? value : count;
        localStorage.setItem('countValue', JSON.stringify(localCount));
        dispatch(setMaxValueAC(value));
    }, [count, dispatch]);


    useEffect(() => {
        (min < 0)
            ? setError('Minimum < 0')
            : (min >= max)
                ? setError('Maximum <= Minimum')
                : setError('')
    }, [min, max, error])

    return (
        <div className={style.Set}>
            <div className={style.inputBlock}>
                <Input title={'Maximum'}
                       value={max}
                       callBack={setMaxValue}
                       type={'number'}
                       error={error}/>
            </div>

            <div className={style.inputBlock}>
                <Input
                    title={'Minimum'}
                    value={min}
                    callBack={setMinValue}
                    type={'number'}
                    error={error}/>
            </div>

            <div className={style.buttonBlock}>
                <Button name={error ? error : 'Save settings'}
                        callBack={setStatus}
                        disable={!!error}/>
            </div>
        </div>
    );
});
