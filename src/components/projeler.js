import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { projeData } from '../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function Projeler() {
    const navigation = useNavigation();
    return (
        <View className="mx-4 justify-between flex-wrap">
            {
                projeData.map((item, index) => {
                    return (
                        <ProjelerCard navigation={navigation} item={item} key={index} />
                    )
                })
            }
        </View>
    )
}

const ProjelerCard = ({ item, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Destination', { ...item })}
            style={{ width: wp(92), height: wp(65) }}
            className="flex justify-end relative p-4 py-4 space-y-1 mb-5">
            <Image
                source={item.image}
                style={{ width: wp(92), height: wp(65), borderRadius: 35 }}
                className="absolute"
            />

            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.9)']}
                style={{ width: wp(92), height: hp(25), borderBottomLeftRadius: 35, borderBottomRightRadius: 35 }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                className="absolute bottom-0"
            />

            <TouchableOpacity style={{ backgroundColor: 'rgba(255,255,255,0.8)' }} className="flex flex-row absolute top-1 right-3 rounded-full items-center p-1 space-x-1">
                <Ionicons name="ios-calendar" size={16} color="black" />
                <Text style={{ fontSize: wp(3) }} className="font-light">{item.date}</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: wp(4.2) }} className="text-white font-semibold text-center">{item.title}</Text>
            <Text style={{ fontSize: wp(3.2) }} className="text-white font-light">{item.shortDescription}</Text>

        </TouchableOpacity>
    )
}