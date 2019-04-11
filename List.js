import React, {Component} from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

class List extends Component {
  state = {
    name: [
      {
        id: 0,
        name: 'Ben'
      },
      {
        id: 1,
        name: 'Robert'
      },
      {
        id: 2,
        name: 'Bob'
      },
      {
        id: 3,
        name: 'Alaska'
      },
      {
        id: 4,
        name: 'Mary'
      },
      {
        id: 5,
        name: 'Susan'
      }
    ]
  }
  alertItemName = (item) => {
    alert(item.name)
  }
  render() {
    return (
      <View>
        {
          this.state.name.map((item, index) => (
            <TouchableOpacity
              key = {item.id}
              style = {styles.container}
              onPress = {() => this.alertItemName(item)}
            >
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }
}

export default List

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: 'brown',
    alignItems: 'center'
  },
  text: {
    color: 'white'
  }
})
