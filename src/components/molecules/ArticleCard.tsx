import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import { colors } from '../../styles/colors';

type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

const ArticleCard: React.FC<Props> = ({ title, description, imageUrl }) => {
  // Tarjeta de artículo que muestra imagen, título y descripción
  return (
    <View style={styles.card}>
      <Image source={imageUrl} style={styles.image} />
      <Text variant="title" style={styles.title}>{title}</Text>
      <Text variant="body" style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: colors.background,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  image: {
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    color: colors.text,
  },
  description: {
    color: colors.mutedText,
  },
});

export default ArticleCard;
