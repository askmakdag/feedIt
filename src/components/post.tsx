import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  DotsThreeOutlineVertical,
  Export,
  Chat,
  HeartStraight,
  Swap,
} from 'phosphor-react-native';
import PostBottomInteract from './post-bottom-interact';
import {useNavigation} from '@react-navigation/native';

export default function Post({post, detailed = false}) {
  const navigation = useNavigation();

  const navigateToDetails = () => {
    if (!detailed) {
      navigation?.push('Post Details', {post});
    }
  };

  const navigateToProfile = () => {
    navigation?.push('Profile', {user: post});
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToDetails}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={navigateToProfile}>
            <Image source={{uri: post?.avatar}} style={styles.image} />
          </TouchableOpacity>

          <View>
            <Text style={styles.name}>User Name</Text>
            <Text style={styles.date}>Posted Date</Text>
          </View>
        </View>

        <DotsThreeOutlineVertical size={18} weight={'bold'} color={'#737373'} />
      </View>

      <View style={styles.bodyContainer}>
        <Text style={styles.body}>{post?.body}</Text>
      </View>

      <View style={styles.footerContainer}>
        <PostBottomInteract icon={<Chat />} text={12} />
        <PostBottomInteract icon={<Swap />} text={54} />
        <PostBottomInteract icon={<HeartStraight />} text={31} />
        <PostBottomInteract icon={<Export />} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1F1F',
    marginBottom: 12,
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.95,
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 23,
    marginRight: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  date: {
    fontSize: 12,
    fontWeight: '500',
    color: '#A3A3A3',
  },
  bodyContainer: {
    width: Dimensions.get('window').width * 0.95,
    marginTop: 8,
  },
  body: {
    color: '#fff',
    width: '95%',
    marginVertical: 12,
  },
  headerLeft: {
    flexDirection: 'row',
  },
  footerContainer: {
    width: Dimensions.get('window').width * 0.95,
    alignSelf: 'center',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#373737',
  },
});
