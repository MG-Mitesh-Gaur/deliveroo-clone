import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {Icon } from '@rneui/themed';
import SafeViewAndroid from '../components/utilities/SafeViewAndroid'
import Categories from '../components/custom/Categories';
import FeaturedRow from '../components/custom/FeaturedRow';

const HomeScreen = () => {

	const navigation = useNavigation();

	useLayoutEffect(()=> {
		navigation.setOptions({
			headerShown: false
		})
	}, [])
	return (
		<SafeAreaView style={SafeViewAndroid.AndroidSafeArea} className="bg-gray-100 pt-5">
				{/* Header */}
				<View className="flex-row pb-3 items-center mx-4 space-x-2 pt-2">
					<View>
						<Image
							source={{uri: 'https://links.papareact.com/wru'}}
							className="h-7 w-7 bg-gray-300 p-4 rounded-full"
						/>
					</View>
					<View className="flex-1">
						<Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
						<View className="items-center flex-row">
						<Text className="font-bold text-xl">Current Location  
						</Text>
						<Icon name='expand-more' color={'#00ccbb'} type='material' />
						</View>
					</View>

					<View>
						<Icon name='person-outline' color={'#00ccbb'} />
					</View>
				</View>
				{/* Search Bar */}
				<View className="flex-row items-center space-x-2 pb-2 mx-4">
					<View className="flex-row space-x-2 bg-gray-200 p-3 items-center flex-1">
						<View>
							<Icon name='search' color={'gray'} />
						</View>
						<TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
					</View>

					<View>
						<Icon name='tune' color={'#00ccbb'} />
					</View>
				</View>

				{/* Body */}
				<ScrollView>
					{/* Categories */}
					<Categories />

					{/* Featured Rows */}
					<FeaturedRow
						id="1"
						title="Featured"
						description="Paid placements from our partners"
					/>

					<FeaturedRow
						id="2"
						title="Tasty Discounts"
						description="Everyone's been enjoying these juicy discounts!"
					/>

					<FeaturedRow
						id="3"
						title="Offers near you!"
						description="Why not support your local restaurant tonight!"
					/>
				</ScrollView>
		</SafeAreaView>
	)
}

export default HomeScreen