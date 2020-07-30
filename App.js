import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PageStack from "./src/Screen/PageStack"
import Navigate  from './src/Screen/PageStack'
import {Provider} from 'react-redux'
import { store } from './src/rootReducers/store'
function App () {
  return (
    <Provider store={store}>
        <PageStack/>
    </Provider>
  )
}
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});