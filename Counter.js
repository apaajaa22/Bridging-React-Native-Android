/* eslint-disable prettier/prettier */
// Counter.js

import { NativeModules } from 'react-native';

const CounterModule = NativeModules.CounterModule;

const Counter = {
    incrementCounter: (callback) => {
        CounterModule.incrementCounter(callback);
    },
    resetCounter: () => {
        CounterModule.resetCounter();
    },
    getCounter: (callback) => {
        CounterModule.getCounter(callback);
    },
};

export default Counter;
