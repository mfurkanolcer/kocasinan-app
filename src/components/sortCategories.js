import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { sortCategoryData } from '../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from '../theme';

import Haberler from '../components/news';
import Duyurular from '../components/duyurular';
import Projeler from '../components/projeler';
import Kurslar from '../components/kurslar';


export default function SortCategories() {
  const [activeSort, setActiveSort] = useState('Haberler');

  let content;

  if (activeSort == 'Haberler') { content = <Haberler /> } 
  else if (activeSort == 'Duyurular') { content = <Duyurular /> }
  else if (activeSort == 'Projeler') { content = <Projeler /> }
  else if (activeSort == 'Kurslar') { content = <Kurslar /> }
  else { }


  return (
    <View className="">
      <View className="flex-row justify-around items-center mx-4 bg-neutral-100 rounded-full p-2 space-x-3" style={styles.SortCategories}>
        {
          sortCategoryData.map((sort, index) => {
            let isActive = sort == activeSort;
            let activeButtonClass = isActive ? 'bg-[#004799] shadow' : '';

            return (
              <TouchableOpacity onPress={() => setActiveSort(sort)} key={index} className={`mx-auto p-2 rounded-full flex ${activeButtonClass}`}>
                <Text className="mx-auto font-semibold px-1 py-1" style={{ fontSize: wp(3.5), color: isActive ? theme.text : 'rgba(0,71,153,1)' }}>{sort}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
      <View className="pt-5">{content}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  SortCategories: {
    backgroundColor: '#f1f1f1',
  },
});