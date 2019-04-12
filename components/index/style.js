import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  quotesContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 20,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderBottomWidth: 2
  },
  topQuoteContainer: {
    flex: 0.2,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red'
  },
  quoteText: {
    color: 'black',
    fontSize: 17,
    fontStyle: 'italic'

  },
  quoteView: {
    flex: 0.6,
    padding: 10,
    // backgroundColor: 'yellow'
  },
  quoteAuthor: {
    flex: 0.2,
    padding: 10,
    // backgroundColor: 'brown',
    alignItems: 'flex-end'
  },
  quoteTypeText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600'
  },
  quoteAuthorText: {
    color: 'black',
    fontSize: 13,
    fontWeight: '600'
  },
  quoteDateText: {
    color: 'black',
    fontSize: 15
  },
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default styles
