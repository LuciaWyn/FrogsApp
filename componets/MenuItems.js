import {View,Image,TouchableOpacity, Text, StyleSheet} from 'react-native'

function MenuItems(props){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=>{props.viewChange('home')}}>
                <Image source={require('../assets/images/home.png')} style={[styles.buttonImg, styles.long]}  resizeMode={'stretch'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{props.viewChange('species')}}>
                <View style={[styles.menu, styles.buttonImg]}>
                    <View style={styles.menuItem} />
                    <View style={styles.menuItem} />
                    <View style={styles.menuItem} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>{props.viewChange('about')}}>
                <Image source={require('../assets/images/about.png')} style={styles.buttonImg}  resizeMode={'stretch'} />
            </TouchableOpacity>
        </View>
    );
}
export default MenuItems;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        borderTopColor: '#7f7f7f',
        borderTopWidth: 2,
        justifyContent: 'space-between',
        paddingBottom: 4
    },
    button:{
        width: 100,
        height: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonImg:{
        width: 50,
        height: 50,
        margin: 10
    },
    long:{
        width: 100
    },
    bigText:{
        fontSize: 32    
    },
    menu:{
        backgroundColor: 'lightgrey',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    menuItem:{
        backgroundColor: 'black',
        width: '80%',
        height: 10,
        borderRadius: 5
    }
})