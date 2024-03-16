import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ContentScreen from './src/screens/ContentScreen';
import CreateProjectScreen from './src/screens/CreateProjectScreen';
import SurvayScreen from './src/screens/SurvayScreen';
import SuccedProjectScreen from './src/screens/SuccedProjectScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import Survay2Screens from './src/screens/Survay2Screens';
import Survay3Screen from './src/screens/Survay3Screen';
import Survay4Screens from './src/screens/Survay4Screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={HomeScreen} options={{ title: '' }} />
        <Stack.Screen name='login' component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name='content' component={ContentScreen} />
        <Stack.Screen name='project' component={CreateProjectScreen} options={{ title: 'Crear proyecto' }} />
        <Stack.Screen name='survay' component={SurvayScreen} options={{ title: 'Crear encuesta' }} />
        <Stack.Screen name='survay2' component={Survay2Screens} options={{ title: 'Crear encuesta' }} />
        <Stack.Screen name='survay3' component={Survay3Screen} options={{ title: 'Crear encuesta' }} />
        <Stack.Screen name='survay4' component={Survay4Screens} options={{ title: 'Escuesta' }} />
        <Stack.Screen name='succed' component={SuccedProjectScreen} options={{ title: '', headerLeft: () => <></> }} />
        <Stack.Screen name='profile' component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
