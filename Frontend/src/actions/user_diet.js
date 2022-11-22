// import { user_constants } from "./constants";

// export const foodList = (target) => {
//     return async dispatch => {
//         dispatch({
//             type: user_constants.FOOD_LIST_REQUEST
//         })
//         const res = await axios.get(`/${target}`);
//         if(res.status === 200){
//             const { foodlist } = res.data;
//             dispatch({
//                 type: user_constants.FOOD_LIST_SUCCESS,
//                 payload: {foodlist}
//             });
//         }else{
//             dispatch({
//                 type: user_constants.FOOD_LIST_FAILURE,
//                 payload: { error: res.data.error }
//             });
//         }
//     }
// }