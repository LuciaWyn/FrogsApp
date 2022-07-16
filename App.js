import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import {useState} from 'react';
import MenuItems from './componets/MenuItems';
import Home from './pages/Home';
import AboutUs from './pages/About';
import Species from './pages/Species';
import Individual from './pages/Individual';

export default function App() {
  const [page, pageLocation] = useState('home');
  const [SpeciesIndiv, indiv] = useState(1);
  let Content = <Home/>
  const changeIt = (pg) =>{
    pageLocation(pg);
  }
  const frogy = (id) =>{
    indiv(id);
    pageLocation('individual')
  }
  if(page === 'home'){
    Content = <Home showFrog={frogy} />
  }
  else if(page === 'species'){
    Content = <Species showFrog={frogy}/>
  }
  else if(page === 'about'){
    Content = <AboutUs/>
  }
  else if(page === 'individual'){
    Content = <Individual id={SpeciesIndiv} />
  }
  else{
    Content = <Home showFrog={frogy} />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Frogs</Text>
        <View style={styles.containerMain}>{Content}</View>
      <MenuItems viewChange={changeIt}/>
      <StatusBar style="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
  },
  head:{
    fontSize: 25,
    color: 'darkred',
    textAlign: 'center'
  },
  containerMain:{
    width: '100%',
    flex: 1,
  },

});
