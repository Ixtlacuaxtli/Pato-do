import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({label, action, theme}) {
  if (theme === 'Primary') {
    return (
      <View style={[styles.buttonContainer, {borderWidth: 4, borderColor: '#eefe25', borderRadius: 18}]}>
        <Pressable style={[styles.button, {backgroundColor: '#fff'}]} onPress={action}>
          <Text style={[styles.buttonLabel], {color: '#000'}}>{label}</Text>
        </Pressable>
      </View>
  );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => {alert('Haz presionado un boton')}}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 9,
    width: 320,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#cce',
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    fontSize: 16,
  },
})
