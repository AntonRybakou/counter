import {StateType} from "../AppWithRedux";

type IncrementActionType = {
    type: 'INCREMENT'
}

type DecrementActionType = {
    type: 'DECREMENT'
}

type ResetActionType = {
    type: 'RESET'
}

type SetMinValueActionType = {
    type: 'SET_MIN_VALUE'
    minValue: number
}

type SetMaxValueActionType = {
    type: 'SET_MAX_VALUE'
    maxValue: number
}

type SetStatusActionType = {
    type: 'SET_STATUS'
    isSettings: boolean
}

type ActionType = IncrementActionType | DecrementActionType
    | ResetActionType | SetMinValueActionType
    | SetMaxValueActionType | SetStatusActionType;

const initialState = {
    count: Number(localStorage.getItem('countValue')) ?? 0,
    min: Number(localStorage.getItem('minValue')) ?? 0,
    max: Number(localStorage.getItem('maxValue')) ?? 5,
    isSettings: localStorage.getItem('isSettings') === 'true' ?? true,
};

export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'INCREMENT': {
            localStorage.setItem('countValue', JSON.stringify(state.count + 1));
            return {
                ...state,
                count: state.count + 1
            }
        }
        case 'DECREMENT': {
            localStorage.setItem('countValue', JSON.stringify(state.count - 1));
            return {
                ...state,
                count: state.count - 1
            }
        }
        case 'RESET': {
            const minValue = Number(localStorage.getItem('minValue'));
            localStorage.setItem('countValue', JSON.stringify(minValue));
            return {
                ...state,
                count: minValue
            }
        }
        case 'SET_MIN_VALUE': {
            localStorage.setItem('minValue', JSON.stringify(action.minValue));
            const count = state.count < action.minValue ? action.minValue : state.count
            localStorage.setItem('countValue', JSON.stringify(count));
            return {
                ...state,
                min: action.minValue,
                count
            }
        }
        case 'SET_MAX_VALUE': {
            localStorage.setItem('maxValue', JSON.stringify(action.maxValue));
            const count = state.count > action.maxValue ? action.maxValue : state.count
            localStorage.setItem('countValue', JSON.stringify(count));
            return {
                ...state,
                max: action.maxValue,
                count
            }
        }
        case 'SET_STATUS': {
            localStorage.setItem('isSettings', JSON.stringify(action.isSettings));
            return {
                ...state,
                isSettings: action.isSettings
            }
        }
        default:
            return state;
    }
}

export const incrementAC = (): IncrementActionType => {
    return {type: 'INCREMENT'}
}

export const decrementAC = (): DecrementActionType => {
    return {type: 'DECREMENT'}
}

export const resetAC = (): ResetActionType => {
    return {type: 'RESET'}
}

export const setMinValueAC = (minValue: number): SetMinValueActionType => {
    return {type: 'SET_MIN_VALUE', minValue}
}

export const setMaxValueAC = (maxValue: number): SetMaxValueActionType => {
    return {type: 'SET_MAX_VALUE', maxValue}
}

export const setStatusAC = (isSettings: boolean): SetStatusActionType => {
    return {type: 'SET_STATUS', isSettings}
}
