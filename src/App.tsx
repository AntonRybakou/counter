import React from 'react';
import './App.css';
import {SettingsPanel} from "./components/SettingsPanel/SettingsPanel";
import {CounterPanel} from "./components/CounterPanel/CounterPanel";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

export type StateType = {
    count: number;
    min: number;
    max: number;
    isSettings: boolean;
}

function App() {
    const counter = useSelector<AppRootStateType, StateType>(state => state)
    const {isSettings} = counter;

    return (
        <>
            {(isSettings)
                ? <SettingsPanel/>
                : <CounterPanel/>}
        </>
    );
}

export default App;
