import { Checkbox } from 'react-native-paper'
import { useState } from 'react';

export default function CheckBoxItem( { id } ) {
	const [checked, setChecked] = useState(null);

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
