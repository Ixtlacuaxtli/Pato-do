import { useState } from 'react';
import { FormCRUD } from './FormCRUD';
import { View, Text } from 'react-native';
import { Formik } from 'formik';

const apiRequest = (e) => {
	let idPrioridad;
	const nPrioridad = e.nPrioridad

	if(nPrioridad == 'Alta') {
		idPrioridad = 3
	} 
	else if (nPrioridad == 'Media') {
		idPrioridad = 2
	}
	else {
		idPrioridad = 1
	}

	const jsonRequest = {
		"complecion": 0,
		"titulo": e.texto,
		"idPrioridad": idPrioridad,
		"fecha": e.fecha,
	}
	const request = new XMLHttpRequest();

	request.addEventListener('readystatechange', () => {
		if (request.readyState === 4) {
			alert(request.response);
			console.log(request);
		} 
	})

	request.open('PUT', 'http://192.168.1.11:4000/api/clientes/');
	request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
	request.send(JSON.stringify(jsonRequest));
	
	//console.log(JSON.stringify(jsonRequest));
}

const apiFetch = () => {
	const [tasks, setTasks] = useState(null);

	const fetchTasks = async () => {
		const response = await fetch('http://192.168.1.11:4000/api/clientes');
		const json = await response.json();
		setTasks(json);
	}

	fetchTasks()

	console.log(json)
}

const Campos = {
	texto: '',
	nPrioridad: '',
	fecha: ''
}

export const FormTasks = () => {
	return (
		<View>
			<Formik
				initialValues={Campos}
				onSubmit={(e) => {
					apiRequest(e);
				}}
			>
			{(props) => (
				{/*<FormCRUD />*/},
				<FormCRUD {...props} />
			)}
			</Formik>
		</View>
	)
}

