import { Formik } from 'formik';
import { View } from 'react-native';
import { useState, useEffect } from 'react';
import { FormCRUD } from './FormCRUD';

export const FormUpdate = ( { id }) => {
	const defaultCampos = {
		id: 0,
		texto: '',
		nPrioridad: '',
		fecha: ''
	}

	const [task, setTask] = useState();
	const [campos, setCampos] = useState(defaultCampos);

	const param = {
		method: 'GET',
		mode: 'cors',
		cache: 'no-cache',
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	}

	const fetchTask = async () => {
		const response = await fetch('http://192.168.1.11:4000/api/clientes/' + id, param);
		const json = await response.json();
		setTask(json);
	}

	useEffect(() => {
		fetchTask();
	}, [])

	useEffect(() => {
		if (task) {
			const obj = task.body[0]

			let prioridad

			if (obj.idPrioridad == 3) {
				prioridad = 'Alta'
			}
			else if (obj.idPrioridad == 2) {
				prioridad = 'Media'
			}
			else {
				prioridad = 'Baja'
			}

			setCampos({
				id: obj.idTask,
				texto: obj.titulo,
				nPrioridad: prioridad,
				fecha: obj.fecha
			})
		}
	}, [task])

	return (
		<View key={campos.id}>
			<Formik
				initialValues={campos}
				onSubmit={() => console.log(campos)}
			>
				{(props) => (
					<FormCRUD {...props} />
				)}
			</Formik>
		</View>
	)
}
