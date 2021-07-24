/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, View, FlatList, Text, Dimensions } from 'react-native';
import { Customer } from "../commonFunction.js/sharedFunction"

export default class CustomerPortal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: null,
        };
    }

    itemSelected = (id) => {

        this.setState({ open: id }, () => {
        })


    }


    

    header = () => {
        return (
            <View style={{ height: 100, justifyContent: "space-between", width: Dimensions.get('window').width - 45 }}>
                <View>
                    <Text style={{ fontSize: 40 }}>Customer Portal</Text>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'flex-start', justifyContent: "space-around" }}>
                    <View>
                        <Text numberOfLines={1} style={{ fontSize: 16 }}>Id</Text>
                    </View>
                    <View >
                        <Text numberOfLines={1} style={{ fontSize: 16 }}>Name</Text>
                    </View>
                    <View>
                        <Text numberOfLines={1} style={{ fontSize: 16 }}>Sex</Text>
                    </View>
                    <View>
                        <Text numberOfLines={1} style={{ fontSize: 16 }}>Age</Text>
                    </View>

                </View>

            </View>
        )
    }
    render() {
        return (
            <View style={{ width: '100%', }}>
                <View style={styles.container}>
                    {this.header()}
                </View>
                <FlatList
                    keyboardShouldPersistTaps={'always'}
                    data={Customer}
                    style={styles.listStyle}
                    ItemSeparatorComponent={() => <View style={{ width: '100%', paddingHorizontal: 16, height: 1, opacity: 0.8 }}><View style={{ flex: 1, backgroundColor: "red" }} /></View>}
                    renderItem={(item) => {
                        return (
                            <View>
                                <View style={{ flexDirection: "row" }}>
                                    <TouchableHighlight style={{ marginHorizontal: 20, paddingVertical: 10, width: Dimensions.get('window').width - 80 }} underlayColor={'none'} onPress={() => this.itemSelected(item.item.id)} >
                                        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'flex-start', justifyContent: "space-around" }}>
                                            <View>
                                                <Text numberOfLines={1} style={{ fontSize: 16 }}>{item.item.id}</Text>
                                            </View>
                                            <View >
                                                <Text numberOfLines={1} style={{ fontSize: 16 }}>{item.item.Name}</Text>
                                            </View>
                                            <View>
                                                <Text numberOfLines={1} style={{ fontSize: 16 }}>{item.item.Sex}</Text>
                                            </View>
                                            <View>
                                                <Text numberOfLines={1} style={{ fontSize: 16 }}>{item.item.Age}</Text>
                                            </View>

                                        </View >

                                    </TouchableHighlight >
                                    {(this.state.open == item.item.id) && <TouchableHighlight style={{ padding: 10, }} onPress={() => { this.setState({ open: -1 }) }} ><Text style={{fontSize:20}}>^</Text></TouchableHighlight>
                                    }
                                </View>

                                {(this.state.open == item.item.id) &&
                                    <View style={{ padding: 16, paddingVertical: 10, backgroundColor: "cyan", borderWidth: 1, borderBottomEndRadius: 5, marginHorizontal: 16, marginBottom: 5 }}>
                                        <Text style={{ backgroundColor: "#f0f4fa" }}>Address are as follows</Text>

                                        {item.item.address.map((data, key) => {
                                            return (
                                                <View style={{ flexDirection: "row", padding: 16, paddingVertical: 10, backgroundColor: '#70ad49' }}>
                                                    <View>
                                                        <Text>{key})</Text>
                                                    </View>
                                                    <View>
                                                        <Text> {data}</Text>
                                                    </View>
                                                </View>
                                            )
                                        })
                                        }
                                    </View>
                                }
                            </View>
                        )
                    }
                    }
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 60,
    },
    listStyle: {
        minHeight: 80,
        // maxHeight: 250,
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 2,
        marginTop: 30,
        backgroundColor: 'white'
    }
});
