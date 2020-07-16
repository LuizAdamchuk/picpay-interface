import React from 'react';

import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import img8 from '../../assets/08.png';
import img9 from '../../assets/09.png';
import img10 from '../../assets/10.png';
import img11 from '../../assets/11.png';
import img12 from '../../assets/12.png';

const items = [
  {
    key: String(Math.random()),
    img: img8,
    title: 'Pague suas contas sem sair de casa',
    color: '#172c4a',
  },
  {
    key: String(Math.random()),
    img: img9,
    title: 'Pague suas contas sem sair de casa',
    color: '#6a0159',
  },
  {
    key: String(Math.random()),
    img: img10,
    title: 'Pague suas contas sem sair de casa',
    color: '#4139c8',
  },
  {
    key: String(Math.random()),
    img: img11,
    title: 'Pague suas contas sem sair de casa',
    color: '#00ab4b',
  },
  {
    key: String(Math.random()),
    img: img12,
    title: 'Pague suas contas sem sair de casa',
    color: '#ba2f76',
  },
];

export const Tips = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 16 }}
    >
      <View style={styles.container}>
        {items.map(item => (
          <TouchableOpacity
            key={item.key}
            style={[styles.option, { backgroundColor: item.color }]}
          >
            <Text style={styles.optionTitle}>{item.title}</Text>
            <Image style={styles.optionImg} source={item.img} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flexDirection: 'row',
  },
  option: {
    width: 160,
    height: 200,
    borderRadius: 8,
    padding: 16,
    justifyContent: 'space-between',
    marginRight: 8,
  },
  optionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionImg: {
    alignSelf: 'center',
  },
});
