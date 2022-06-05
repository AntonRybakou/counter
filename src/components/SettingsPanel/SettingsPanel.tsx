import React, {useEffect, useState} from 'react';
import style from './SettingsPanel.module.css';
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";

type SettingsPanelPropsType = {
    min: number,
    max: number,
    resetMin: (value: number) => void,
    resetMax: (value: number) => void,
    setLocalStorage: () => void
}

export const SettingsPanel: React.FC<SettingsPanelPropsType> = ({
                                                                    min,
                                                                    max,
                                                                    resetMin,
                                                                    resetMax,
                                                                    setLocalStorage
                                                                }) => {

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
            <div className={style.maxBlock}>
                <span className={style.maxTitle}>Maximum</span>
                <Input value={max}
                       callBack={resetMax}
                       type={'number'}
                       error={error}/>
            </div>

            <div className={style.minBlock}>
                <span className={style.minTitle}>Minimum</span>
                <Input value={min}
                       callBack={resetMin}
                       type={'number'}
                       error={error}/>
            </div>


            <div className={style.buttonBlock}>
                <Button name={error ? error : 'Save settings'}
                        callBack={setLocalStorage}
                        disable={!!error}/>
            </div>
        </div>
    );
}
