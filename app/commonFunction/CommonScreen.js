import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
// import { useEffect } from 'react/cjs/react.production.min';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { palette } from './sharedFunction';
import Third from "../screen/Third"

const CommonScreen = (props) => {
    const {
        imageName,
        content1,
        content2,
        navigation
    } = props
    //useEffect

    useEffect(() => {
        console.log("image", imageName)
    }, []);



    return (

            <View style={styles.container}>

                <Image
                    style={{
                        position: "absolute",
                        top: "0%",
                        bottom: "0.11%",
                        marginTop: 120,
                        background: "#EDF2F9"
                    }}
                    source={(((imageName === 1) && require(("../assets/First.png"))) || ((imageName === 2) && require(("../assets/group.png"))) || ((imageName === 3) && require(("../assets/FatherandSon.png"))) || ((imageName === 4) && require(("../assets/heroImage.png"))))}
                />
                <View >
                <Text style={{
                    fontFamily: "SF Pro Rounded",
                    lineHeight: 21,
                    fontSize: 18,
                    textAlign: "center",
                    marginTop: 200,
                }}>{content1}</Text>
                </View>
                <Text style={{
                    fontFamily: "SF Pro Rounded",
                    lineHeight: 21,
                    fontSize: 14,
                    textAlign: "center",
                    //marginTop:20,
                    padding: 45
                }}>{content2}
                </Text>
                <View style={{height:Dimensions.get('window').height /5.2,flexDirection:"row",alignItems:"center",justifyContent:"center",}} 
             >
                    <View style={{flexDirection:"row",}}>
                        {
                            ["1","2","3","4"].map((index,key)=>{
                               return(
                                <View style={{height:10,width:10,backgroundColor:`${imageName}` == index?palette.primary:palette.warmGrey5,borderRadius:5,marginRight:10}}/>
                               ) 
                            })
                        }
                            </View>
                <Image
                    style={{
                        bottom: "0.11%",
                    
                        background: "#EDF2F9"
                    }}
                    source={ (imageName === 4) && require("../assets/next.png")}
                />
                </View>
            
            </View>
        // </Swipeable>
    );
}


const styles = StyleSheet.create({

    container: { flex: 1, justifyContent: 'center', justifyContent: "center", alignItems: "center" },
    leftActions: {
        backgroundColor: palette.warmGrey5,
        justifyContent: "center",
        flex: 1
    },
    actionText: {
        color: "#fff",
        fontWeight: '600',
        padding: 20
    }
});

export default CommonScreen;