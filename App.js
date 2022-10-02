import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, DeviceEventEmitter } from 'react-native';
import { useState, useEffect } from 'react';

import { NavigationContainer, St } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import DataManager from './components/DataManager';

import HomeScreen from './components/HomeScreen';
import MapScreen from './components/MapScreen';
import ScheduleScreen from './components/ScheduleScreen';

export default function App() {
  const [schedule, setSchedule ] = useState([0, 0, 0, 0, 0, 0, 0])

  useEffect(() => {
    DeviceEventEmitter.addListener('event.setSchedule', eventData => setSchedule(eventData), []);
  })

  return (
      <NavigationContainer style={styles.container}>
        <DataManager storageKey={"@schedule:0.0"} data={schedule} setData={setSchedule}/>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Schedule" component={ScheduleScreen} initialParams={{schedule: schedule}}/>
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
