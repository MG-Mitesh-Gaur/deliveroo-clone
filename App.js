import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store';

const RootStack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<RootStack.Navigator>
					{/* Screens */}
					<RootStack.Screen name='Home' component={HomeScreen} />
					<RootStack.Screen name='Restaurant' component={RestaurantScreen} />
				</RootStack.Navigator>
			</Provider>
		</NavigationContainer>

	);
}