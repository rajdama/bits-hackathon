import { user_constants } from "./constants";
import axios from "../helpers/axios";

export const signup = (user) => {

    return async (dispatch) => {

        dispatch({ type: user_constants.USER_REGISTER_REQUEST });
        const res = await axios.post('/signup', {
            ...user
        });

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