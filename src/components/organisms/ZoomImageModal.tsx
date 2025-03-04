import React, { useEffect, useRef } from 'react';
import { Modal, Animated, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';
import Image from '../atoms/Image';

type Props = {
  visible: boolean;
  imageUrl: string;
  onClose: () => void;
};

const ZoomImageModal: React.FC<Props> = ({ visible, imageUrl, onClose }) => {
  // Modal que muestra una imagen en zoom con animaciones de opacidad y escala
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 5,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, opacityAnim, scaleAnim]);

  return (
    <Modal transparent visible={visible} animationType="none">
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View style={[styles.overlay, { opacity: opacityAnim }]} />
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.container, { transform: [{ scale: scaleAnim }] }]}>
        <Image source={imageUrl} style={styles.image} />
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    position: 'absolute',
    top: '20%',
    left: '5%',
    right: '5%',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.5,
    borderRadius: 8,
  },
});

export default ZoomImageModal;
