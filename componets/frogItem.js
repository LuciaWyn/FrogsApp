import * as React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native' 

function frogItem (props) {
    console.log(props);
    return(
        <View style={styles.frogs}>   
            <Image style={styles.frogImage} source={props.image}/>    
            <Text>{props.name}</Text>
        </View>
    )
}
export default {frogItem}

const styles = StyleSheet.create({
    frogs:{
        width: "100%",
        height: 200
    },
    frogImage:{
        width: 100,
        height: 100
    }
})