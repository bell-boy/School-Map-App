import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function HomeScreen({ navigation })
{
    return (
        <View style={styles.container}>
            <Button
          title="Edit Schedule"
          onPress={() =>
            navigation.navigate('Schedule', { })
          }
        />
        <Button
          title="View Map"
          onPress={() =>
            navigation.navigate('Map', { })
          }
        />
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})