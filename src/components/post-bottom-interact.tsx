import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FeedItPhosphorIcon from './feedit-phosphor-icon';

interface PostBottomInteractModel {
  icon: JSX.Element;
  color?: string;
  text?: number;
}

export default function PostBottomInteract({
  icon,
  color = '#A5A5A5',
  text,
}: PostBottomInteractModel) {
  return (
    <View style={styles.container}>
      <FeedItPhosphorIcon
        icon={icon}
        size={18}
        weight={'regular'}
        color={color}
        style={styles.icon}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  icon: {
    padding: 4,
    margin: 4,
  },
  text: {
    color: '#fff',
  },
});
