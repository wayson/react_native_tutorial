import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.contianerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  contianerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;