import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  AsyncStorage,
  StyleSheet,
  ScrollView,
} from 'react-native';
import SpotList from '../../components/SpotList';
import {Container} from './styles';

import logo from '../../assets/logo.png';

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storageTechs => {
      const techsArray = storageTechs.split(',').map(tech => tech.trim());
      setTechs(techsArray);
    });
  }, []);

  return (
    <Container>
      <Image source={logo} style={style.logo} />
      {techs.map(tech => (
        <ScrollView>
          <SpotList key={tech} tech={tech} />
        </ScrollView>
      ))}
    </Container>
  );
}

const style = StyleSheet.create({
  logo: {
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
});
