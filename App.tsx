import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import DimensionsScreen from './src/screens/DimensionsScreen';
import PositionScreen from './src/screens/PositionScreen';
import FlexScreen from './src/screens/FlexScreen';
import TaskScreen from './src/screens/TaskScreen';

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			{/* <CounterScreen /> */}
			{/* <BOMScreen /> */}
			{/* <DimensionsScreen /> */}
			{/* <PositionScreen /> */}
			{/* <FlexScreen /> */}
			<TaskScreen />
		</SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({
	container: { height: '100%', width: '100%' },
});
