import { TextInput, Text, Button, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { FormStyles } from './styles/FormStyles.jsx';


const Prioridades = ["Baja", "Media", "Alta"];

export const FormCRUD = ( { handleChange, handleBlur, handleSubmit, values } ) => {
	return (
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
					defaultValue={values.nPrioridad}
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
	)
}
