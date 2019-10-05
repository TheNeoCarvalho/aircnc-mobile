import styled from 'styled-components';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TextEmail = styled.Text`
  font-weight: bold;
  color: #444;
  margin-top: 8px;
`;

export const Form = styled.View`
  align-self: stretch;
  padding: 0 30px;
  margin-top: 30px;
`;

export const TextInput = styled.TextInput`
  border: 1px solid #ddd;
  padding: 0 20px;
  font-size: 16px;
  color: #444;
  height: 44px;
  margin-bottom: 20px;
  margin-top: 5px;
  border-radius: 8px;
`;

export const Button = styled.TouchableOpacity`
  height: 42px;
  background-color: #f05a5b;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #ddd;
  font-weight: bold;
`;
