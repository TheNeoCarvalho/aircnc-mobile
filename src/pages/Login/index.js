import React, {useState, useEffect} from 'react';

import {Image, AsyncStorage, Platform} from 'react-native';

import {
  Container,
  Form,
  TextEmail,
  TextInput,
  Button,
  ButtonText,
} from './styles';

import logo from '../../assets/logo.png';

import api from '../../services/api';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('List');
      }
    });
  }, []);

  async function handleSubmit() {
    const response = await api.post('/sessions', {
      email,
    });

    const {_id} = response.data;

    await AsyncStorage.setItem('user', _id);
    await AsyncStorage.setItem('techs', techs);

    navigation.navigate('List');
  }

  return (
    <Container enabled={Platform.os === 'ios'} behavior="padding">
      <Image source={logo} />

      <Form>
        <TextEmail>SEU E-MAIL</TextEmail>
        <TextInput
          keyboardType="email-address"
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <TextEmail>TECNOLOGIAS</TextEmail>
        <TextInput
          placeholder="Tecnologias de interesse"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />

        <Button onPress={handleSubmit}>
          <ButtonText>Encontrar Spots</ButtonText>
        </Button>
      </Form>
    </Container>
  );
}
