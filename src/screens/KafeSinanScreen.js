import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList, StatusBar, ScrollView } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';

import kafeSinanData from '../kafeSinan.json';

const KafeSinanScreen = () => {

  const navigation = useNavigation();


  const [options, setOptions] = useState(kafeSinanData)

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

  const images = [
    require('../../assets/images/slide1_1.jpg'),
    require('../../assets/images/slide1_2.jpg'),
    require('../../assets/images/slide1_3.jpg'),
    require('../../assets/images/slide1_4.jpg'),
  ];


  return (


    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

<StatusBar backgroundColor="#004799" barStyle="light-content" />

<View className={"flex-1 space-y-3 pb-2 bg-[#004799] rounded-[60px]"}>

      <View className={"flex-1 space-y-3"}>

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
            <Image source={require('../../assets/images/kafesinan_2.png')} style={{ height: wp(16), width: wp(57) }} />
          </View>
          </View>
          </View>

        {/* search bar */}
        <View className="mx-8 mb-1">
          
          <View className="flex-row items-center bg-neutral-100 rounded-full p-3 space-x-5 pl-5" style={{ height: wp(12.5) }}>
            <MagnifyingGlassIcon size={25} strokeWidth={4} color="#004799" />
            <TextInput
              placeholder='Arama Yap'
              placeholderTextColor={'gray'}
              className="flex-1 text-base  pl-1 tracking-wider"
              onChangeText={(text) => setSearchText(text)}
              value={searchText}

            />
          </View>
          <View className=" pt-3  mx-auto ">
            <Text className="text-white  text-[17px]  mt-2 text-center">Kayseri’nin Yöresel Lezzet Durağı</Text>
          </View>
        </View>
        </View>


        <View className="mx-4 mt-3 flex-row justify-between flex-wrap items-center">
        <TouchableOpacity
            style={{width: wp(44), height: wp(44)}}
            className="flex justify-end relative p-4 py-6 space-y-2 mb-5">
                <Image
                    source={require('../../assets/images/kafesinan4.jpg')}
                    style={{width: wp(44), height: wp(44), borderRadius: 35}}
                    className="absolute"
                />

        </TouchableOpacity>

        <TouchableOpacity
            style={{width: wp(44), height: wp(44)}}
            className="flex justify-end relative p-4 py-6 space-y-2 mb-5">
                <Image
                    source={require('../../assets/images/kafesinan1.jpg')}
                    style={{width: wp(44), height: wp(44), borderRadius: 35}}
                    className="absolute"
                />

        </TouchableOpacity>
        </View>

        <View>
        <Swiper style={styles.wrapper}

        showsButtons={false}
        loop
        autoplay
        autoplayTimeout={3}
        showsPagination
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </Swiper>
      </View>

      <View className="mx-4 mt-3 flex-row justify-between flex-wrap items-center">
        <TouchableOpacity
            style={{width: wp(44), height: wp(44)}}
            className="flex justify-end relative p-4 py-6 space-y-2 mb-5">
                <Image
                    source={require('../../assets/images/kafesinan2.jpg')}
                    style={{width: wp(44), height: wp(44), borderRadius: 35}}
                    className="absolute"
                />

        </TouchableOpacity>

        <TouchableOpacity
            style={{width: wp(44), height: wp(44)}}
            className="flex justify-end relative p-4 py-6 space-y-2 mb-5">
                <Image
                    source={require('../../assets/images/kafesinan3.jpg')}
                    style={{width: wp(44), height: wp(44), borderRadius: 35}}
                    className="absolute"
                />

        </TouchableOpacity>
        </View>
        
        <View style={styles.page}>
          <FlatList style={styles.list} data={(filteredData)} keyExtractor={item => { return item.id }}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <View style={styles.cardContent}>
                    <Image 
                    style={[styles.image, styles.imageContent]} 
                    source={require('../../assets/images/kafesinan.png')} 
                    style={{width: wp(15), height: wp(15), borderRadius: 15}}/>
                    <View className="pl-2">
                      <Text style={styles.name}>{item.name}</Text>
                      <Text style={styles.adres}>{item.mahalle} / {item.ilce}</Text>
                    </View>

                    <View className="pl-1 " >
                      <TouchableOpacity style={styles.gpsIcon} onPress={() => { openMap(item) }}>
                        <Ionicons name="ios-location-sharp" size={27} color="#fff" />
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
    flex: 1,
    backgroundColor: '#fff',
  },

  page: {
    alignItems: 'stretch',
    marginTop: 5,
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
    paddingTop: 5,
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
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 25,
  },

  cardContent: {
    borderRadius: 25,
    marginLeft: 3,
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
  wrapper: {
    height: 225,
  },
  dotStyle: {
    marginBottom: -55,
    height: 2.5,
    width: 20,
  },
  activeDotStyle: {
    backgroundColor: 'red',
    marginBottom: -55,
    height: 2.5,
    width: 20,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '95%',
    height: '95%',
  },
});

export default KafeSinanScreen;