import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const StudentInfoScreen = () => {
  const name = 'Drin';
  const surname = 'Vllasi';
  const fullname = `${name} ${surname}`;           // "Drin Vllasi"
  const birthday = '25/10/2008';                   // ← use string!
  const city = 'Prishtina';
  const address = 'exampleexample';

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Fullname:</Text>
      <Text style={styles.value}>{fullname}</Text>

      <Text style={styles.label}>Birthday:</Text>
      <Text style={styles.value}>{birthday}</Text>

      <Text style={styles.label}>City:</Text>
      <Text style={styles.value}>{city}</Text>

      <Text style={styles.label}>Address:</Text>
      <Text style={styles.value}>{address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    color: '#666',
    marginTop: 16,
    marginBottom: 4,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default StudentInfoScreen;