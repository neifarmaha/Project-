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
import axios from "axios";


export const RegistreE =
  (formData) => async (dispatch) => {
    dispatch({ type: REGISTER_USER_E });
    try {
      const { data } = await axios.post(
        '/Employer/registerEmployer',
        formData
      );
      localStorage.setItem('token',data.token)
      dispatch({
        type: REGISTER_USER_SUCCESS_E,
        payload: data,
      });
    } catch (error) {
      // error.response.data.forEach((err) =>
      //   alert(err.msg)
      // );
      dispatch({
        type: REGISTER_USER_FAIL_E,
        payload:error.response.data
      });
    }
  };


  export const Login_E =(formData)=>async (dispatch) => {
      dispatch({
          type:LOGIN_E
      })
      try {
          const {data}=await axios.post('/Employer/login',formData)
          console.log(data);
localStorage.setItem('token',data.token)
dispatch({
    type:LOGIN_SUCCESS_E,
    payload:data
})
      } catch (error) {
          error.response.data.forEach((err)=>alert(err.msg))
         dispatch({
             type:LOGIN_FAIL_E
         }) 
      }
  }
  
export const GetAuth=() =>async(dispatch) => {
    const config = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
    dispatch({
        type:GET_USER_E
    })
    try {
        const {data}= await axios.get('/auth/isAuth',config)
        console.log("getAuth",data);
        dispatch({
            type:GET_USER_SUCCESS_E,
            payload:data,
        })
    } catch (error) {
        dispatch({
            type:GET_USER_FAIL_E,
            payload:error.response.data
        })
    }
}


export const Logout_E=()=>async dispatch=>{
  localStorage.removeItem('token')
  dispatch({
    type:LOGOUT_E
  })
}


 

// import axios from 'axios'
// import { REGISTER_USER_E, REGISTER_USER_FAIL_E, REGISTER_USER_SUCCESS_E } from '../const/types'
// export const RegistreE = (newEmployer) => async (dispatch) => {
//   dispatch({
//       type:REGISTER_USER_E,
//   })
//   try {
//       const registreRes = await axios.post('/Employer/registerEmployer', newEmployer)
//       dispatch({
//           type:REGISTER_USER_SUCCESS_E,
//           payload:registreRes.data
//       })
//   } catch (error) {
//       dispatch({
//           type:REGISTER_USER_FAIL_E,
//           payload:error.response.data
//       })
//   }
// }