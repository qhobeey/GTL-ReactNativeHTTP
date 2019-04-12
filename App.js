import React, {Component} from 'react'
import {View} from 'react-native'
import { createStackNavigator, createAppContainer } from "react-navigation"
import Motivation from './components/index'
import MotivationDetails from './components/index/details'

const AppNavigator = createStackNavigator({
    Home: Motivation,
    Details: MotivationDetails
});

export default createAppContainer(AppNavigator);
