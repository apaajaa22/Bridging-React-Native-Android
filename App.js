/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Button, ToastAndroid, StyleSheet } from 'react-native';
import Counter from './Counter';

const App = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        Counter.incrementCounter((newCount) => {
            setCount(newCount);
        });
    };

    const handleReset = () => {
        Counter.resetCounter();
        setCount(0);
    };

    const handleGetCounter = () => {
        Counter.getCounter((currentCount) => {
            setCount(currentCount);
            ToastAndroid.showWithGravity(
                `Toast From React Native / Javascript: ${currentCount}`,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{count}</Text>
            <Button title="Increment" onPress={handleIncrement} />
            <View style={styles.gap} />
            <Button title="Reset" onPress={handleReset} />
            <View style={styles.gap} />
            <Button title="Get Counter" onPress={handleGetCounter} />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    gap: {
        height: 10,
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10,
    },
});
