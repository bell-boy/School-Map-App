import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      // saving error
    }
  }

const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        console.log("There was an error getting data")
      // error reading value
    }
  }

export default function DataManager({data, setData, storageKey})
{
    const [ gotData, setGotData ] = useState(false)

    useEffect(() => {
        getData(storageKey).then((newData) => {
            if (newData)
                setData(newData)
            setGotData(true)
        })
    }, [])

    useEffect(() => {
        console.log(storageKey, data)
        if (gotData)
            storeData(storageKey, data).then(() => {})
    }, [data])

    return <></>
}