import { StyleSheet, Text, View } from 'react-native';

function AboutUs(){
    return(
        <View style={styles.container}>
            <Text style={styles.infoTitle}>About Us</Text>
            <Text style={styles.info}>Developed by the GitHub user @LuciaWyn</Text>
            <Text style={styles.info}>All Sources for the images and text have been referenced, in the source code.</Text>
        </View>
    );
}

export default AboutUs;

const styles =  StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        color: 'black',
        justifyContent: 'flex-start',
        alignContent: 'flex-start'
    },
    infoTitle:{
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    info:{
        fontSize: 16
    },
});