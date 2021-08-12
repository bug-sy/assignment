import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import CommonScreen from "../commonFunction/CommonScreen"

const First = (props) => {
    return (
        <View style={styles.container}>
            <CommonScreen imageName={1}  
             navigation ={props.navigation} 
             content1={`Scan anything in HD,${"\n"} wherever you are...`} 
             content2={`Simply launch the AirScan app and scan any document, papers or real world photographs in seconds.`} />
        </View>
    );
}


const styles = StyleSheet.create({

    container: { flex: 1, justifyContent: 'center', justifyContent: "center", alignItems: "center" },

});

export default First;