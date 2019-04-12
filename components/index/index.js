import React, {PureComponent} from 'react'
import {View, Text, ActivityIndicator, FlatList} from 'react-native'
import QuoteCard from './QuoteCard'
import styles from './style'
export default class Motivation extends PureComponent {
  state = {
    quotes: [],
    isLoading: true
  }

  async componentDidMount() {
    try {
      const ajaxURL = await fetch('https://dry-peak-77174.herokuapp.com/api/generate/random/80', {method: 'GET'})
      const ajaxURLResponse = await ajaxURL.json()
      this.setState({quotes: ajaxURLResponse.data, isLoading: false})
    } catch (err) {
      console.log("Error fetching data from server----------", err);
    }
  }

  render() {
    const {quotes, isLoading} = this.state
    const {navigation} = this.props

    if(!isLoading) {
      return <FlatList
        data={quotes}
        renderItem={(data) => <QuoteCard {...data.item} navigation={navigation} />}
        keyExtractor={(item) => item.quote_id}
      />
    }else {
      return <View style={styles.loadingScreen}><ActivityIndicator /></View>
    }

  }
}
