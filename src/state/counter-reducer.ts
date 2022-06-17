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

type ActionType = IncrementActionType | DecrementActionType
    | ResetActionType | SetMinValueActionType
    | SetMaxValueActionType;

const initialState = {
    count: Number(localStorage.getItem('countValue')) || 0,
    min: Number(localStorage.getItem('minValue')) || 0,
    max: Number(localStorage.getItem('maxValue')) || 0,
    status: Boolean.valueOf(localStorage.getItem('status')) || true
};

export const counterReducer = (state: number, action: ActionType): number => {
    switch (action.type) {
        case 'INCREMENT': {
            const currentCount = state + 1;
            localStorage.setItem('countValue', JSON.stringify(currentCount));
            return currentCount;
        }
        case 'DECREMENT': {
            const currentCount = state - 1;
            localStorage.setItem('countValue', JSON.stringify(currentCount));
            return currentCount;
        }
        case 'RESET': {
            const minValue = Number(localStorage.getItem('minValue'));
            localStorage.setItem('countValue', JSON.stringify(minValue));
            return minValue;
        }
        case 'SET_MIN_VALUE': {
            const minValue = Number(action.minValue);
            localStorage.setItem('minValue', JSON.stringify(minValue));
            return minValue;
        }
        case 'SET_MAX_VALUE': {
            const maxValue = Number(action.maxValue);
            localStorage.setItem('maxValue', JSON.stringify(maxValue));
            return maxValue;
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