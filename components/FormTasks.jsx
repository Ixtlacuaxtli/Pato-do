import { TextInput, View, Text, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import SelectDropdown from 'react-native-select-dropdown';

const Campos = {
	texto: '',
	nPrioridad: '',
	fecha: ''
}

const Prioridades = ["Baja", "Media", "Alta"];

export const FormTasks = props => (
	<Formik
		initialValues={Campos}
		onSubmit={values => alert("Tarea: " + values.texto
		+ "\nPrioridad: " + values.nPrioridad)}
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
