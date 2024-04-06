import { TextInput, View, Text, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import SelectDropdown from 'react-native-select-dropdown';

const Campos = {
	texto: '',
	nPrioridad: '',
	fecha: ''
}

const Prioridades = ["Baja", "Media", "Alta"];

const apiRequest = () => {
	const request = new XMLHttpRequest();

	request.addEventListener('readystatechange', () => {
		if (request.readyState === 4) {
			alert(request.response);
			console.log(request);
		} 
	})

	request.open('GET', 'http://192.168.1.11:4000/api/clientes/1');
	request.send();
}

export const FormTasks = props => (
	<Formik
		initialValues={Campos}
		onSubmit={() => apiRequest()}
	>
	{({ handleChange, handleBlur, handleSubmit, values }) => (
		<View>
			<View style={styles.pregunta}>
				<Text>Tarea:</Text>
				<TextInput
					onChangeText={handleChange('texto')}
					onBlur={handleBlur('texto')}
					value={values.texto}
					style={styles.textField}
				/>
			</View>
			<View style={styles.pregunta}>
				<Text style={{marginRight: 15}}>Prioridad:</Text>
				<SelectDropdown
					data={Prioridades}
					onSelect={handleChange('nPrioridad')}
				/>
			</View>
			<View style={styles.pregunta}>
				<Text>Fecha:</Text>
					<TextInput
						onChangeText={handleChange('fecha')}
						onBlur={handleBlur('fecha')}
						value={values.fecha}
						style={styles.textField}
					/>
			</View>
			<Button onPress={handleSubmit} title='Submit' />
		</View>
	)}
	</Formik>
);

const styles = StyleSheet.create({
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
