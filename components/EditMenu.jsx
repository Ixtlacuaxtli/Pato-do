import { TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function EditMenu({ navigation }) {
	return (
		<TouchableOpacity onPress={() => (navigation.navigate('Edit'))}>
			<FontAwesome
				name='bars'
				size={22}
				color='black'
			/>
		</TouchableOpacity>
	)
}
