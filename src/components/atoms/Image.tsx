import React from 'react';
import { Image as RNImage, ImageStyle } from 'react-native';

type Props = {
  source: string;
  style?: ImageStyle;
};

const Image: React.FC<Props> = ({ source, style }) => {
  // Componente de imagen reutilizable con estilos por defecto (se recomienda optimizar en producción)
  return (
    <RNImage source={{ uri: source }} style={[{ width: '100%', height: 200 }, style]} />
  );
};

export default Image;
