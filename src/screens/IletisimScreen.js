import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const IletisimScreen = () => {

  const navigation = useNavigation();

  const openURL = () => {
    Linking.openURL('https://kocasinan.bel.tr/cozummerkezi');
  };

  return (


    <View style={styles.container}>

        <StatusBar backgroundColor="#004799" barStyle="light-content" />

      <View className={"flex-1 space-y-3 "}>

      
        <View className="flex-row items-center  pt-2" style={styles.logo}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2 rounded-full ml-4 w-11"
            style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
          >
            <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
          </TouchableOpacity>
          <View className="item-center px-7">
            <Image source={require('../../assets/images/avatar.png')} style={{ height: wp(14), width: wp(55) }} />
          </View>

        </View>
        <View className="mx-8 mb-4 mt-2">
            <Text className=" text-xl text-white  font-semibold mt-2 text-center">İletişim</Text>
            </View>
        
        <View style={styles.page}>
        <View className="mb-4  pt-10 items-center">
        <Image source={require('../../assets/images/iletisim.png')} style={{ height: hp(16), width: wp(41) }} />
        <Text className="pt-2 text-2xl  font-semibold mt-2 text-center">Bize Ulaşın!</Text>
        <Text className="mx-8 pt-2 text-base  font-light mt-2 text-left">Her Türlü, Görüş, İstek ve Şikayetleriniz için Çözüm Merkezimiz üzerinden bize ulaşın.</Text>
        <TouchableOpacity onPress={()=> openURL()} style={{backgroundColor: '#004799', height: wp(13), width: wp(40)}} className="mt-6 justify-center items-center rounded-full">
                <Text className="text-white font-bold" style={{fontSize: wp(4.5)}}>Çözüm Merkezi</Text>
            </TouchableOpacity>
            <Text className="mx-10 pt-8 text-base  font-light mt-2 text-center">Gevhernesibe Mah. Tekin Sok. No:10 Kocasinan / KAYSERİ</Text>
            <Text className="mx-5 text-base  font-bold mt-2 text-left">0352 222 70 00</Text>
            <Text className="mx-5 pt-5 text-base  font-light mt-2 text-left">Pazartesi - Cuma: 08:30 - 17:30</Text>
            <Text className="mx-5 pt-2 text-base  font-light mt-2 text-left">info@kocasinan.bel.tr</Text>
            </View>
        
    
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004799',
  },

  page: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },

  logo: {
    paddingBottom: 5,
    backgroundColor: '#004799',
  },
})

export default IletisimScreen;