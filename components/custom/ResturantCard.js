import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

const ResturantCard = ({
    id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
}) => {

  const navigation= useNavigation();
  return (
    <TouchableOpacity
    onPress={() => {
      navigation.navigate("Restaurant", {
        id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
      })
    }}
    className="bg-white mr-3 shadow">
      <Image
        source={{uri: imgUrl}}
        className="h-36 w-64 rounded-sm"
      />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
            <Icon name='star' type='antdesign' color="green" style={{opacity: 0.5}} />
            <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text>  &bull; {genre}
            </Text>
        </View>

        <View className="flex-row items-center space-x-1 mt-1">
            <Icon color="gray" name="location-pin" type='simple-line-icon' style={{opacity: 0.4}} />
            <Text className="text-xs text-gray-500">Nearby &bull; {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ResturantCard