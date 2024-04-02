import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { Button, useTheme, Provider as PaperProvider } from 'react-native-paper';

const MyComponent = (props) => (
  <Button style={styles.button} mode="contained" uppercase={false} onPress={() => console.log('Pressed')} {...props}>
    
  </Button>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#827397',
    width: 336,
    marginTop: 10,
    padding: 5,
    textTransform: 'none',
    borderRadius: 10,
  }
});

export default MyComponent;