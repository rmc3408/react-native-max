import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { signUpEndpoint } from '../utils/api';

function SignupScreen({ navigation }) {
  const [ isAuthenticating, setIsAuthenticating ] = useState(false);

  async function createUser(data) {
    setIsAuthenticating(true);
    await signUpEndpoint(data);
    setIsAuthenticating(false);

    navigation.replace('Login');
  }

  if (isAuthenticating) return <LoadingOverlay message="Creating user, WAIT" />
  return <AuthContent onAuthenticate={createUser}/>;
}

export default SignupScreen;
