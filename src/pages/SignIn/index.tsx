import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  FormWrapper,
  Title,
  Input,
  LoginButton,
  LoginButtonText,
  Separate,
  Divider,
  DividerLabel,
  SocialButtons,
  GoogleButton,
  GoogleButtonText,
  FacebookButton,
  FacebookButtonText,
  SignUpButton,
  SignUpButtonText,
} from './styles';

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <FormWrapper>
        <Title>Login</Title>

        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Seu E-mail"
          keyboardType="email-address"
        />

        <Input placeholder="Sua senha" secureTextEntry />

        <LoginButton onPress={() => {}}>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginButton>

        <Separate>
          <DividerLabel>ou</DividerLabel>
        </Separate>

        <SocialButtons>
          <GoogleButton>
            <GoogleButtonText>Google</GoogleButtonText>
          </GoogleButton>
          <FacebookButton>
            <FacebookButtonText>Facebook</FacebookButtonText>
          </FacebookButton>
        </SocialButtons>

        <Separate style={{ marginTop: 16 }}>
          <Divider />
        </Separate>

        <SignUpButton onPress={() => navigate('SignUp')}>
          <SignUpButtonText>Se não tem conta, cadastre-se</SignUpButtonText>
        </SignUpButton>
      </FormWrapper>
    </Container>
  );
};

export default SignIn;
