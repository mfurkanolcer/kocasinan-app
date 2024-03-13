import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import DestinationScreen from '../screens/DestinationScreen';
import CamiiScreen from '../screens/CamiiScreen';
import OtoparkScreen from '../screens/OtoparkScreen';
import TaksiScreen from '../screens/TaksiScreen';
import PazarScreen from '../screens/PazarScreen';
import KafeSinanScreen from '../screens/KafeSinanScreen';
import IletisimScreen from '../screens/IletisimScreen';
import EczaneScreen from '../screens/EczaneScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Destination" component={DestinationScreen} />
        <Stack.Screen name="Camii" component={CamiiScreen} />
        <Stack.Screen name="Otopark" component={OtoparkScreen} />
        <Stack.Screen name="Taksi" component={TaksiScreen} />
        <Stack.Screen name="Pazar" component={PazarScreen} />
        <Stack.Screen name="KafeSinan" component={KafeSinanScreen} />
        <Stack.Screen name="Iletisim" component={IletisimScreen} />
        <Stack.Screen name="Eczane" component={EczaneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { AppNavigation };