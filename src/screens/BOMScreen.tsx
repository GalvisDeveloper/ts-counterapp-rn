import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BOMScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>BOMScreen</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: { backgroundColor: 'black', flex: 1 },
	title: {
		fontSize: 20,
		backgroundColor: 'red',
		borderWidth: 10,
		paddingHorizontal: 100,
		paddingVertical: 20,
		marginHorizontal: 20,
		textAlignVertical: 'center',
		textAlign: 'center',
	},
});

export default BOMScreen;
