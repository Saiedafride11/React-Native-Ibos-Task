import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react';
import Navigation from './assets/Navigation/Navigation'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
