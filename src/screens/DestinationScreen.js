import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';


export default function DestinationScreen(props) {
    const item = props.route.params;
    const navigation = useNavigation();


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View className="bg-white">
            <StatusBar backgroundColor="#004799" barStyle="light-content" />

            <View className={"pb-5 bg-[#004799] rounded-[60px]"}>

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

                <View className="mx-4">
                    <View className="pt-3 mx-5">
                    <Text className="text-white text-[18px] font-semibold mt-2 text-center">{item.title}</Text>
                    </View>
                </View>
            </View>

                <View className="text-neutral-700 mb-2 items-center my-5">
                    <Image source={item.image} style={{ width: wp(90), height: hp(30), borderRadius: 25, }} />
                </View>
                <Text style={{ fontSize: wp(3.7) }} className="text-neutral-700 tracking-wide mb-2 mx-8 text-justify ">{item?.longDescription}</Text>
                </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
},

logo: {
    paddingBottom: 5,
    backgroundColor: '#004799',
},
})