import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

import img13 from '../../assets/13.png';

export const Banner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>Cobre um amigo</Text>
        <Text style={styles.description}>
          Mantenha suas parcerias em dia, use o PicPay para fazer suas
          cobranças.
        </Text>
      </View>
      <Image source={img13} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6882bb',
    marginHorizontal: 16,
    marginVertical: 24,
    padding: 16,
    borderRadius: 8,
    height: 128,
    flexDirection: 'row',
    alignItems: 'center',
  },
  details: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: '#fff',
    fontSize: 14,
    marginTop: 16,
  },
});
