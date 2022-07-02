import {StateType} from "../App";

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
    type: 'CHANGE_STATUS'
}

type ActionType = IncrementActionType | DecrementActionType
    | ResetActionType | SetMinValueActionType
    | SetMaxValueActionType | SetStatusActionType;

const initialState = {
    count: Number(localStorage.getItem('countValue')) || 0,
    min: Number(localStorage.getItem('minValue')) || 0,
    max: Number(localStorage.getItem('maxValue')) || 5,
    isSettings: localStorage.getItem('isSettings') === 'true'
};

export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case 'DECREMENT': {
            return {
                ...state,
                count: state.count - 1
            }
        }
        case 'RESET': {
            return {
                ...state,
                count: state.min
            }
        }
        case 'SET_MIN_VALUE': {
            return {
                ...state,
                min: action.minValue,
            }
        }
        case 'SET_MAX_VALUE': {
            return {
                ...state,
                max: action.maxValue,
            }
        }
        case 'CHANGE_STATUS': {
            return {
                ...state,
                isSettings: !state.isSettings,
                count: state.isSettings && state.count < state.min
                    ? state.min
                    : state.count > state.max
                        ? state.max
                        : state.count
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

export const setStatusAC = (): SetStatusActionType => {
    return {type: 'CHANGE_STATUS'}
}
