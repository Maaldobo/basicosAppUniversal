import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';

const LoadingSpinner: React.FC = () => {
  // Spinner animado para indicar carga o procesos asíncronos
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return <Animated.View style={[styles.spinner, { transform: [{ rotate }] }]} />;
};

const styles = StyleSheet.create({
  spinner: {
    width: spacing.large,
    height: spacing.large,
    borderWidth: 4,
    borderColor: colors.primary,
    borderTopColor: 'transparent',
    borderRadius: spacing.large / 2,
  },
});

export default LoadingSpinner;
