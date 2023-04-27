import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";


export const userRegisterReducer = (state = {},action) => {
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading:true};

        case USER_REGISTER_SUCCESS:
            return {loading:false,message:action.payload}
        
        case USER_REGISTER_FAIL:
            return {loading:false,error:action.errormessage}

        default:
            return state;

    }
}