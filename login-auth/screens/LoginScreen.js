import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthCtx } from '../store/context';
import { signInEndpoint } from '../utils/api';

function LoginScreen() {
  const ctx = useContext(AuthCtx);
  const [ isAuthenticating, setIsAuthenticating ] = useState(false);

  async function LoginUser(data) {
    setIsAuthenticating(true);
    try {
      const response = await signInEndpoint(data);
      ctx.saveToken(response.data.idToken);
      ctx.login();
    } catch (error) {
      Alert.alert('Invalid Login', 'check credentials')
      console.log(error);
      setIsAuthenticating(false);
    }
    
    
  }

  if (isAuthenticating) return <LoadingOverlay message="Logging you in..." />

  return <AuthContent isLogin onAuthenticate={LoginUser}/>;
}

export default LoginScreen;
