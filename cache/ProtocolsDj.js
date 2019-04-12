import React, {Component} from 'react'
import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native'

export default class ProtocolsDj extends Component {
  state = {
    quotes: [
      {
        id: 2655,
        quote_id: "",
        type: "",
        author: "",
        quote: "",
        created_at: "",
        updated_at: ""
      }
    ]
  }
  componentDidMount = () => {
    fetch('https://dry-peak-77174.herokuapp.com/api/generate/random/80', {
      method: 'GET'
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({quotes: responseJson.data})
      }).catch((error) => {
        console.log(error);
      });
  }
  alertName = (name) => {alert(name)}
  render() {
     return (
       <View>
         <ScrollView>
           {
             this.state.quotes.map((item, index) => (
               <Touch ableOpacity key={item.quote_id} style={styles.item} onPress={() => this.alertName(item.author)}>
                 <Text>{item.quote}</Text>
               </TouchableOpacity>
             ))
           }
         </ScrollView>
       </View>
     )
  }
}

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
