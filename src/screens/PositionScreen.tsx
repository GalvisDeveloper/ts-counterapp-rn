import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { height } = Dimensions.get('window');

const PositionScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.titleCt}></View>
			<View style={styles.contentCt}></View>
			<View style={styles.greenCt}></View>
			<View style={styles.redCt}></View>
			<View style={styles.midCt}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleCt: {
		width: 100,
		height: 100,
		backgroundColor: 'purple',
		borderWidth: 10,
		borderColor: 'white',
    bottom: 0,
    left: 0,
		position: 'absolute',
	},
	contentCt: {
		width: 100,
		height: 100,
		backgroundColor: 'orange',
		borderWidth: 10,
		position: 'absolute',
		bottom: 0,
		right: 0,
		borderColor: 'white',
	},
	greenCt: {
		width: 100,
		height: 100,
		backgroundColor: 'green',
		borderWidth: 10,
		position: 'absolute',
		top: 0,
		right: 0,
		borderColor: 'white',
	},
	redCt: {
		width: 100,
		height: 100,
		backgroundColor: 'red',
		borderWidth: 10,
		position: 'absolute',
		top: 0,
		left: 0,
		borderColor: 'white',
	},
	midCt: {
		width: 100,
		height: 100,
		backgroundColor: 'red',
		borderWidth: 10,
		alignSelf: 'center',
		borderColor: 'white',
	},
});

export default PositionScreen;
