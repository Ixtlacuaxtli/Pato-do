import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants'

import ToDoList from './ToDoList'

export default function Main({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>PaTo-Do</Text>
			<Button 
				title="Acerca" 
				onPress={() => navigation.navigate("About")}
			/>
			<Button
				title="Aniadir"
				onPress={() => alert('Hola')/*navigation.navigate("About")*/}
			/>
			<ToDoList navigation={navigation}/>
			<StatusBar style="auto"/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: Constants.statusBarHeight,
		flexGrow: 1,
	}
});
