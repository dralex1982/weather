import * as Actions from "./actions"

function weatherReducer(state = {
    weatherDetailed: '',
    inputValue: '',
    errorMessage: undefined
}, action) {
    switch (action.type) {
        case Actions.SET_WEATHER:
            return {...state, weatherDetailed: action.payload};
        case Actions.SET_UPDATE_INPUT:
            return {...state, inputValue: action.payload};
        case Actions.SET_ERROR_MESSAGE:
            return {...state, errorMessage: action.payload};
        default:
            return state;
    }
}

export default weatherReducer;