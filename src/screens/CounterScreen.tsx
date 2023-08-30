import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import Fab from '../components/Fab';

export const CounterScreen = () => {
	const [counter, setCounter] = useState(10);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Counter: {counter}</Text>

			<View style={styles.buttonCt}>
				<Fab onPress={() => setCounter(counter - 1)} title='-1' direction='l' />
				<Fab onPress={() => setCounter(counter + 1)} title='+1' direction='r' />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		justifyContent: 'center',
	},
	title: {
		textAlign: 'center',
		fontSize: 40,
		color: 'white',
	},
	buttonCt: {
		bottom: 0,
		position: 'absolute',
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
	},
});
