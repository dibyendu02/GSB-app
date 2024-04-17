/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SignUp from './pages/SignUp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Verification from './pages/Verification';
import Age from './pages/signingUp/Age';
import Weight from './pages/signingUp/Weight';
import GoalHeight from './pages/signingUp/GoalHeight';
import GoalWeight from './pages/signingUp/GoalWeight';
import Splash from './pages/Splash';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Age" component={Age} />
        <Stack.Screen name="Weight" component={Weight} />
        <Stack.Screen name="GoalHeight" component={GoalHeight} />
        <Stack.Screen name="GoalWeight" component={GoalWeight} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
