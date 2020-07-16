import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import img1 from '../../assets/01.png';
import img2 from '../../assets/02.png';
import img3 from '../../assets/03.png';
import img4 from '../../assets/04.png';
import img5 from '../../assets/05.png';
import img6 from '../../assets/06.png';
import img7 from '../../assets/07.png';

const items = [
  {
    key: String(Math.random()),
    img: img1,
    label: 'Recarga',
  },
  {
    key: String(Math.random()),
    img: img2,
    label: 'Uber',
  },
  {
    key: String(Math.random()),
    img: img3,
    label: 'Ônibus',
  },
  {
    key: String(Math.random()),
    img: img4,
    label: 'TV',
  },
  {
    key: String(Math.random()),
    img: img5,
    label: 'Doações',
  },
  {
    key: String(Math.random()),
    img: img6,
    label: 'Barras',
  },
  {
    key: String(Math.random()),
    img: img7,
    label: 'FAQ',
  },
];

export const Suggestions = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ alignItems: 'center', paddingLeft: 16 }}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        {items.map(item => (
          <TouchableOpacity key={item.key} style={styles.option}>
            <Image source={item.img} style={styles.img} />
            <Text style={styles.label}> {item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e222b',
    height: 130,
    flexDirection: 'row',
    alignItems: 'center',
  },
  option: {
    width: 80,
    alignItems: 'center',
  },
  img: {},
  label: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 8,
    fontSize: 14,
  },
});
