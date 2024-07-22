import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const StudentImgae = require('../assets/images/StudentImage.png');
const data = [
  {
    id: '1',
    name: 'Sam Patel',
    time: '7:30 am',
    address: '39 Joshi Chawl Bharucha Road Dahisar',
    image: 'https://example.com/sam-patel.jpg',
  },
  {
    id: '2',
    name: 'Sahana Heer',
    time: '7:50 am',
    address: 'Block A 45, Vilas Nagar, Borivali',
    image: 'https://example.com/sam-patel.jpg',
  },
];

const StudentCard = ({item}) => (
  <View style={styles.card}>
    <FastImage
      style={styles.image}
      source={require('../assets/images/StudentImage.png')}
    />
    <View style={styles.info}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.details}>
        <View style={styles.row}>
          <Icon name="clock-o" size={20} color="#000" />
          <Text style={styles.detailText}>{item.time}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="map-marker" size={20} color="#000" />
          <Text style={styles.detailText}>{item.address}</Text>
        </View>
      </View>
    </View>
    <TouchableOpacity style={styles.callButton}>
      <Icon name="phone" size={20} color="#fff" />
    </TouchableOpacity>
  </View>
);

const RouteScreen = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState('PickUp');

  const renderItem = ({item}) => <StudentCard item={item} />;

  return (
    <>
      <Header
        leftIcon={
          <MaterialIcons
            name="chevron-left"
            size={25}
            color={'#000'}
            onPress={() => navigation.goBack()}
          />
        }
        label={'Route'}
        rightIcon={
          <MaterialIcons
            name="bell"
            size={19}
            color={'#262929'}
            onPress={() => navigation.navigate('Home')}
          />
        }
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.date}>02 July 2024</Text>
          <Text style={styles.schoolName}>School Name</Text>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'PickUp' && styles.activeTab]}
            onPress={() => setSelectedTab('PickUp')}>
            <Text style={styles.tabText}>Pick Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'Drop' && styles.activeTab]}
            onPress={() => setSelectedTab('Drop')}>
            <Text style={styles.tabText}>Drop</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B83E3',
    borderRadius: 26,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  date: {
    fontSize: 16,
    color: '#000',
  },
  schoolName: {
    fontSize: 16,
    color: '#000',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#007aff',
  },
  tab: {
    padding: 16,
    width: '50%',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#005bb5',
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
  },
  listContainer: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  detailText: {
    marginLeft: 8,
    fontSize: 16,
  },
  callButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RouteScreen;
