/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { StyleSheet, TouchableHighlight, View, TextInput, Text, Dimensions, Animated, Keyboard, Button } from 'react-native';
import TabbedComponent from './TabbedComponent';


export default class UserDetail extends Component {
    tabComponentRef = null;
    constructor(props) {
        super(props);
        this.state = {
            open: null,
            activeTabIndex: 0,
            tabPosition: new Animated.Value(0),
            tabOpacity: new Animated.Value(1),
            phoneNumber: "",
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            conPassword: "",
            emailId: "",
            isFirstNameInvalid: false,
            isLastNameInvalid: false,
            isUserNameInvalid: false,
            isPasswordInvalid: false,
            isconPasswordInvalid: false,
            isphoneNumberValid: false,
            isemailIdValid: false,
            success: false
        };
    }

    anotherValidationCheck = () => {
        let isValid = true

        if (this.state.phoneNumber == "") {
            this.setState({ isphoneNumberValid: true })
            isValid = false
        }
        if (this.state.emailId == "") {
            this.setState({ isemailIdValid: true })
            isValid = false

        }


        return isValid

    }


    validatonCheck = () => {
        let isValid = true

        if (this.state.firstName == "") {
            this.setState({ isFirstNameInvalid: true })
            isValid = false
        }


        if (this.state.lastName == "") {
            this.setState({ isLastNameInvalid: true })
            isValid = false

        }
        if (this.state.userName == "") {
            this.setState({ isUserNameInvalid: true })
            isValid = false

        }
        if (this.state.password == "") {
            this.setState({ isPasswordInvalid: true })
            isValid = false

        }
        if (this.state.conPassword == "") {
            this.setState({ isconPasswordInvalid: true })
            isValid = false

        }
        return isValid
    }


    fadeAnimation = () => {
        this.setState({ tabOpacity: new Animated.Value(0) });
        setTimeout(() => {
            Animated.timing(this.state.tabOpacity, {
                toValue: 1,
                duration: 1000,
            }).start();
        }, 0);
    };

    onChangeUI = () => {

        if (this.state.activeTabIndex == 0) {
            return (
                <View style={{ height: 100, height: Dimensions.get('window').height }}>
                    <View>
                        <Text style={{ fontSize: 40 }}>Login Form</Text>
                    </View>
                    <TextInput
                        placeholder={'FirstName'}
                        mode="outlined"
                        maxLength={14}
                        style={styles.textFieldColor}

                        autoFocus={true}
                        value={this.state.firstName}
                        onKeyPress={({ nativeEvent }) => {

                        }}
                        onChangeText={(value) => {

                            this.setState({ firstName: value, isFirstNameInvalid: false })


                        }

                        }
                    />
                    {this.state.isFirstNameInvalid && (
                        <Text style={{ color: 'red', paddingHorizontal: 20 }}>
                            Please enter valid first name
                        </Text>
                    )}
                    <TextInput
                        placeholder={'LastName'}
                        mode="outlined"
                        maxLength={14}
                        style={styles.textFieldColor}

                        autoFocus={true}
                        value={this.state.lastName}
                        onKeyPress={({ nativeEvent }) => {

                        }}
                        onChangeText={(value) => {

                            this.setState({ lastName: value, isLastNameInvalid: false })


                        }

                        }
                    />
                    {this.state.isLastNameInvalid && (
                        <Text style={{ color: 'red', paddingHorizontal: 16 }}>
                            Please enter valid last name
                        </Text>
                    )}
                    <TextInput
                        placeholder={'UserName'}
                        mode="outlined"
                        maxLength={14}
                        style={styles.textFieldColor}

                        autoFocus={true}
                        value={this.state.userName}
                        onKeyPress={({ nativeEvent }) => {


                        }}
                        onChangeText={(value) => {

                            this.setState({ userName: value, isUserNameInvalid: false })



                        }

                        }
                    />
                    {this.state.isUserNameInvalid && (
                        <Text style={{ color: 'red', paddingHorizontal: 16 }}>
                            Please enter valid username
                        </Text>
                    )}
                    <TextInput
                        placeholder={'Password'}
                        mode="outlined"
                        maxLength={14}
                        style={styles.textFieldColor}

                        autoFocus={true}
                        value={this.state.password}
                        onKeyPress={({ nativeEvent }) => {

                        }}
                        secureTextEntry={true}
                        onChangeText={(value) => {

                            this.setState({ password: value, isPasswordInvalid: false })

                        }

                        }
                    />
                    {this.state.isPasswordInvalid && (
                        <Text style={{ color: 'red', paddingHorizontal: 16 }}>
                            Please enter valid password
                        </Text>
                    )}
                    <TextInput
                        placeholder={'Confirm Password'}
                        mode="outlined"
                        maxLength={14}
                        style={styles.textFieldColor}

                        autoFocus={true}
                        value={this.state.conPassword}
                        onKeyPress={({ nativeEvent }) => {

                        }}
                        onChangeText={(value) => {

                            this.setState({
                                conPassword: value, isconPasswordInvalid: false,
                            })

                        }

                        }
                    />
                    {this.state.isconPasswordInvalid && (
                        <Text style={{ color: 'red', paddingHorizontal: 16 }}>
                            check with confirm password
                        </Text>
                    )}

                    <Button
                        onPress={() => {
                            if (this.validatonCheck()) {
                                this.setState({ activeTabIndex: 1 });
                                this.fadeAnimation();
                                Keyboard.dismiss()
                                this.tabComponentRef.moveToNext()
                            }
                        }}
                        title="Next"
                        color="#841584"
                        accessibilityLabel="Next"
                    />
                </View>

            )
        }
        else {
            return (
                <View style={{ height: 100, height: Dimensions.get('window').height }}>
                    <View>
                        <Text style={{ fontSize: 40 }}>Login Form</Text>
                    </View>
                    <TextInput
                        onFocus={() => { this.state.phoneNumber.length == 0 && this.setState({ phoneNumber: "+91 " }) }}
                        placeholder={'Phone Number'}
                        mode="outlined"
                        maxLength={14}
                        style={styles.textFieldColor}

                        autoFocus={true}
                        keyboardType={'numeric'}
                        value={this.state.phoneNumber}
                        onKeyPress={({ nativeEvent }) => {

                        }}
                        onChangeText={(value) => {

                            this.setState({ phoneNumber: value })

                        }

                        }
                    />
                    {this.state.isphoneNumberValid && (
                        <Text style={{ color: 'red', paddingHorizontal: 16 }}>
                            Please enter valid phone number
                        </Text>
                    )}
                    <TextInput
                        placeholder={'Email Id'}
                        mode="outlined"
                        maxLength={14}
                        style={styles.textFieldColor}

                        autoFocus={true}

                        value={this.state.emailId}
                        onKeyPress={({ nativeEvent }) => {

                        }}
                        onChangeText={(value) => {

                            this.setState({ emailId: value })

                        }

                        }
                    />
                    {this.state.isemailIdValid && (
                        <Text style={{ color: 'red', paddingHorizontal: 16 }}>
                            Please enter valid email id
                        </Text>
                    )}
                    <Button
                        onPress={() => {
                            if (this.anotherValidationCheck()) {
                                this.setState({ success: true })
                                setTimeout(() => {
                                    this.setState({ success: false })
                                }, 300);
                                Keyboard.dismiss()
                            }
                        }}
                        title="Submit"
                        color="#841584"
                        accessibilityLabel="Next"
                    />
                    {this.state.success && <View style={{ padding: 40 }}><Text>Login Successfull</Text></View>}

                </View>


            )
        }
    }
    render() {
        return (
            <View style={{ width: '100%', }}>
                <TabbedComponent
                    ref={(ref) => (this.tabComponentRef = ref)}
                    tab1Heading={
                        "Tab1"
                    }
                    tab2Heading={"Tab2"}
                    isRemoveBorder={true}
                    isRemoveMargin={true}
                    isRemovePadding={true}
                    child={this.onChangeUI()}
                    onTabChanged={(index) => {
                        this.setState({ activeTabIndex: index });
                        this.fadeAnimation();
                        Keyboard.dismiss()
                    }}
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
    },
    textFieldColor: {
        // backgroundColor: 'white',
        paddingHorizontal: 10,
        height: 40,
        marginTop: 16,
        marginHorizontal: 16,
        borderWidth: 1,
    },
});
