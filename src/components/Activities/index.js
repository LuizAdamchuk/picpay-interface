import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { View, Text, StyleSheet, Image } from 'react-native';

import avatar from '../../assets/avatar.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Activities = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Atividades</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image style={styles.cardImg} source={avatar} />
          <Text style={styles.cardDescription}>
            <Text style={styles.cardTextBold}>Você</Text> pagou a
            <Text style={styles.cardTextBold}> @johndoe</Text>
          </Text>
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.cardUsername}>Luiz Adamchuk</Text>
        </View>
        <View style={styles.cardFooter}>
          <View style={styles.cardFooterDetails}>
            <Text style={styles.cardFooterValues}>R$ 16,00</Text>
            <View style={styles.divider}></View>
            <Feather name="lock" size={16} color="#fff" />
            <Text style={styles.cardFooterDate}> 3 dias atrás</Text>
          </View>
          <View style={styles.cardFooterActions}>
            <TouchableOpacity style={styles.cardFooterActionsOptions}>
              <MaterialCommunityIcons
                name="comment-outline"
                size={16}
                color="#fff"
              />
              <Text style={styles.cardFooterActionsOptionsLabel}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardFooterActionsOptions}>
              <AntDesign name="hearto" size={16} color="#fff" />
              <Text style={styles.cardFooterActionsOptionsLabel}>0</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  header: {},
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#1e222b',
    borderRadius: 8,
    marginTop: 16,
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImg: {},
  cardDescription: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 16,
  },
  cardTextBold: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cardBody: {
    marginTop: 16,
  },
  cardUsername: {
    color: '#fff',
    fontSize: 16,
  },
  cardFooter: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardFooterDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardFooterValues: {
    color: '#f75175',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardFooterDate: {
    color: '#fff',
    marginLeft: 4,
  },
  divider: {
    width: 2,
    height: 16,
    backgroundColor: 'rgba(255,255,255,0.4)',
    marginHorizontal: 8,
  },
  cardFooterActions: {
    flexDirection: 'row',
  },
  cardFooterActionsOptions: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  cardFooterActionsOptionsLabel: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 4,
  },
});
