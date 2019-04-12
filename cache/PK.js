import React, {PureComponent} from 'react'
import {View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList, Image, ActivityIndicator} from 'react-native'
import PCard from './PCard';

export default class PKart extends PureComponent {
  state = {
    pokeList: [],
    loading: true
  }
  async componentDidMount() {
    try {
      const pokemonApiCall = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const pokemon = await pokemonApiCall.json();
      console.log(pokemon);
      this.setState({pokeList: pokemon.results, loading: false});
    } catch (err) {
      console.log("Error fetching data-----------", err);
    }
  }
  renderItem(data) {
    return <PCard {...data.item} />
    }
  render() {
    const { pokeList, loading } = this.state;

    if(!loading) {
        return <FlatList
                data={pokeList}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.name}
                />
    } else {
        return <ActivityIndicator />
    }
  }
}

const styles = StyleSheet.create({
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#fff',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    pokeItemHeader: {
        color: '#fff',
        fontSize: 24,
    },
    pokeImage: {
        backgroundColor: 'transparent',
        height: 50,
        width: 50
    }
})
