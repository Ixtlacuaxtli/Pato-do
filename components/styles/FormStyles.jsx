import { StyleSheet } from 'react-native';

export const FormStyles = StyleSheet.create({
	container: {
		margin: 22,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		backgroundColor: '#ef2'
	},
	textField: {
		backgroundColor: '#fff',
		width: 80,
		flexGrow: 1,
		marginLeft: 15
	},
	pregunta: {
		margin: 15,
		Width: 280,
		flexGrow: -1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'flex-start'
	}
});
