import React from 'react'
import 'react-native-gesture-handler';
import {View,Text,StyleSheet} from 'react-native'
import colors from './styles/colors';
import { color } from 'react-native-reanimated';


export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Page App !</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems: 'center',
    justifyContent : 'center',
    backgroundColor : colors.darkGray
  }
})