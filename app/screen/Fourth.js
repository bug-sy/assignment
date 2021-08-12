import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import CommonScreen from "../commonFunction/CommonScreen"

const Fourth = (props) => {
    return (
        <View style={styles.container}>
            <CommonScreen imageName={4} 
            content1={`Covert Pictures to Text with our ${"\n"}next generation offline OCR `} 
            content2={`Leverage our cutting edge machine learning OCR to convert documents to text in seconds with accurate results. Share OCR scans as Doc files or PDFs in seconds`}   
            navigation ={props.navigation}/>
        </View>
    );
}


const styles = StyleSheet.create({

    container: { flex: 1, justifyContent: 'center', justifyContent: "center", alignItems: "center" },

});

export default Fourth;