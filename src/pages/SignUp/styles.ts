import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { lighten } from 'polished';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.bgColor};
  padding: 0 30px;

  justify-content: center;
`;

export const FormWrapper = styled.View`
  background: ${(props) => props.theme.text};
  height: 400px;
  width: 100%;
  border-radius: 8px;

  align-items: center;

  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.bgColor};
`;

export const Input = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  height: 46px;
  margin-bottom: 16px;
  padding: 16px;
`;

export const LoginButton = styled(RectButton)`
  height: 46px;
  width: 100%;
  background: ${(props) => props.theme.quarternary};
  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;

export const LoginButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;

export const Separate = styled.View`
  flex-direction: row;
  align-items: center;

  margin: 8px 0;
`;

export const Divider = styled.View`
  flex: 1;
  height: 2px;
  background: ${(props) => lighten(0.2, props.theme.secondary)};

  margin: 0 5px;
`;

export const BackToSignInButton = styled.TouchableOpacity``;

export const BackToSignInButtonText = styled.Text`
  color: ${(props) => props.theme.secondary};
`;
