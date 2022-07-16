import {ScrollView, View, TouchableOpacity, Image, StyleSheet,Text} from 'react-native'
import { useState } from 'react';
import frogs from '../data/frogs.js';

function Species(props){
    const [list, listIt] = useState(true);
    const frogData = frogs();

    const frogMap = frogData.map((val)=>(
        <TouchableOpacity style={styles.frogs} key={val.id} onPress={()=>{props.showFrog(val.id)}}>
                <Image style={styles.frogImage} source={val.image} resizeMode={'stretch'}/>    
                <Text style={styles.frogText}>{val.name}</Text>
        </TouchableOpacity>
    ))
    return(
        <ScrollView >
            <View style={styles.frogContainer}>{frogMap}</View>
        </ScrollView>
    )
}

export default Species;

const styles = StyleSheet.create({
    frogContainer:{
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    frogImage:{
        width: '100%',
        height: 150,
        backgroundColor: '#78Af9f'
    },
    frogs:{
        padding: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '50%'
    },
    frogText:{
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
    }
});