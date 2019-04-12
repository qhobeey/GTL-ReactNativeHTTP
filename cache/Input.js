import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'


class Inputs extends Component {

  state = {
    email: '',
    password: ''
  }

  authenticateEmail = (text) => {
    this.setState({email: text})
  }

  authenticatePassword = (text) => {
    this.setState({password: text})
  }

  login = (email, password) => {
    alert('Email is: ' + email + ' and Password is: ' + password)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.input}
          placeholder="Email"
          underlineColorAndroid = "transparent"
          autoCapitalize = "none"
          placeholderTextColor = "#9a73ef"
          onChangeText = {this.authenticateEmail}
        />
        <TextInput
        style={styles.input}
          placeholder="Password"
          underlineColorAndroid = "transparent"
          autoCapitalize = "none"
          placeholderTextColor = "#9a73ef"
          onChangeText = {this.authenticatePassword}
        />
        <TouchableOpacity style={styles.submitButton}
          onPress = {() => this.login(this.state.email, this.state.password)}
        >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default Inputs

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: 'white'
  }
})
