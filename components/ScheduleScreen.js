import { StyleSheet, Text, View, TextInput, Button, DeviceEventEmitter } from 'react-native';
import { useState, useEffect } from 'react';

const range = [0, 1, 2, 3, 4, 5]

function PeriodInput({index, setText, text})
{
    return <View key={index} style={styles.inputContainer}>
            <Text style={styles.PeriodMark}>{(index+1)+"   "}</Text>
            <TextInput
                style={styles.periodInput}
                onChangeText={(newVal) => setText(index, newVal)}
                value={text}
                placeholder={"001"}
                keyboardType="numeric"
                onFocus={() => setText(index, "")}
            />
        </View>
}

export default function ScheduleScreen({ route })
{
    const [schedule, setSchedule ] = useState(route.params.schedule)

    useEffect(() => {
        DeviceEventEmitter.addListener('event.setSchedule', eventData => setSchedule(eventData), []);
    })
    function adjust(index, newvalue)
    {
        const newArray = []
        for (let i = 0; i < 6; i++)
            newArray.push(index == i ? newvalue:schedule[i])
        DeviceEventEmitter.emit('event.setSchedule', newArray);
    }

    console.log("schedule", schedule)

    return <View style={styles.container}>
        <Text style={styles.inputTitle}>Period</Text>
        {range.map((index) => <PeriodInput text={schedule[index]} setText={adjust} key={index} index={index}/>)}
        <Button title="Submit"/>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {
        flexDirection: "row",
    },
    inputTitle: {
        fontSize: 35
    },
    PeriodMark: {
        fontSize: 20
    },
    periodInput: {
        fontSize: 20
    }
  });