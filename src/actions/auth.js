import { LOGIN_USER_FAIL, LOGIN_USER_SUCCESS } from '@constants/actions';
import { Actions } from 'react-native-router-flux';
import VKLogin from 'react-native-vkontakte-login';

const login = () => {
  return async (dispatch) => {
    try {
      const auth = await VKLogin.login([]);
      const token = auth.access_token;
      dispatch({ type: LOGIN_USER_SUCCESS, data: { token } });
      Actions.app();
    }
    catch (error){
      dispatch({ type: LOGIN_USER_FAIL });      
    }
  }
};

export default login;
