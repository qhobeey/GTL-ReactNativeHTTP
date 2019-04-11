import React, {Component} from 'react'
import {Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'

class ScrollViewJs extends Component {

  state = {
    names: [
      { id: 0, name: 'Ben'},
      { id: 1, name: 'Robert'},
      { id: 2, name: 'Issaka'},
      { id: 3, name: 'Alaska'},
      { id: 4, name: 'Rayford'},
      { id: 5, name: 'Susan'},
      { id: 6, name: 'Ama'},
      { id: 7, name: 'Bismark'},
      { id: 8, name: 'Ewuresi'},
      { id: 9, name: 'Raphael'},
      { id: 10, name: 'Andy'}
    ]
  }

  alertName = (name) => {alert(name)}

  render() {
    return (
      <View>
        <ScrollView>
          {
            this.state.names.map((item, index) => (
              <TouchableOpacity key={item.id} style={styles.item} onPress={() => this.alertName(item.name)}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>
    )
  }
}

export default ScrollViewJs

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: 'brown',
    borderWidth: 1,
    backgroundColor: 'azure'
  }
})
