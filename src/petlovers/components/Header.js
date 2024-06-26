import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({ showHeader }) => {
  if (!showHeader) {
    return null;
  }

  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content
        title="PetLovers"
        titleStyle={styles.title}
        style={styles.content}
      />
    </Appbar.Header>
  );
};

const styles = {
  header: {
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    color: '#5F5B5B',
    marginLeft: -20, 
  },
  content: {
    alignItems: 'flex-start', 
    justifyContent: 'center', 
    flex: 1, 
  },
};

export default Header;


