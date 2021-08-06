import {
    GET_USER_E,
    GET_USER_FAIL_E,
    GET_USER_SUCCESS_E,
    LOGIN_E,
    LOGIN_FAIL_E,
    LOGIN_SUCCESS_E,
    LOGOUT_E,
    REGISTER_USER_E,
    REGISTER_USER_FAIL_E,
    REGISTER_USER_SUCCESS_E,
  } from "../const/types";



  
  const initialState = {
    isLoading: false,
    user: null,
    isAuth: false,
    token: null,
    errors:null,
  };
  
  const UserReducer = (
    state = initialState,
    { type, payload }
  ) => {
    switch (type) {
      case REGISTER_USER_E:
      case LOGIN_E:
      case GET_USER_E:
        return { ...state, isLoading: true };
      case REGISTER_USER_SUCCESS_E:
        return {
          ...state,
          isLoading: false,
          isAuth: false,
          token: payload.token,
          user: payload.user,
        };
      case LOGIN_SUCCESS_E:
        return {
          ...state,
          isLoading: false,
          isAuth: true,
          token: payload.token,
          user: payload.user,
        };
      case GET_USER_SUCCESS_E:
        return {
          ...state,
          isLoading: false,
          isAuth: true,
          user: payload,
        };
        case LOGOUT_E:
        return {
          ...state,
          isLoading: false,
          isAuth: false,
          user: null,
          token: null,
        };
      case REGISTER_USER_FAIL_E:
      case LOGIN_FAIL_E:
      case GET_USER_FAIL_E:
        return {
          ...state,
          isLoading: false,
          isAuth: false,
          user: null,
          token: null,
          errors:payload,
        };
      default:
        return state;
    }
  };
  export default UserReducer;

// import { REGISTER_USER_E, REGISTER_USER_FAIL_E, REGISTER_USER_SUCCESS_E } from "../const/types";
// const init = {
//   loading: false,
//   usersE: null,
// };
// const userReducer = (state = init, { type, payload }) => {
//   switch (type) {
//     case REGISTER_USER_E:
//       return {
//         ...state,
//         loading: true,
//       };

//     case REGISTER_USER_SUCCESS_E:
//       return {
//         ...state,
//         loading: false,
//         usersE: payload,
//       };

//     case REGISTER_USER_FAIL_E:
//       return {
//         ...state,
//         loading: false,
//         errors: payload,
//       };
//       default:
//       return state;
//   }
// };

// export default userReducer;