import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


export default function Categories() {

  const navigation = useNavigation();

  return (
    <View className="space-y-5">
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 10 }}
        className="space-x-3"
        showsHorizontalScrollIndicator={false}
        >

        <TouchableOpacity onPress={() => navigation.navigate('Camii')} className="flex items-center ">
          <Image source={require('../../assets/images/camii.png')} className="rounded-3xl " style={{ width: wp(17), height: wp(17) }} />
          <Text className="text-neutral-700 font-medium" style={{ fontSize: wp(3) }}>Camii</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Eczane')} className="flex items-center ">
          <Image source={require('../../assets/images/eczane_1.png')} className="rounded-3xl" style={{ width: wp(17), height: wp(17) }} />
          <Text className="text-neutral-700 font-medium" style={{ fontSize: wp(3) }}>Nöbetçi Eczane</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Otopark')} className="flex items-center ">
          <Image source={require('../../assets/images/otopark.png')} className="rounded-3xl" style={{ width: wp(17), height: wp(17) }} />
          <Text className="text-neutral-700 font-medium" style={{ fontSize: wp(3) }}>Otopark</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Taksi')} className="flex items-center ">
          <Image source={require('../../assets/images/taksi.png')} className="rounded-3xl" style={{ width: wp(17), height: wp(17) }} />
          <Text className="text-neutral-700 font-medium" style={{ fontSize: wp(3) }}>Taksi</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Pazar')} className="flex items-center ">
          <Image source={require('../../assets/images/pazaryeri.png')} className="rounded-3xl" style={{ width: wp(17), height: wp(17) }} />
          <Text className="text-neutral-700 font-medium" style={{ fontSize: wp(3) }}>Semt Pazarları</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('KafeSinan')} className="flex items-center ">
          <Image source={require('../../assets/images/kafesinan.png')} className="rounded-3xl" style={{ width: wp(17), height: wp(17) }} />
          <Text className="text-neutral-700 font-medium" style={{ fontSize: wp(3) }}>Kafe Sinan</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  )
}
