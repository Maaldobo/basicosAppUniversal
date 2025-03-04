import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from '../atoms/Text';
import Image from '../atoms/Image';
import { spacing } from '../../styles/spacing';

type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

const PaperNewsCard: React.FC<Props> = ({ title, description, imageUrl }) => {
  // Tarjeta animada que simula una hoja de papel desplegándose
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['-20deg', '0deg'],
  });

  return (
    <TouchableWithoutFeedback>
      <Animated.View style={[styles.card, { transform: [{ rotate }] }]}>
        <Image source={imageUrl} style={styles.image} />
        <Text variant="title">{title}</Text>
        <Text variant="body">{description}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    padding: spacing.medium,
    marginBottom: spacing.large,
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    height: 150,
    borderRadius: 8,
    marginBottom: spacing.small,
  },
});

export default PaperNewsCard;
