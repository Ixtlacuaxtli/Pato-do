import { Text, View, StyleSheet } from 'react-native';
import { FormUpdate } from './FormUpdate';

export default function EditScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.texto}>Aqui editas, mano</Text>
			<FormUpdate id={1} />
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
