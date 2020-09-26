import React from 'react';
import Home from './pages/Home';
import BattleScore from './pages/BattleScore';
import Cards from './pages/Cards';
import Settings from './pages/Settings';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function Routes() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="BattleScore" component={BattleScore} options={{headerShown: false}}/>
        <Stack.Screen name="Cards" component={Cards} options={{headerShown: false}}/>
        <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>);
}