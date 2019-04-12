import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import moment from 'moment'
import styles from './style'

const QuoteCard = ({quote, author, type, created_at, navigation}) => {

  return (
    <TouchableOpacity style={{backgroundColor: 'transparent'}} onPress={() => navigation.navigate('Details')}>
              <View style={styles.quotesContainer}>
                <View style={styles.topQuoteContainer}>
                  <Text style={styles.quoteTypeText}>{type.toUpperCase()}</Text>
                  <Text style={styles.quoteDateText}>{moment(created_at).format('MMMM Do YYYY')}</Text>

                </View>
                <View style={styles.quoteView}><Text style={styles.quoteText}>{`"${quote}"`}</Text></View>
                <View style={styles.quoteAuthor}><Text style={styles.quoteAuthorText}>{`-${author}`}</Text></View>
              </View>
            </TouchableOpacity>
  )
}

export default QuoteCard
