import React from 'react';
import { TouchableOpacity, StyleSheet, Text as RNText } from 'react-native';
import { colors } from '../../styles/colors';

type Props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<Props> = ({ title, onPress, variant = 'primary' }) => {
  // Botón reutilizable con variantes de estilo (primario y secundario)
  return (
    <TouchableOpacity style={[styles.button, styles[variant]]} onPress={onPress}>
      <RNText style={styles.text}>{title}</RNText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Button;
