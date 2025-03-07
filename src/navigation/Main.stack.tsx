import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation.types';
import HomeScreen from '../screens/HomeScreen.tsx';

interface MainStackProps {}

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack: React.FC<MainStackProps> = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={'Home'} component={HomeScreen} />
  </Stack.Navigator>
);
export default MainStack;
