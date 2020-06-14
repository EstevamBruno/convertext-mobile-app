import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';

const Result = ({textTransform}) => {
  return (
    <TextInput
      style={styles.textArea}
      value={textTransform}
      multiline={true}
      numberOfLines={20}
      placeholder="Resultado..."
      placeholderTextColor="#737380"
    />
  );
};

export default Result;
