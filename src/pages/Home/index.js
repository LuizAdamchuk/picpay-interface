import React from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Suggestions } from '../../components/Suggestions';
import { Activities } from '../../components/Activities';
import { Tips } from '../../components/Tips';
import { Banner } from '../../components/Banner';

export const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c86e"
          />
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceTitle}>Saldo</Text>
            <Text style={styles.balanceValue}>R$ 0,00</Text>
          </View>
          <AntDesign name="gift" size={30} color="#10c86e" />
        </View>
        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 24,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balanceContainer: {},
  balanceTitle: {
    color: 'rgba(255,2555,255,0.8)',
    fontSize: 14,
    textAlign: 'center',
  },
  balanceValue: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
