import React, { useState, useCallback } from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Switch, Image } from 'react-native';

import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

import creditCardImg from '../../assets/credit-card.png';

export const Wallet = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  const handleIsVisible = useCallback(() => {
    setIsVisible(prevState => !prevState);
  }, [isVisible]);

  const handleToggleUseBalance = useCallback(() => {
    setUseBalance(prevState => !prevState);
  }, []);

  return (
    <>
      <LinearGradient
        colors={useBalance ? ['#52e78c', '#1ab563'] : ['#D3D3D3', '#868686']}
        style={styles.header}
      >
        <SafeAreaView style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Saldo PicPay</Text>
          <View style={styles.balanceContainer}>
            <Text style={styles.textBalance}>
              R${' '}
              <Text style={styles.textBalanceBold}>
                {isVisible ? '0,00' : '----'}
              </Text>
            </Text>
            <TouchableOpacity
              onPress={handleIsVisible}
              style={styles.balanceIcon}
            >
              <Feather
                name={isVisible ? 'eye' : 'eye-off'}
                size={24}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.textInfo}>
            Seu saldo está rendendo 100% do CDI
          </Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton}>
              <MaterialCommunityIcons name="cash" size={28} color="#fff" />
              <Text style={styles.actionLabel}>Adicionar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <MaterialCommunityIcons
                name="bank-outline"
                size={24}
                color="#fff"
              />
              <Text style={styles.actionLabel}>Retirar</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
      <SafeAreaView style={styles.container}>
        <View style={styles.useBalance}>
          <Text style={styles.useBalanceTitle}>Usar saldo ao pagar</Text>
          <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
        </View>
        <ScrollView>
          <View style={styles.paymentsMethods}>
            <Text style={styles.paymentsMethodsText}>formas de pagamento</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.cardDetails}>
              <Text style={styles.cardTitle}>
                Cadastre seu cartão de crédito
              </Text>
              <Text style={styles.cardInfo}>
                Cadastre um cartão de crédtio para poder fazer pagamentos mesmo
                qando nao tiver saldo no seu PicPay.
              </Text>
              <TouchableOpacity style={styles.buttonAddCreadticard}>
                <Feather name="plus-circle" size={24} color="#52e78c" />
                <Text style={styles.buttonAddCreadticardText}>
                  Adicionar cartão de crédito
                </Text>
              </TouchableOpacity>
            </View>
            <Image
              source={creditCardImg}
              resizeMode="contain"
              style={styles.ImgCreditCard}
            />
          </View>
          <TouchableOpacity style={styles.usePromo}>
            <MaterialCommunityIcons
              name="ticket-outline"
              size={24}
              color="#52e78c"
            />
            <Text style={styles.usePromoText}>Usar cupom promocional</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  header: {
    height: 256,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  balanceContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBalance: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '200',
  },
  textBalanceBold: {
    fontWeight: 'bold',
  },
  balanceIcon: {
    marginLeft: 16,
  },
  textInfo: {
    color: '#FFF',
  },
  actions: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    marginLeft: 8,
    borderRadius: 32,
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  actionLabel: {
    color: '#fff',
    marginLeft: 12,
  },
  useBalance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#1c1c1e',
  },
  useBalanceTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  paymentsMethods: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  paymentsMethodsText: {
    color: '#8e8e93',
    textTransform: 'uppercase',
  },
  card: {
    borderRadius: 8,
    height: 192,
    backgroundColor: '#1e232a',
    padding: 16,
    marginHorizontal: 16,
    marginTop: 8,
    flexDirection: 'row',
  },
  cardText: {
    color: '#fff',
  },
  cardDetails: {
    flex: 1,
    marginRight: 16,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardInfo: {
    color: 'rgba(255,255,255,0.6)',
    marginTop: 16,
  },
  ImgCreditCard: {
    width: 60,
    height: 60,
  },
  buttonAddCreadticard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonAddCreadticardText: {
    color: '#52e78c',
    marginLeft: 12,
  },
  usePromo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  usePromoText: {
    color: '#52e78c',
    marginLeft: 8,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
