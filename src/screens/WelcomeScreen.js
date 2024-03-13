import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet, Button } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';


export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
      <ImageBackground
        source={require('../../assets/images/welcome.png')} // Kullanmak istediğiniz resmin yolunu belirtin
        style={styles.background}
      >
        <View style={styles.container}>
        <View className="my-20">
        <TouchableOpacity>
          <Image source={require('../../assets/images/avatar.png')} style={{ height: wp(20), width: wp(80) }} />
        </TouchableOpacity>
      </View>
          <Text style={styles.title}>Hoş Geldiniz!</Text>
          <Text style={styles.description}>Yeni Kayseri Kocasinan’da kurulacak, Kocasinan Kayseri'nin yeni yüzü olacak.</Text>
          <Button
          
            title="Devam Et"
            onPress={() => navigation.navigate('Home')}
            color="#80BA26" // Buton rengi
          />
        </View>
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover', // Resmi ekranın boyutuna uyacak şekilde boyutlandırın
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Arka planın üzerine eklenen bileşenleri daha iyi okunur yapar
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: 'white', // Metin rengi
    },
    description: {
      fontSize: 16,
      marginBottom: 32,
      textAlign: 'center',
      color: 'white', // Metin rengi
    },
  });