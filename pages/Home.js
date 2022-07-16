import { StyleSheet, Text, View, FlatList, Image,TouchableOpacity, ScrollView } from 'react-native';
import frogs from '../data/frogs.js';

//lifecycle image source https://www.freepik.com/vectors/tadpole Tadpole vector created by macrovector

function Home(props){
    const frogData = frogs();
    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Scientify Name: <Text style={styles.science}>Anura</Text></Text>
                <View style={styles.frogContainer}>
                    <FlatList horizontal={true} 
                    data={frogData} 
                    initialScrollIndex={0.25}
                        renderItem={({ item, index, separators }) => (
                        <TouchableOpacity onPress={()=>{props.showFrog(item.id)}} key={item.id} style={styles.frogs} >   
                            <Image style={styles.frogImage} source={item.image}/>    
                            <Text style={styles.frogText}>{item.name}</Text>
                        </TouchableOpacity>
                        )}
                    />
                </View>
                <Text style={styles.title}>Lifecycle of a Frog</Text>
                <Image resizeMode={'stretch'} style={styles.reproductiveImage} source={require('../assets/images/27663.jpg')}/>
                <Text style={styles.paragraph1}>Here are the stages of the reproduction of Frogs!</Text>
                <Text style={styles.paragraph2}>1) Adult frogs lay eggs in a body of water.</Text>
                <Text style={styles.paragraph2}>2) The eggs grow in size.</Text>
                <Text style={styles.paragraph2}>3) The eggs hatch tiny little tadpoles.</Text>
                <Text style={styles.paragraph2}>4) Tadpoles start to grow legs.</Text>
                <Text style={styles.paragraph2}>5) Young frogs still have tails.</Text>
                <Text style={styles.paragraph2}>5) Adult frogs repeat the cycle.</Text>
            </ScrollView>
        </View>
    );
}

export default Home;

const styles =  StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        color: 'black',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        textAlign: 'center',
        width: '100%',
        alignItems: 'center',
    },
    science:{
        fontStyle: 'italic'
    },
    frogContainer:{
        borderTopColor: 'darkred',
        borderBottomColor: 'darkred',
        borderTopWidth: 3,
        borderBottomWidth: 3,
        height: 210,
    },
    frogs:{
        height: 200,
        padding: 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    frogImage:{
        width: "auto",
        minWidth: 150,
        maxWidth: 350,
        height: 150
    },
    frogText:{
        textAlign: 'center'
    },
    reproductiveImage:{
        width: '100%',
        height: 500
    },
    title:{
        fontSize: 20,
        textAlign: 'center',
    },
    paragraph1:{
        fontSize: 16,
        textAlign: 'center'
    },
    paragraph2:{
        fontSize: 15
    }
});