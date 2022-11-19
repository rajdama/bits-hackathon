import { auth_constants } from "../actions/constants"

const initialState = {
   token: null,
   user: {
       firstName:"",
       lastName:"",
       email:"",
       picture:""
   },
   authenticate: false,
   authenticating: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case auth_constants.LOGIN_REQUEST:
            console.log(action)
            state = {
                ...state,  authenticating: true
            }
            break
        case auth_constants.LOGIN_SUCCESS:
            console.log(action)
            state= {
                ...state, user:  action.payload.user,
                                 token: action.payload.token,
                                 authenticate: true,
                                 authenticating: false
            }
            break
        case auth_constants.LOGOUT_REQUEST:
            console.log(action)
            state = {
                ...initialState,loading:true
            }
            break
    }

    return state
}