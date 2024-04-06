import { Checkbox } from 'react-native-paper'
import { useState } from 'react';

export default function CheckBoxItem( { id, complecion } ) {
	const [checked, setChecked] = useState(complecion ? 'checked' : null);

	return (
		<Checkbox
			status={checked ? 'checked' : 'unchecked'}
			onPress={() => {
				setChecked(!checked)
			}}
			testId={id}
		/>
	)
}
