import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, StatusBar, ScrollView } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import eczaneData from '../eczane.json';

const EczaneScreen = () => {

  const navigation = useNavigation();

  const [options, setOptions] = useState(eczaneData)

  const today = new Date();
  const daysOfWeek = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
  const currentDay = daysOfWeek[today.getDay()];
  const currentDay_2 = today.toLocaleDateString('tr-TR', { weekday: 'long' });

  const filteredEczane = options.filter((item) => item.day === currentDay);


  const [searchText, setSearchText] = useState('');

  const turkishCharacterRegex = keyword => keyword
    .replace(/[ıİiI]/g, '[ıİiI]')
    .replace(/[şŞsS]/g, '[şŞsS]')
    .replace(/[çÇcC]/g, '[çÇcC]')
    .replace(/[ğĞgG]/g, '[ğĞgG]')
    .replace(/[öÖoO]/g, '[öÖoO]')
    .replace(/[üÜuU]/g, '[üÜuU]');

  const filteredData = options.filter((item) =>
  (
    turkishCharacterRegex(item.name).toLowerCase().includes(turkishCharacterRegex(searchText).toLowerCase()) ||
    turkishCharacterRegex(item.mahalle).toLowerCase().includes(turkishCharacterRegex(searchText).toLowerCase()) ||
    turkishCharacterRegex(item.ilce).toLowerCase().includes(turkishCharacterRegex(searchText).toLowerCase())
  )
  );

  const openMap = item => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${item.latitude},${item.longitude}`;
    Linking.openURL(url);
  };




  return (


    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

<StatusBar backgroundColor="#004799" barStyle="light-content" />

<View className={"flex-1 space-y-3 pb-2 bg-[#004799] rounded-[60px]"}>

        {/* avatar */}
        <View className="flex-row items-center  pt-2" style={styles.logo}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2 rounded-full ml-4 w-11"
            style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}
          >
            <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
          </TouchableOpacity>
          <View className="item-center px-7">
            <Image source={require('../../assets/images/avatar.png')} style={{ height: hp(6), width: wp(55) }} />
          </View>


        </View>

        <View className="mx-8 mb-1">
          <View style={styles.tarih} className="  mx-auto px-2">
            <Ionicons name="ios-calendar" size={24} color="black" />
            <Text className=" text-[18px] text-black  font-small text-md  mx-3 text-center">{currentDay_2}</Text>
          </View>
          <Text className=" text-xl text-white  font-small text-md  mt-5 text-center">Nöbetçi Eczaneler</Text>
        </View>
        </View>


        <View style={styles.page}>
          <FlatList style={styles.list}
            data={(filteredEczane)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <View style={styles.cardContent}>
                    <Image style={[styles.image, styles.imageContent]} source={require('../../assets/images/eczane_1.png')} />

                    <View className="pl-2">
                      <View className="pl-1 flex-row items-center">
                      <Feather name="clock" size={22} color="black" />
                        <Text className="ml-1 text-sm" >{item.sure}</Text>
                      </View>
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.adres}>{item.mahalle} / {item.ilce}</Text>
                      <Text style={styles.adres}>Tel: {item.phone}</Text>
                    </View>

                    <View className="pl-1 " >
                      <TouchableOpacity style={styles.gpsIcon} onPress={() => { openMap(item) }}>
                        <Ionicons name="ios-location-sharp" size={27} color="#fff" />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.phoneIcon} onPress={() => { Linking.openURL(`tel:${item.phone}`) }}>
                      <FontAwesome name="phone" size={23} color="white" />
                      </TouchableOpacity>

                    </View>

                  </View>

                </View>
              )
            }}
          />

        </View>

        
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeff3',
  },

  tarih: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 5,
    borderRadius: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },

  page: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 30,
    paddingTop: 10,
  },


  list: {
    heightPercentageToDP: '%95',

  },

  logo: {
    paddingBottom: 5,
    backgroundColor: '#004799',
  },

  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 7,
    paddingVertical: 10,
    marginHorizontal: 7,
    marginTop: 2,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 25,
  },

  card_2: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 7,
    paddingVertical: 10,
    marginHorizontal: 7,
    marginTop: 2,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 25,
  },

  cardContent: {
    borderRadius: 25,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },

  imageContent: {
    marginTop: 10,
    marginLeft: 7,
  },

  image: {
    width: 47,
    height: 47,
    borderRadius: 10,
  },

  name: {
    width: 200,
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 5,
    marginTop: 5,
    backgroundColor: '#fff',
  },

  adres: {
    width: 200,
    paddingTop: 5,
    fontSize: 12,
    fontWeight: '300',
    marginLeft: 5,
    backgroundColor: '#FFFFFF',
  },

  aciklama: {
    paddingTop: 5,
    fontSize: 12,
    fontWeight: '200',
  },

  gpsIcon: {
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 35,
    borderRadius: 20,
    borderWidth: 0.2,
    borderColor: '#eee',
    borderBottomWidth: 9,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: '#f44336',
    borderColor: '#c4211d',
    shadowColor: '#1c5da6',
  },

 phoneIcon: {
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 35,
    borderRadius: 20,
    borderWidth: 0.2,
    borderColor: '#eee',
    borderBottomWidth: 9,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: '#4CAF50',
    borderColor: '#388E3C',
    shadowColor: '#1E88E5',
  },

  table: {
    paddingBottom: 15,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    backgroundColor: '#951B81',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderWidth: 0.5,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
})

export default EczaneScreen;