import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import Header from './Header';
import TaskInput from './TaskInput';
import ItemList from './ItemList';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TaskInput />
      <ItemList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
