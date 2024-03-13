import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function bottomNav() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View className="">
        <View style={styles.buton}>

          <TouchableOpacity className="items-center px-3" onPress={() => navigation.navigate('Home')}>
            <Ionicons name="home" size={26} color="white" />
            <Text className="text-white font-base" style={styles.text}>Ana Sayfa</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center px-3">
            <Ionicons name="images" size={26} color="white" />
            <Text className="text-white font-base" style={styles.text}>Galeri</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center px-3 pb-1" onPress={() => navigation.navigate('Home')}>
            <Image source={require('../../assets/images/avatar_3.png')} style={{ width: wp(17), height: hp(7) }} />
          </TouchableOpacity>

          <TouchableOpacity className="items-center px-3">
            <Ionicons name="document-text" size={26} color="white" />
            <Text className="text-white font-base" style={styles.text}>Dosyalar</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center px-3" onPress={() => navigation.navigate('Iletisim')}>
            <MaterialCommunityIcons name="phone-message" size={25} color="white" />
            <Text className="text-white font-base" style={styles.text}>İletişim</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
  },
  buton: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});