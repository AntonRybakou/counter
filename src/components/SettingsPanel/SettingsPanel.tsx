import React, {useCallback, useState} from 'react';
import style from './SettingsPanel.module.css';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {setMaxValueAC, setMinValueAC, setStatusAC} from "../../state/counter-reducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../state/store";

export const SettingsPanel: React.FC = React.memo(() => {
    const counter = useAppSelector(state => state);
    const {min, max, isSettings} = counter;
    const dispatch = useDispatch();

    const [error, setError] = useState('');

    const setStatus = useCallback(() => {
        localStorage.setItem('isSettings', JSON.stringify(!isSettings));
        dispatch(setStatusAC());
    }, [isSettings, dispatch]);

    const setMinValue = useCallback((value: number) => {
        (value < 0)
            ? setError('MIN < 0')
            : (value >= max)
                ? setError('MIN >= MAX')
                : error.length > 0 && setError('')

        localStorage.setItem('minValue', JSON.stringify(value));
        dispatch(setMinValueAC(value));
    }, [error.length, max, dispatch]);

    const setMaxValue = useCallback((value: number) => {
        (value < 0)
            ? setError('MAX < 0')
            : (value <= min)
                ? setError('MAX <= MIN')
                : error.length > 0 && setError('')

        localStorage.setItem('maxValue', JSON.stringify(value));
        dispatch(setMaxValueAC(value));
    }, [error.length, min, dispatch]);

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
