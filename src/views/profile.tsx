import React from 'react';
import Container from '../components/styled/container';
import Avatar from '../components/avatar';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

export default function Profile() {
  const {profile} = useSelector(s => s?.profile);
  const {street, suite, city, zipcode} = profile.address;

  return (
    <Container>
      <View style={styles.header}>
        <Avatar
          uri={profile?.avatar}
          userId={profile?.id}
          round={false}
          size={100}
        />

        <View>
          <Text style={styles.title}>{profile?.name}</Text>
          <Text style={styles.subtitle}>{profile?.username}</Text>
          <Text style={styles.subtitle}>{profile?.email}</Text>
          <Text style={styles.subtitle}>{profile?.website}</Text>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
  },
  subtitle: {
    color: '#fefefe',
    fontSize: 16,
  },
});
