import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

interface PropsFab {
	direction?: 'l' | 'r';
	onPress: () => void;
	title: String;
}

const Fab = (props: PropsFab) => {
	const { onPress, direction, title } = props;
	return (
		<TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple('white', true)}>
			<View style={[styles.fab, direction === 'l' ? styles.fabL : styles.fabR]}>
				<Text style={styles.fabText}>{title}</Text>
			</View>
		</TouchableNativeFeedback>
	);
};

const styles = StyleSheet.create({
	fab: {
		backgroundColor: 'white',
		width: 60,
		height: 60,
		borderRadius: 100,
		justifyContent: 'center',
		shadowColor: 'white',
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 24,
	},
	fabText: {
		color: 'black',
		fontSize: 25,
		alignSelf: 'center',
		fontWeight: 'bold',
	},
	fabL: {
		left: 10,
	},
	fabR: {
		right: 10,
	},
});

export default Fab;
