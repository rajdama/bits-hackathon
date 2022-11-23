import { user_constants } from "./constants";
import axios from "../helpers/axios";

export const signup = (user) => {

    return async (dispatch) => {

        dispatch({ type: user_constants.USER_REGISTER_REQUEST });
        const res = await axios.post('/signup', {
            ...user
        });
        console.log(res)

        if(res.status === 201){
            const { message } = res.data;
            dispatch({
                type: user_constants.USER_REGISTER_SUCCESS,
                payload: {message}
            });
        }else{
            if(res.status === 400){
                dispatch({
                    type: user_constants.USER_REGISTER_FAILURE,
                    payload: { error: res.data.error }
                });
            }
        }
    }
}

export const foodList = (target) => {
    
    return async dispatch => {
        dispatch({
            type: user_constants.FOOD_LIST_REQUEST
        })
        const res = await axios.get(`/${target}`);
        if(res.status === 200){
            const  foodlist  = res.data;
            console.log(foodlist)
            dispatch({
                type: user_constants.FOOD_LIST_SUCCESS,
                payload: {message:foodlist}
            });
        }else{
            dispatch({
                type: user_constants.FOOD_LIST_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}

export const occupiedCells = (occupiedCells) => {
    console.log(occupiedCells)
    return async dispatch => {
        dispatch({
            type: "OCCUPIED_CELLS",
            payload: {occupiedCells}
        })
    }
}

export const makeChart = (chartData) => {
    console.log(chartData)
    return async (dispatch) => {
        console.log(chartData)
        const res = await axios.post('/makeChart', {chartData})
        dispatch({
            type: user_constants.MAKE_CHART_REQUEST,
        })
        console.log(res)
        if(res.status === 200){
            const  chart  = res.data;
            console.log(chart)
            dispatch({
                type: user_constants.MAKE_CHART_SUCCESS,
                payload: {message:chart}
            });
        }else{
            dispatch({
                type: user_constants.MAKE_CHART_FAILURE,
                payload: { error: res.data.error }
            });
        }
    }
}