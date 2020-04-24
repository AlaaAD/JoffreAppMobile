import React from 'react'

import {View,Text,StyleSheet} from 'react-native'
import colors from '../../styles/colors'



 class AboutScreen extends React.Component{
  render(){
    return(
        <View style={styles.container}>
            <Text>About Screen page </Text>
        </View>
    )
  }
 
}

const styles = StyleSheet.create({
    container : {
      flex : 1,
      alignItems: 'center',
      justifyContent : 'center',
      backgroundColor : colors.white
    }
  })

export default AboutScreen