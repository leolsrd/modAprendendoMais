import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.txtBemVindo}>Sejá bem vindo!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
});
