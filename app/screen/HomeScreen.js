import React, { useEffect, useState } from 'react';
import { Text, View, Image, StyleSheet, TextInput, Icon, Dimensions } from 'react-native';
import CommonScreen from "../commonFunction/CommonScreen"
import { palette, typography } from '../commonFunction/sharedFunction';

const HomeScreen = (props) => {
    const [section, setAppointments] = useState(0)


    const sectionOne = () => {
        return (
            <View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20,top:-60 }}>
                    <View>
                        <Text style={styles.text1}>Good Evening</Text>
                        <Text style={styles.text2}>Welcome back</Text>
                    </View>
                    <View>

                        <Image
                            style={{

                            }}
                            source={(4 === 4) && require("../assets/Premium.png")}
                        />
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20, width: Dimensions.get('window').width,top:-20 }}>
                    <Image
                        style={{
                            bottom: "0.11%",
                            background: "#EDF2F9",
width:"100%"

                        }}
                        source={(4 === 4) && require("../assets/Premiumbanner.png")}
                    />
                </View>




                <View style={{ paddingHorizontal: 20, top :-15 }}>
                    <View style={{ flexDirection: "row", backgroundColor: palette.white, justifyContent: "space-between", borderRadius: 20, padding: 10, marginTop: 10, }}>
                        <View>
                            <Image
                                style={{

                                    bottom: 0,

                                }}
                                source={(4 === 4) && require("../assets/search.png")}
                            />
                        </View><View style={{ width: 200 }}><Text >Search through your scans</Text></View>
                    </View>
                </View>


                <View style={{ flexDirection: "row", justifyContent: "space-evenly", }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <View>
                            <Image
                                style={{

                                    bottom: 0,

                                }}
                                source={(4 === 4) && require("../assets/s1.png")}
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: "700" }}>Single Scan</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <View>
                            <Image
                                style={{

                                    bottom: 0,

                                }}
                                source={(4 === 4) && require("../assets/s2.png")}
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: "700" }}>Batch Scan</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <View>
                            <Image
                                style={{

                                    bottom: 0,

                                }}
                                source={(4 === 4) && require("../assets/s3.png")}
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, fontWeight: "700" }}>Scan to text</Text>
                        </View>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 20 }} >
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "700" }}>Recent Scans</Text>
                    </View>
                    <View style={{ flexDirection: "row", }}>
                        <View style={{ marginRight: 16 }}>
                            <Image
                                style={{

                                    bottom: 0,

                                }}
                                source={(4 === 4) && require("../assets/hill.png")}
                            />

                        </View>
                        <View>
                            <Image
                                style={{

                                    bottom: 0,

                                }}
                                source={(4 === 4) && require("../assets/piano.png")}
                            />

                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10,paddingHorizontal:20 }}>
                    <View><Text style={{ fontWeight: "700", fontSize: 20 }}>Folders</Text></View>
                    <View>
                        <Image
                            style={{

                                height: 24, width: 24

                            }}
                            source={(4 === 4) && require("../assets/folder.png")}
                        />

                    </View>
                </View>
             
            </View>
        )
    }
    const sectionTwo = () =>{
return(<View style={{backgroundColor:"green"}}></View>)
    }

   const  bottomBar = () =>{
        return(
            <View style={{ height: 100, backgroundColor: palette.warmGrey, bottom: 0,position:"absolute", width: Dimensions.get('window').width, flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", padding: 20 }} onStartShouldSetResponder= { () =>{
                setAppointments(0)
                console.log("bye")

            }}>
                <Image
                    style={{

                        height: 30, width: 30,

                    }}
                    source={(4 === 4) && require("../assets/stack.png")}
                />

            </View>
            <View style={{ padding: 20 }} >
                <Image
                    style={{

                        height: 55, width: 55,
                        top: -40
                    }}
                    source={(4 === 4) && require("../assets/plus.png")}
                />
            </View>
            <View style={{ padding: 20 }}
            onStartShouldSetResponder ={
                () =>{
                    setAppointments(1)
                    console.log("hi")
                }
            }>
                <Image
                    style={{

                        height: 30, width: 30

                    }}
                    source={(4 === 4) && require("../assets/settings.png")}
                />
            </View>
        </View>
        )
    }
    return (
        <View style={styles.container}>
            {section===0?sectionOne():sectionTwo()}
            {bottomBar()}
        </View>
    );
}


const styles = StyleSheet.create({

    container: { flex: 1, justifyContent: 'center', justifyContent: "center", alignItems: "center", backgroundColor: palette.warmGrey2, width: "100%" },
    text1: {
        fontFamily: typography.tertiary,
        fontSize: 34,
    },
    text2: {
        fontFamily: typography.secondary,
        fontSize: 34,
        opacity: 0.8,
        fontSize: 14
    }

});

export default HomeScreen;