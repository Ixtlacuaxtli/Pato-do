import { Text, View, StyleSheet } from 'react-native';

export default function EditScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.texto}>Aqui editas, mano</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	texto: {
		fontSize: 18
	}
})
