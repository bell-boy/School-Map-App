import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState} from 'react';

import { NavigationContainer, St } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from './components/HomeScreen';
import MapScreen from './components/MapScreen';
import ScheduleScreen from './components/ScheduleScreen';

export default function App() {
  const [schedule, useSchedule ] = useState()

  return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Schedule" component={ScheduleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
