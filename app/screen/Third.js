import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import CommonScreen from "../commonFunction/CommonScreen"

const Third = (props) => {
    return (
        <View style={styles.container}>
            <CommonScreen imageName={3} 
            content1={`Less time scanning homework ${"\n"}= more time for fun`}
             content2={`Scanning of homework and assignments are a breeze with AirScan. Capture scans, generate PDFs and push them to any app installed on your phone. Its that easy!`} 
             navigation ={props.navigation}
             />
        </View>
    );
}


const styles = StyleSheet.create({

    container: { flex: 1, justifyContent: 'center', justifyContent: "center", alignItems: "center" },

});

export default Third;