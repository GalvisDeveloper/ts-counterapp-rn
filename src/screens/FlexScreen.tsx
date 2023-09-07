import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FlexScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={[styles.box1, styles.box]}>Box 1</Text>
			<Text style={[styles.box2, styles.box]}>Box 2</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
			<Text style={[styles.box3, styles.box]}>Box 3</Text>
		</View>
	);
};

export default FlexScreen;

const styles = StyleSheet.create({
	box: {
		fontSize: 30,
		borderWidth: 2,
		borderColor: 'white',
		// flex: 1,
		color: 'white',
	},
	box1: {
		// alignSelf: 'flex-end',
	},
	box2: {
		// alignSelf: 'center',
	},
	box3: {
		// alignSelf: 'flex-start'
	},
	container: {
		flex: 1,
		backgroundColor: 'black',
		// justifyContent: 'flex-end',
        // flexDirection: 'row',
        // alignItems: 'flex-end',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
		flexDirection: 'row',
	},
});
