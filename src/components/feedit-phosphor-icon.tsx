import React from 'react';
import {View} from 'react-native';
import {IconContext} from 'phosphor-react-native';

export default function FeedItPhosphorIcon({
  icon,
  weight = 'regular',
  size = 32,
  color = '#E5E5E5',
  style = {},
}) {
  return (
    <IconContext.Provider value={{color, size, weight, style}}>
      <View>{icon}</View>
    </IconContext.Provider>
  );
}
