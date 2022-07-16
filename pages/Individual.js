import {View, Image, StyleSheet, Text, ScrollView} from 'react-native'
import frogs from '../data/frogFull';

function Individual(props){
    const frog = frogs(props.id);
    const keys = frog.keys;
    let keyInfo = <View/>
    if(keys != undefined){
        keyInfo = keys.map((val) => (
            <View key={val}><Text style={style.infoTitle}>{val}</Text><Text style={style.info}>{frog[val]}</Text></View>
          ));
    }
    
    
    return (
        <ScrollView contentContainerStyle={style.containerMainScroll}>
            <Image resizeMode={'stretch'} style={style.image} source={frog.image}/>
            <Text style={style.title}>{frog.name}</Text>
            {keyInfo}
        </ScrollView>
    )
}
export default Individual;
const style = StyleSheet.create({
    title:{
        fontSize: 20,
        color: '#005700',
        textAlign: 'center'
    },
    image:{
        width: "100%", 
        maxHeight: 400
    },
    infoTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    info:{
        fontSize: 14
    },
    containerMainScroll:{
        height: '110%',
    }
})