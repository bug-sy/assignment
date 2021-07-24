/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
    Animated, Dimensions, StyleSheet,
    TouchableHighlight, View,Text
} from 'react-native';
import { palette } from '../commonFunction.js/sharedFunction';

export default class TabbedComponent extends Component {
  state = {selectedIndex: 0, tabPosition: new Animated.Value(0)};

  slideRight = () => {
    Animated.timing(this.state.tabPosition, {
      toValue:
        (this.props.isRemoveMargin
          ? Dimensions.get('window').width - 60
          : Dimensions.get('window').width - 40) / 2,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  slideLeft = () => {
    Animated.timing(this.state.tabPosition, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  moveToNext = () => {
    this.setState({selectedIndex: 1});
    this.slideRight();
    this.props.onTabChanged(1);
  };

  moveToPrev = () => {
    this.setState({selectedIndex: 0});
    this.slideLeft();
    this.props.onTabChanged(0);
  };

  render() {
    return (
      <View
        style={[
          styles.cardView,
          {borderWidth: this.props.isRemoveBorder ? 0 : 1},
          {paddingBottom: this.props.isRemovePadding ? 0 : 10},
          {margin: this.props.isRemoveMargin ? 0 : 20},
        ]}>
        <Animated.View
          style={[
            {
              left: this.state.tabPosition,
            },
            styles.indicatorbar,
          ]}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight
            style={styles.tabs}
            underlayColor={'transparent'}
            onPress={() => this.moveToPrev()}>
            <Text
              variant={'secondary'}
              numberOfLines={1}
              style={{
                alignSelf: 'center',
                opacity: this.state.selectedIndex === 0 ? 1 : 0.5,
              }}>
              {this.props.tab1Heading}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.tabs}
            underlayColor={'transparent'}
            onPress={() => this.moveToNext()}>
            <Text
              variant={'secondary'}
              numberOfLines={1}
              style={{
                alignSelf: 'center',
                opacity: this.state.selectedIndex === 1 ? 1 : 0.5,
              }}>
              {this.props.tab2Heading}
            </Text>
          </TouchableHighlight>
        </View>
        {this.props.child}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  indicatorbar: {
    width: '50%',
    top: 37,
    zIndex: 10,
    height: 2,
    backgroundColor: palette.indicator,
    position: 'absolute',
  },
  cardView: {
    margin: 20,
    backgroundColor: 'white',
    paddingVertical: 10,
    borderColor: palette.warmGrey3,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    elevation: 5,
  },
  tabs: {
    width: '50%',
    borderBottomWidth: 1,
    borderColor: palette.warmGrey3,
    paddingBottom: 10,
  },
});
