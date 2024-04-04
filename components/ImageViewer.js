import { StyleSheet, Image } from 'react-native';

//Here we define our function like a component, the variable that we will be
//using like in html is imageSource
export default function ImageViewer({defaultImage, selectedImage}) {
  //imageSource will be {uri:selectedImage} if there is any value at selectedImage
  //if there is not value in that prop, we will be using defualtImage instead
  const imageSource = selectedImage ? { uri: selectedImage } : defaultImage;

  return (
    {/*Here we use the parameter imageSource in our component*/},
    <Image source={imageSource} style={styles.image} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})
