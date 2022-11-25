import { user_constants } from "../actions/constants"
import { occupiedCells } from "../actions/user_actions";

const initState = {
    error: null,
    message: '',
    loading: false,
    chart:[],
    reload:true,
    occupiedCells: []
}

export default (state = initState, action) => {
    switch(action.type){
        case user_constants.USER_REGISTER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case user_constants.USER_REGISTER_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;
        case user_constants.USER_REGISTER_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        case user_constants.FOOD_LIST_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case user_constants.FOOD_LIST_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;
        case user_constants.FOOD_LIST_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
         case user_constants.MAKE_CHART_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case user_constants.MAKE_CHART_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;
        case user_constants.MAKE_CHART_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        case user_constants.GET_CHART_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case user_constants.GET_CHART_SUCCESS:
            state = {
                ...state,
                loading: false,
                chart: action.payload.message
            }
            break;
        case user_constants.GET_CHART_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        case user_constants.SAVE_CHECKBOX_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case user_constants.SAVE_CHECKBOX_SUCCESS:
            state = {
                ...state,
                loading: false,
                progress: action.payload.message
            }
            break;
        case user_constants.SAVE_CHECKBOX_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        case "TARGET":
            state = {
                ...state,
                target: action.payload.target
            }
            break;
        case "OCCUPIED_CELLS":
            console.log(action.payload.occupiedCells.food)
            state.occupiedCells = state.occupiedCells.length!=0 ? state.occupiedCells.filter((item) => item.cell !== action.payload.occupiedCells.cell) : state.occupiedCells
            state = {
                   ...state,
                    occupiedCells:[...state.occupiedCells, {cell:action.payload.occupiedCells.cell, food:action.payload.occupiedCells.food}]
            }
            break;
    }

    return state;
}