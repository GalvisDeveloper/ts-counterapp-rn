import React from 'react';
import { SafeAreaView } from 'react-native';
import BOMScreen from './src/screens/BOMScreen';
import { CounterScreen } from './src/screens/CounterScreen';

const App = () => {
	return (
		<SafeAreaView>
			<CounterScreen />
			<BOMScreen />
		</SafeAreaView>
	);
};

export default App;
