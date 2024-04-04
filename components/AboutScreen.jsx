import { Button, View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
	return(
		<View style={styles.texto}>
			<Text> Pantalla de Acerca </Text>
		</View>
	)
}

const styles = StyleSheet.create({
	texto: {
		flex: 1,
		alignItems: 'center', 
		justifyContent: 'center'
	}
});
