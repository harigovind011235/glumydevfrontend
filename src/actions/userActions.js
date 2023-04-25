import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";
import axios from "axios";

export const userRegister = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const body = formData;

    const { data } = await axios.post("http://127.0.0.1:4000/user", body);

    if (data) {
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: USER_REGISTER_FAIL,
      });
    }
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      errormessage:error.message
    });
  }
};
