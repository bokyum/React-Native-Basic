import React from 'react'
import { Platform, SafeAreaView, StyleSheet, Text, View} from "react-native";
import { Dimensions } from "react-native";
import {Colors} from 'react-native-paper';
import color from 'color'

const {width, height} = Dimensions.get('window')



const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Colors.blueGrey500,
    flex: 1,
  },
  text: {
    fontSize: 20,
    // color: color(Colors.blue500).alpha(0.5).lighten(0.9).string()
  },
  box: {height: 100, backgroundColor: Colors.lime500, marginBottom: 10},
  border: {borderWidth: 10, borderColor: Colors.black},
})


export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>os: {Platform.OS}</Text>
      <Text style={[styles.text]}>width: {width} px</Text>
      <Text style={[styles.text]}>height: {height} px</Text>

      <View style={[styles.box, styles.border]} />
      <View style={[styles.box, styles.border, {borderRadius: 20}]} />
      <View style={[styles.box, styles.border,
      {borderTopLeftRadius: 40, borderBottomLeftRadius: 40}]} />
    </SafeAreaView>
  )
}
// prettier-ignore
