import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import First from "../screen/First"
import Second from "../screen/Second"
import Third from "../screen/Third"
import Fourth from '../screen/Fourth'
import { palette } from './sharedFunction';
import Swiper from 'react-native-swiper'
import HomeScreen from '../screen/HomeScreen'

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.white
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.white
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.white
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default class SwipeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <Swiper style={styles.wrapper}
        showsButtons={false}
        paginationStyle={{ marginBottom: 100 }}
        autoplayDirection={false}
        showsPagination={false}
      >
        <View style={styles.slide1}>
          <First />
        </View>
        <View style={styles.slide2}>
          < Second />
        </View>
        <View style={styles.slide3}>
          <Third />
        </View>
        <View style={styles.slide3}>
          <Fourth />
        </View>
        <View style={styles.slide3}>
          <HomeScreen />
        </View>
      </Swiper>
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwipeScreen)
