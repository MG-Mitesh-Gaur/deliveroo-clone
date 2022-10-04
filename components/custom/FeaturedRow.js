import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import ResturantCard from './ResturantCard'

const mock_data = require('../../MOCK_DATA.json')

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Icon name='arrow-forward' type='material' color={'#00ccbb'} />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      
      <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCards... */}
        <ResturantCard
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Yo! sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main St"
            short_description="This is a test description"
            dishes={mock_data}
            long={20}
            lat={0}
        />

        <ResturantCard
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="Yo! sushi"
            rating={4.5}
            genre="Japanese"
            address="123 Main St"
            short_description="This is a test description"
            dishes={mock_data}
            long={20}
            lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow