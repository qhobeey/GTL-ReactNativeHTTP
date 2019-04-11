import React, {Component} from 'react'
import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native'

export default class ProtocolsDj extends Component {
  state = {
    quotes: [
      {
        id: 2655,
        quote_id: "ML-02393",
        type: "truth",
        author: "William Hazlitt",
        quote: "An honest man speaks the truth, though it may give offence a vain man, in order that it may.",
        created_at: "2018-12-09 22:41:29",
        updated_at: "2018-12-09 23:29:08"
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
               <TouchableOpacity key={item.quote_id} style={styles.item} onPress={() => this.alertName(item.author)}>
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
