import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/themed';
import colors from '../../constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, selectBasketItems } from '../../features/basketSlice';

const DishRow = ({id, name, description, price, image}) => {

    const [isPressed, setIsPressed] = useState(false);
    const items = useSelector(selectBasketItems)
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket({id, name, description, price, image}))
    }
  return (
    <>
        <TouchableOpacity onPress={()=> setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
            <View className="flex-row">
                <View className="flex-1 pr-2">
                    <Text className="text-lg mb-1">{name}</Text>
                    <Text className="text-gray-400">{description}</Text>
                    <Text className="text-gray-400 mt-2">{price}</Text>
                </View>
                <View>
                    <Image
                        style={{
                            borderWidth: 1,
                            borderColor: '#f3f3f4'
                        }}
                        source={{uri: image}}
                        className="h-20 w-20 bg-gray-300 p-4"
                    />
                </View>
            </View>
        </TouchableOpacity>

        {isPressed && (
            <View className="bg-white px-4">
                <View className="flex-row items-center space-x-2 pb-3">
                    <TouchableOpacity>
                        <Icon name='minus-circle' color={colors.colorPrimary} type='material-community' size={40} />
                    </TouchableOpacity>

                    <Text>{items.length}</Text>

                    <TouchableOpacity onPress={addItemToBasket}>
                        <Icon name='plus-circle' color={colors.colorPrimary} type='material-community' size={40} />
                    </TouchableOpacity>
                </View>
            </View>
        )}
    </>
  )
}

export default DishRow