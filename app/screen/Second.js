import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import CommonScreen from "../commonFunction/CommonScreen"

const Second = (props) => {
    return (
        <View style={styles.container}>
            <CommonScreen    
            navigation ={props.navigation} 
            imageName={2} 
            content1={`Navigate work documents${"\n"} like a Pro `} 
            content2={`Scan and organize your work documents in structured folders. Scan single or multiple documents in one swift go. Merge scans into PDFs, reorder pages and share them on the fly. `} />
        </View>
    );
}


const styles = StyleSheet.create({

    container: { flex: 1, justifyContent: 'center', justifyContent: "center", alignItems: "center" },

});

export default Second;