import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList, ScrollView, StatusBar } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { Linking } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Ionicons } from '@expo/vector-icons';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { MaterialIcons } from '@expo/vector-icons';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'

import camiiData from '../camiiler.json';

const CamiilerScreen = () => {

  const navigation = useNavigation();

  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Konum izni reddedildi.');
      return;
    }

    let locationData = await Location.getCurrentPositionAsync({});
    setCurrentLocation(locationData);
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    // Haversine formülü kullanarak iki konum arasındaki mesafeyi hesaplama
    const R = 6371; // Dünya'nın yarıçapı (km)
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const calculatedDistance = R * c;

    return calculatedDistance.toFixed(2) + ' km';
  };


  const [options, setOptions] = useState(camiiData)

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
            style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
          >
            <ChevronLeftIcon size={wp(7)} strokeWidth={4} color="white" />
          </TouchableOpacity>
          <View className="item-center px-7">
            <Image source={require('../../assets/images/avatar.png')} style={{ height: wp(14), width: wp(55) }} />
          </View>
          <TouchableOpacity
            onPress={getLocation}
            className="p-2 rounded-full item-center "
            style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
          >
            <MaterialIcons name="my-location" size={26} color="white" />
          </TouchableOpacity>

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
            <Text className=" text-2xl text-white  font-semibold mt-2 text-center">Camiiler</Text>
            <Text className="  text-slate-200  font-light text-sm  mt-2 text-center">En yakın camii için sağ üstteki {"\n"} konum butonuna tıklayınız</Text>
          </View>
        </View>
      </View>


      <View className="" style={styles.page}>
        <FlatList style={styles.list} data={(filteredData)} keyExtractor={item => { return item.name }}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <Image style={[styles.image, styles.imageContent]} source={require('../../assets/images/camii.png')} />
                  <View className="pl-2">
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.adres}>{item.mahalle} / {item.ilce}</Text>
                  </View>

                  <View className="pl-1 " >
                    <TouchableOpacity style={styles.gpsIcon} onPress={() => { openMap(item) }}>
                      <Ionicons name="ios-location-sharp" size={27} color="#fff" />
                    </TouchableOpacity>
                    <Text className="text-center pt-1  text-xs">{currentLocation !== null ? calculateDistance(currentLocation.coords.latitude, currentLocation.coords.longitude, item.latitude, item.longitude) : 'null'}</Text>
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
    flex: 1,
    alignItems: 'stretch',
    marginTop: 5,
    paddingHorizontal: 10,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
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
})

export default CamiilerScreen;