import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const PresentationalComponent = (props) => {
  return (
    <View>
      <Text onPress={props.updateName}>
      {props.name}
      </Text>
    </View>
  )
}

export default PresentationalComponent
