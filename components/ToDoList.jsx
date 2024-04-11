	import { useState, useEffect } from 'react';
	import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
	import todos from '../data/tododb';
	import EditMenu from './EditMenu';
	import CheckBoxItem from './CheckBoxItem';

	export default function ToDoList({ navigation }) {
		const [tasks, setTasks] = useState([]);

		const param = {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		}

	const fetchTasks = async () => {
		const response = await fetch('http://192.168.1.11:4000/api/clientes', param);
		const json = await response.json();
		setTasks(json);
	}

	useEffect(() => {
		fetchTasks();
	}, [])

	return (
		<View style={styles.container}>
			<FlatList
				data={tasks.body}
				ItemSeparatorComponent={() => <View style={styles.separator} />}i
				renderItem= {({item: tarea}) => (
					<View key={tarea.idTask} style={[
						styles.taskContainer,
						styles.lowPriority,
						tarea.idPrioridad === 2 && styles.mediumPriority,
						tarea.idPrioridad === 3 && styles.highPriority
						]}>
						<View style={styles.checkBox}>
							<CheckBoxItem id={tarea.id} complecion={tarea.complecion}/>
						</View>
						<View style={styles.contenedorTexto}>
							<Text style={styles.texto}>{tarea.titulo}</Text>
							<Text style={styles.texto}>Fecha: {tarea.fecha}</Text>
							<Text style={styles.texto}>complecion: {tarea.complecion}</Text>
						</View>
						<View style={styles.editar}>
							<EditMenu navigation={navigation}/>
						</View>
					</View>
			)}
				keyExtractor={(item) => item.idTask}
				/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		//flexDirection: 'row',
		//alignItems: 'center',
		margin: 22,
		flex: 1,
	},
	taskContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		//justifyContent: 'space-between',
		flexWrap: 'wrap',
		borderRadius: 15,
	},
	separator: {
		height: 50
	},
	lowPriority: {
		backgroundColor: '#ccfcaa'
	},
	mediumPriority: {
		backgroundColor: '#fff59e'
	},
	highPriority: {
		backgroundColor: '#ffacde'
	},
	checkBox: {
		margin: 15,
		width: 50,
		alignItems: 'center',
		justifyContent: 'center'
	},
	contenedorTexto: {
		flexDirection: 'column',
		justifyContent: 'flex-end',
		width: 150,
		flexGrow: 1
	},
	text: {
	},
	editar: {
		margin: 22,
		alignItems:'center',
		justifyContent: 'center',
	}
});
