import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';

const Input: React.FC<TextInputProps> = (props) => {
  // Input de texto reutilizable con estilos base
  return <TextInput style={[styles.input, props.style]} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: spacing.medium,
    marginVertical: spacing.small,
  },
});

export default Input;
