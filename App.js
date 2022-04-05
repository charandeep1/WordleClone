import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { borderLeftColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { colors } from "./src/constants";
import Keyboard from './src/components/Keyboard';
import reactDom from 'react-dom';

export default function App() {

  const word = "whatsup";
  const letters = word.split('');


  return (
    <SafeAreaView style={styles.container}>

      <StatusBar style="light" />

      <Text style={styles.title}> WORDLE</Text>
      <View style={styles.map}>
        <View style={styles.row}>
          {letters.map(letter => <View style={styles.cell} />)}






        </View>
      </View>
      <Keyboard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',


  },
  title: {
    color: colors.lightgrey,
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 7,

  },
  map: {

    alignSelf: "stretch",
    height: 100,

  },
  row: {

    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",

  },
  cell: {
    borderWidth: 3,
    borderColor: "darkgrey",
    aspectRatio: 1,
    flex: 1,
    margin: 3,
    maxWidth: 70,

  },


});
