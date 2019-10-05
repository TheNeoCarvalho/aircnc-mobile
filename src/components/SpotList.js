import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import api from '../services/api';

export default function SpotList({tech}) {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    async function loadSpot() {
      const response = api.get('/spots', {
        params: {tech},
      });

      setSpots(response.data);
    }

    loadSpot();
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.title}>
        Empresas que usam <Text style={style.bold}>{tech}</Text>
      </Text>
      <FlatList
        style={style.list}
        data={spots}
        keyExtractor={spot => spot._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={style.listItem}>
            <Image style={style.thumb} source={{uri: item.thumbnail_url}} />
            <Text style={style.campany}>{item.company}</Text>
            <Text style={style.price}>
              {item.price ? `R$ ${item.price}/dia` : 'Gratuito'}
            </Text>
            <TouchableOpacity onPress={() => {}} tyle={style.btn}>
              <Text style={style.btnText}>Solicitar Reserva</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
  list: {
    paddingHorizontal: 20,
  },
  listItem: {
    marginRight: 15,
  },
  thumb: {
    width: 200,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  company: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#333',
    marginTop: 10,
  },
  price: {
    fontSize: 15,
    color: '#999',
    marginTop: 5,
  },
  btn: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
