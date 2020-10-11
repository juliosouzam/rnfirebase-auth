import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, Button} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {
  GoogleSignin,
  statusCodes,
  User,
} from '@react-native-community/google-signin';

import theme from './styles/theme';

GoogleSignin.configure({
  webClientId:
    '530827449108-bn2lq541cjnddma9401fhpt88qgjmfs0.apps.googleusercontent.com',
});

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {}, []);

  async function signIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
      // console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
      console.error(error);
    }
  }

  return (
    <ThemeProvider {...{theme}}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View>
        <Text>Olá</Text>
        <Button onPress={signIn} title="Click me" />
        <Text>{JSON.stringify(user)}</Text>
      </View>
    </ThemeProvider>
  );
};

export default App;
