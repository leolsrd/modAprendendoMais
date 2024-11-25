import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
      </ScrollView> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
      </ScrollView>

      {/* <ScrollView>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    width: 150,
    height: 250,
    backgroundColor: 'red',
  },
  box2: {
    width: 150,
    height: 250,
    backgroundColor: 'green',
  },
  box3: {
    width: 150,
    height: 250,
    backgroundColor: 'yellow',
  },
  box4: {
    width: 150,
    height: 250,
    backgroundColor: 'blue',
  },
});
