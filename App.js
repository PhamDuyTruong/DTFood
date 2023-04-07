import { StyleSheet, Text, View, StatusBar } from 'react-native';
import SigninScreen from './screens/authScreen/SigninScreen';
import SigninWelcomeScreen from './screens/authScreen/SigninWelcomeScreen';
import RootNavigation from './navigation/rootNavigation';
import {colors} from './global/styles'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor={colors.buttons}
      />
       <RootNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
