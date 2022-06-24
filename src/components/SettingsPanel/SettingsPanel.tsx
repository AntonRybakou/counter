import React, {useCallback, useState} from 'react';
import style from './SettingsPanel.module.css';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {setMaxValueAC, setMinValueAC, setStatusAC} from "../../state/counter-reducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../state/store";

export const SettingsPanel: React.FC = React.memo(() => {
    console.log('settings')
    const counter = useAppSelector(state => state);
    const {count, min, max, isSettings} = counter;
    const dispatch = useDispatch();

    const [error, setError] = useState('');

    const setStatus = useCallback(() => {
        localStorage.setItem('isSettings', JSON.stringify(!isSettings));
        dispatch(setStatusAC());
        const localCount = count < min
            ? min
            : count > max
                ? max
                : count
        localStorage.setItem('countValue', JSON.stringify(localCount))
    }, [count, min, max, isSettings, dispatch]);

    const setMinValue = useCallback((value: number) => {
        (value < 0)
            ? setError('Minimum')
            : (value >= max)
                ? setError('Minimum >= Maximum')
                : error.length > 0 && setError('')

        localStorage.setItem('minValue', JSON.stringify(value));
        dispatch(setMinValueAC(value));
    }, [error.length, max, dispatch]);

    const setMaxValue = useCallback((value: number) => {
        (value < 0)
            ? setError('Maximum < 0')
            : (value <= min)
                ? setError('Maximum <= Minimum')
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
