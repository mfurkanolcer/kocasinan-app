import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function Slider() {
  const images = [
    require('../../assets/images/slide1.jpg'),
    require('../../assets/images/slide2.jpg'),
    require('../../assets/images/slide3.jpg'),
    require('../../assets/images/slide4.jpg'),
  ];

  return (
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
