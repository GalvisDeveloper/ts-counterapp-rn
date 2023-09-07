import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TaskScreen = () => {
	return (
		<View style={styles.container}>
			<View style={[styles.box, styles.box1]} />
			<View style={[styles.box, styles.box2]} />
			<View style={[styles.box, styles.box3]} />
		</View>
	);
};

export default TaskScreen;
const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		flex: 1,

		//sec
		// justifyContent: 'center',
		//th
		// justifyContent: 'center',
		// fo
		// justifyContent: 'space-between',
		// fif
		// flexDirection: 'column',
		// justifyContent: 'space-between',

		// six
		// alignItems: 'center',
		// justifyContent: 'center',

		//eight
		// alignSelf: 'center',
		justifyContent: 'flex-end',
        flexDirection: 'row',
        // width: 200,
        // flexWrap: 'wrap',
        alignItems: 'center',
        

		// position: 'absolute',
	},
	box1: {
		// first
		// sec
		// th
		// alignSelf: 'flex-end',
		// fo
		// alignSelf: 'flex-end',
		// fif
		// six
		// flex: 2,
		// sev
		// eigh
		// nine
		// ten
		backgroundColor: 'blue',

		// alignSelf: 'flex-end',
	},
	box2: {
		// first
		// flex: 1,
		// sec
		// th
		// alignSelf: 'flex-start',
		// fo
		// alignSelf: 'center',
		// fif
		// six
		// flex: 2,
		// sev
		// width: '25%',
		// eigh
		// left: '24%',
		// nine
		// ten
		backgroundColor: 'orange',
		// alignSelf: 'center',
	},
	box3: {
		// first
		// sec
		// width: '100%',
		// th
		// alignSelf: 'center',
		// fo
		// fif
		// six
		// flex: 4,
		// sev
		// eigh
		// nine
		// ten
		backgroundColor: 'cyan',
		// alignSelf: 'flex-start'
	},
	box: {
		width: 100,
		height: 100,
		borderWidth: 10,
		borderColor: 'white',
		color: 'white',
		// backgroundColor: 'green',

		// fif
		// height: '100%',

		// sex
		// width: '100%',

		//eigh

		//nine
        // left: '10%',
        // alignSelf: 'center',
	},
});
