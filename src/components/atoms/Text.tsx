import React from 'react';
import { Text as RNText, TextStyle } from 'react-native';
import { typography } from '../../styles/typography';
import { colors } from '../../styles/colors';

type Props = {
  children: React.ReactNode;
  variant?: 'title' | 'subtitle' | 'body' | 'caption';
  style?: TextStyle;
};

const Text: React.FC<Props> = ({ children, variant = 'body', style }) => {
  // Componente de texto reutilizable con estilos tipográficos y de color
  return (
    <RNText style={[typography[variant], { color: colors.text }, style]}>
      {children}
    </RNText>
  );
};

export default Text;
