import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import todos from '../data/tododb';
import EditMenu from './EditMenu';
import CheckBoxItem from './CheckBoxItem';

export default function ToDoList({ navigation }) {
	return (
		<View style={styles.container}>
			<FlatList
				data={todos}
				ItemSeparatorComponent={() => <View style={styles.separator} />}i
				renderItem= {({item: tarea}) => (
					<View key={tarea.id} style={[
						styles.taskContainer,
						styles.lowPriority,
						tarea.nPrioridad === 2 && styles.mediumPriority,
						tarea.nPrioridad === 3 && styles.highPriority
						]}>
						<View style={styles.checkBox}>
							<CheckBoxItem id={tarea.id}/>
						</View>
						<View style={styles.contenedorTexto}>
							<Text style={styles.texto}>{tarea.texto}</Text>
							<Text style={styles.texto}>Fecha: {tarea.fecha}</Text>
						</View>
						<View style={styles.editar}>
							<EditMenu navigation={navigation}/>
						</View>
					</View>
			)}
				keyExtractor={(item) => item.id}
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
