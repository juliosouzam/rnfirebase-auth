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
  BackToSignInButton,
  BackToSignInButtonText,
} from './styles';

const SignUp: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <FormWrapper>
        <Title>Cadastre-se</Title>

        <Input
          autoCapitalize="words"
          autoCorrect={false}
          placeholder="Seu Nome"
        />

        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Seu E-mail"
          keyboardType="email-address"
        />

        <Input placeholder="Sua senha" secureTextEntry />

        <LoginButton onPress={() => {}}>
          <LoginButtonText>Cadastrar</LoginButtonText>
        </LoginButton>

        <Separate style={{ marginTop: 16 }}>
          <Divider />
        </Separate>

        <BackToSignInButton onPress={goBack}>
          <BackToSignInButtonText>
            Se já tem conta, logue-se
          </BackToSignInButtonText>
        </BackToSignInButton>
      </FormWrapper>
    </Container>
  );
};

export default SignUp;
