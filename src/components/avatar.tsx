import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {getProfileFetch} from '../store/states/profileState';
import {useAppDispatch} from '../hooks/store-hooks';
import {AvatarModel} from '../models';

export default function Avatar({
  uri,
  userId,
  size = 45,
  round = true,
}: AvatarModel) {
  const dispatch = useAppDispatch();
  const style = styles(size, round);
  const navigateToProfile = () => {
    dispatch(getProfileFetch(userId));
  };

  return (
    <TouchableOpacity onPress={navigateToProfile}>
      <Image source={{uri}} style={style.image} />
    </TouchableOpacity>
  );
}

const styles = (size: number, round: boolean) =>
  StyleSheet.create({
    image: {
      height: size,
      width: size,
      borderRadius: round ? size / 2 : 0,
      marginRight: 8,
    },
  });
