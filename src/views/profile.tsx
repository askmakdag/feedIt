import React, {useEffect, useState} from 'react';
import Container from '../components/styled/container';
import Avatar from '../components/avatar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../hooks/store-hooks';

export default function Profile() {
  const navigation = useNavigation();
  const {profile} = useAppSelector(s => s?.profile);
  const [following, setFollowing] = useState(false);
  const {street, suite, city, zipcode} = profile.address;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: profile?.username,
    });
  }, [navigation, profile]);

  return (
    <Container>
      <View style={styles.header}>
        <Avatar uri={profile?.avatar} userId={profile?.id} size={100} />

        <Text style={styles.title}>{profile?.name}</Text>
        <Text style={styles.follower}>{following ? 1 : 0} FOLLOWERS</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setFollowing(!following)}>
          <Text style={styles.follow}>{following ? 'FOLLOWED' : 'FOLLOW'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text style={styles.section}>Personal Information</Text>
        <Text style={styles.bodyText}>E-mail: {profile?.email}</Text>
        <Text style={styles.bodyText}>Phone: {profile?.phone}</Text>
        <Text style={styles.bodyText}>Website: {profile?.website}</Text>
        <Text style={styles.bodyText}>
          Address: {`${street} ${suite} ${city} ${zipcode}`}
        </Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.section}>Company</Text>
        <Text style={styles.bodyText}>Name: {profile?.company?.name}</Text>
        <Text style={styles.bodyText}>
          Catch Phrase: {profile?.company?.catchPhrase}
        </Text>
        <Text style={styles.bodyText}>Bs: {profile?.company?.bs}</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#373737',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
  },
  follow: {
    color: 'rgba(255,85,0,0.94)',
    fontSize: 15,
    fontWeight: '600',
  },
  follower: {
    color: '#9a9a9a',
    fontSize: 13,
  },
  button: {
    borderWidth: 1,
    borderColor: 'rgba(255,85,0,0.94)',
    borderRadius: 4,
    paddingVertical: 4,
    width: '95%',
    alignItems: 'center',
    marginTop: 16,
  },
  body: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#373737',
  },
  bodyText: {
    fontSize: 14,
    color: '#9a9a9a',
  },
  section: {
    fontSize: 15,
    color: '#fefefe',
    marginBottom: 8,
  },
});
