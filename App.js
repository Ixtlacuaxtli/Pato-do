import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './components/Main';
import AboutScreen from './components/AboutScreen';
import { FormTasks } from './components/FormTasks';
import EditScreen from './components/EditScreen';

const Stack = createNativeStackNavigator();

//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View} from 'react-native';
//import { useState } from 'react';
//import * as ImagePicker from 'expo-image-picker';

//Here we import our custom or own made components
//import ImageViewer from './components/ImageViewer';
//import Button from './components/Button';

//Here we define our constants variables of our program, in this case is the image that
//we wan to display
//const OpossumImage = require('./assets/images/baby-opossum.png');

//Export default indicates that if we import this file, the function or the default thing
//that will import will be this one, which is called App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Main'
          component={Main}
        />
        <Stack.Screen
          name='About'i
          component={AboutScreen}
        />{/*
        <Stack.Screen
          name='Form'
          component={FormTasks}
        />
        */}
          <Stack.Screen
          name='Edit'
          component={EditScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
  //Here we will define our hook
  //const [selectImage, setSelectedImage] = useState(null);

  //Here we have an async function that will allow us to pick any image
  //The image will be save in result
  /*try{
    const pickImageAsync = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
      } else {
        alert("No has seleccionado ninguna imagen");
      }
    }
    catch(error) {
      alert("Sucedio un error al subir la imagen.");
    }
  return (
    {View is the main component of the App, you can nest many View components as you
        want, is the one that uses layouts and styles},
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <ImageViewer defaultImage={OpossumImage} selectedImage={selectImage}/>
          </View>
          <View style={styles.footerContainer}>
            <Button label="Selecciona una foto" action={pickImageAsync} theme='Primary'/>
            <Button label="Elijir esta foto" />
          </View>
          <StatusBar style="auto" />
        </View>
);*/
}

//Here we define our css config with StyleSheet module from react-native
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  }
});*/
