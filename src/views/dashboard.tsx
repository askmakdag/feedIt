import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Post from '../components/post';
import {Bell, MagnifyingGlass} from 'phosphor-react-native';
import Container from '../components/styled/container';
import {getFeedFetch} from '../store/states/feedState';
import {useDispatch, useSelector} from 'react-redux';

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {feed, isLoading} = useSelector(s => s.feed);

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
    dispatch(getFeedFetch());
  }, []);

  const handleRefresh = () => {
    dispatch(getFeedFetch());
  };

  return (
    <Container>
      <FlatList
        data={feed}
        renderItem={({item}) => <Post post={item} />}
        refreshing={isLoading}
        onRefresh={handleRefresh}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
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
