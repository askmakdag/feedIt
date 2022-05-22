import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FeedService from '../services/feedService';
import Post from '../components/post';
import {Bell, MagnifyingGlass} from 'phosphor-react-native';

export default function Dashboard() {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Image
          source={require('../assets/images/brand.png')}
          style={{height: 25, width: 25}}
        />
      ),
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <View style={styles.search}>
            <MagnifyingGlass size={16} weight={'bold'} color={'#fff'} />
          </View>

          <View style={styles.bell}>
            <Bell size={16} weight={'bold'} color={'#fff'} />
          </View>
        </View>
      ),
    });

    FeedService.getItems(1)
      .then(res => {
        console.log('result: ', res);
        setPosts(res?.data);
      })
      .catch(err => {
        console.log('error: ', err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161616',
  },
  search: {
    padding: 4,
    backgroundColor: '#484848',
    borderRadius: 12,
    marginRight: 12,
  },
  bell: {
    padding: 4,
    backgroundColor: '#484848',
    borderRadius: 12,
  },
});
