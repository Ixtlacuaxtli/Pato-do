import { useState } from 'react';
import { FormCRUD } from './FormCRUD';

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

const apiFetch = () => {
	const [tasks, setTasks] = useState(null);

	const fetchTasks = async () => {
		const response = await fetch('http://192.168.1.11:4000/api/clientes');
		const json = await response.json();
		setTasks(json);
	}

	fetchTasks()

	alert(tasks)
}

export default function FormTasks (...props) {
	return (
		<FormCRUD onSubmitFunction={apiFetch()} {...props} />
	)
};

