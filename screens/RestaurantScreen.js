import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Icon } from '@rneui/themed';
import colors from '../constants/colors';

const RestaurantScreen = () => {
    const navigation = useNavigation();

    const {
        params: {
            id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
        }
    } = useRoute();

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false
        })
    }, [])
  return (
    <ScrollView>
        <View className="relative">
            <Image
                source={{uri: imgUrl}}
                className="w-full h-56 bg-gray-300 p-4"
            />

            <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-5 bg-gray-100 rounded-full p-1 px-2">
                <Icon type='octicon'  name='arrow-left'  color={colors.colorPrimary} />
            </TouchableOpacity>
        </View>

        <View className="bg-white">
            <View className="px-4 pt-4">
                <Text className="text-3xl font-bold">{title}</Text>
                <View className="flex-row space-x-2 my-1">
                    <View className="flex-row items-center space-x-1">
                        <Icon name='star' type='antdesign' color="green" style={{opacity: 0.5}} />
                        <Text className="text-xs text-gray-500">
                            <Text className="text-green-500">{rating}</Text>  &bull; {genre}
                        </Text>
                    </View>

                    <View className="flex-row items-center space-x-1">
                        <Icon color="gray" name="location-pin" type='simple-line-icon' style={{opacity: 0.4}} />
                        <Text className="text-xs text-gray-500">Nearby &bull; {address}</Text>
                    </View>
                </View>

                <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
            </View>
        </View>
    </ScrollView>
  )
}

export default RestaurantScreen