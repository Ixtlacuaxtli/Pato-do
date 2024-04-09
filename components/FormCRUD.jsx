import { TextInput, Text, Button } from 'react-native';
import { Formik } from 'formik';
import SelectDropdown from 'react-native-select-dropdown';
import { FormStyles } from './styles/FormStyles.jsx';

const Campos = {
	texto: '',
	nPrioridad: '',
	fecha: ''
}

const Prioridades = ["Baja", "Media", "Alta"];

export const FormCRUD = ( { onSubmitFunction }, props ) => {
	return (
		<Formik
			initialValues={Campos}
			onSubmit={() => onSubmitFunction()}
		>
		{({ handleChange, handleBlur, handleSubmit, values }) => (
			<View>
				<View style={FormStyles.pregunta}>
					<Text>Tarea:</Text>
					<TextInput
						onChangeText={handleChange('texto')}
						onBlur={handleBlur('texto')}
						value={values.texto}
						style={FormStyles.textField}
					/>
				</View>
				<View style={FormStyles.pregunta}>
					<Text style={{marginRight: 15}}>Prioridad:</Text>
					<SelectDropdown
						data={Prioridades}
						onSelect={handleChange('nPrioridad')}
					/>
				</View>
				<View style={FormStyles.pregunta}>
					<Text>Fecha:</Text>
						<TextInput
							onChangeText={handleChange('fecha')}
							onBlur={handleBlur('fecha')}
							value={values.fecha}
							style={FormStyles.textField}
						/>
				</View>
				<Button onPress={handleSubmit} title='Submit' />
			</View>
		)}
		</Formik>
	)
}
