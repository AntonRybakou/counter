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
    const isSettings = useSelector<AppRootStateType, boolean>(state => state.isSettings)

    return (
        <>
            {(isSettings)
                ? <SettingsPanel/>
                : <CounterPanel/>}
        </>
    );
}

export default App;
