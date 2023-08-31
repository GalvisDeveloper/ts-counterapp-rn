import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

const DimensionsScreen = () => {
	const { width, height } = useWindowDimensions();

	return (
		<View style={styles.container}>
			<View style={styles.redBox} />
			<View style={styles.blueBox} />
		</View>
	);
};

export default DimensionsScreen;

const styles = StyleSheet.create({
	container: { height: 300, backgroundColor: 'white' },
	redBox: { backgroundColor: 'red', height: 50, width: 50 },
	blueBox: { backgroundColor: 'blue', height: 100, width: 100 },
});
