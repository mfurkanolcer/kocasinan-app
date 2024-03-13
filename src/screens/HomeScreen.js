import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image, Platform, Linking, StatusBar, Modal, Button } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'


import Categories from '../components/categories';
import SortCategories from '../components/sortCategories';

import Slider from '../components/slider';
import BottomNav from '../components/bottomNav';

export default function HomeScreen() {

  const [modalVisible, setModalVisible] = useState(false);

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#004799" // Yeni arka plan rengini ayarlayın
        barStyle="light-content" // Metin rengini beyaz yapın (koyu arka plan için)
      />
      <ScrollView showsVerticalScrollIndicator={false} className={"space-y-1"}>

        {/* avatar */}
        <View className="justify-between items-center" style={styles.logo}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/avatar.png')} style={{ height: wp(14), resizeMode: 'contain' }} />
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Image source={require('../../assets/images/baskan_2.png')} style={styles.image_2} />
              <View className="pb-5 ">

                <Text style={styles.text_modal}>Ahmet  ÇOLAKBAYRAKDAR Kimdir?</Text>
                <Text style={styles.text_modal_1}>1972 yılında Kayseri’de doğdu. İlk, orta ve lise eğitimini Kayseri’de tamamladı. 
                {"\n"}{"\n"} 1990 yılında Yıldız Teknik Üniversitesi  Mühendislik Fakültesi İnşaat  Mühendisliği  Bölümü’nü kazanan  Başkan Çolakbayrakdar  1994 yılında aynı fakülteden  “İnşaat  Mühendisi”  olarak mezun oldu. 1995 yılında vatani görevini kısa dönem olarak tamamladı.
            Kayseri’de kendi kurduğu firmasında iş hayatına başlayan Başkan Çolakbayrakdar, proje, konut inşaatı, endüstri  yapıları ve müşavirlik işleri yaptı.
            {"\n"}{"\n"}Gönüllü kuruluşlarda toplumsal hizmetlerde bulunan Başkan Çolakbayrakdar  2012’2015 yılları arasında MÜSİAD Kayseri Şube Başkanlığı görevinde bulundu.
            {"\n"}{"\n"}Uzun dönem Ak Parti İl Yönetim Kurulu üyeliği, İl Başkan Yardımcılığı, Seçim Koordinasyon Merkezi Başkanlığı  ve 3 dönem Kayseri Büyükşehir Belediye  meclis üyeliği yapan Başkan Çolakbayrakdar, evli ve iki çocuk babasıdır.</Text>
              </View>
              
              <Button title="Kapat" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.message}>


            <View className="space-x-1 ">

              <Text style={styles.text}>Kocasinan için varız, daha güzel bir gelecek için çalışıyoruz.</Text>
              <Text style={styles.text_1}>Ahmet ÇOLAKBAYRAKDAR</Text>
            </View>
            <Image source={require('../../assets/images/baskan.png')} style={styles.image} />

          </View>
        </TouchableOpacity>

        

        <View style={styles.page}>

          {/* categories */}
          <View className="mt-4" style={styles.kategoriler}>
            <Categories />
          </View>

          {/* slider */}
          <View className="mt-3">
            <Slider />
          </View>

          {/* sort categories */}
          <View className="mt-4">
            <SortCategories />
          </View>

        </View>

      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BottomNav />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004799',
  },
  page: {
    borderRadius: 35,
    backgroundColor: '#fff',
  },
  logo: {
    paddingTop: 5,
  },
  message: {
    paddingHorizontal: 15,
    marginHorizontal: 17,
    flexDirection: 'row', // Resim ve metni yatay düzende sırala
    alignItems: 'center', // Resim ve metni dikeyde ortala
    borderRadius: 15,
    shadowColor: 'rgba(0, 0, 0, 0.6)', // Gölge rengi
    shadowOffset: { width: 0, height: 2 }, // Gölge offset (genişlik ve yükseklik)
    shadowOpacity: 0.8, // Gölge opaklığı (0 ile 1 arasında)
    shadowRadius: 15, // Gölge yarıçapı
    elevation: 20, // Android için yedek gölge (isteğe bağlı)
  },
  image: {
    paddingRight: 5,
    marginBottom: 20,
    width: 70, // Resim genişliği
    height: 90, // Resim yüksekliği
  },
  image_2: {
    marginBottom: 18,
    width: 200, // Resim genişliği
    height: 180, // Resim yüksekliği

  },
  text_1: {
    maxWidth: 265,
    textAlign: 'right',
    paddingRight: 15, // Metin ile resim arasındaki boşluğu ayarla
    fontSize: 12, // Metin boyutu
    color: '#fff',
    fontWeight: '100',
  },
  text: {
    maxWidth: 265,
    textAlign: 'right',
    paddingTop: 5,
    paddingHorizontal: 15, // Metin ile resim arasındaki boşluğu ayarla
    fontSize: 14, // Metin boyutu
    color: '#fff',
    fontWeight: '400',
  },
  text_modal: {
    maxWidth: 265,
    textAlign: 'justify',
    paddingTop: 5,

    fontSize: 15, // Metin boyutu
    color: 'red',
    fontWeight: 'bold',
  },
  text_modal_1: {
    textAlign: 'justify',
    paddingTop: 5,
    fontSize: 13, // Metin boyutu

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    borderWidth: 0.4,
    shadowColor: 'rgba(0, 0, 0, 1)', // Gölge rengi
    shadowOffset: { width: 0, height: 2 }, // Gölge offset (genişlik ve yükseklik)
    shadowOpacity: 0.7, // Gölge opaklığı (0 ile 1 arasında)
    shadowRadius: 15, // Gölge yarıçapı
    elevation: 60, // Android için yedek gölge (isteğe bağlı)
    margin: 25,
    backgroundColor: 'white',
    borderRadius: 35,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
});