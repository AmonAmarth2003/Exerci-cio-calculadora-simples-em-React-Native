import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  
const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', 'C', '=', '+']
  ];

  return (
    <View style={styles.container}>
      <View style={styles.display} />

      <View style={styles.grid}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((item, colIndex) => {
              const isOperator = ['/', '*', '-', '+', '='].includes(item);
              const isSpecial = item === '=';

              return (
                <View
                  key={colIndex}
                  style={[
                    styles.button,
                    isOperator && styles.operatorButton,
                    isSpecial && styles.equalButton
                  ]}
                >
                  <Text style={styles.buttonText}>{item}</Text>
                </View>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'flex-end',
    padding: 16,
  },

  display: {
    height: 120,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: 20,
  },

  grid: {
    gap: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    width: 70,
    height: 70,
    backgroundColor: '#666',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  operatorButton: {
    backgroundColor: '#555',
  },

  equalButton: {
    backgroundColor: '#ff9500',
  },

  buttonText: {
    color: '#fff',
    fontSize: 22,
  },
});