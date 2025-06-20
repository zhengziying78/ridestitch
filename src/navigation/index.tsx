import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import LoginScreen from '../screens/LoginScreen';
import RideListScreen from '../screens/RideListScreen';
import MergeRidesScreen from '../features/merge/MergeRidesScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'RideStitch Login' }}
        />
        <Stack.Screen
          name="RideList"
          component={RideListScreen}
          options={{ title: 'Your Rides' }}
        />
        <Stack.Screen
          name="MergeRides"
          component={MergeRidesScreen}
          options={{ title: 'Merge Rides' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
