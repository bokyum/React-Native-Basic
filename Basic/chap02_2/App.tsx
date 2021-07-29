/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import { SafeAreaView, Text } from 'react-native';

 export default function App() {
   const children = new Array(100)
    .fill(null)
    .map((notUsed, index) => <Text>Hello World! {index}</Text>)

   return <SafeAreaView>{children}</SafeAreaView>
 }