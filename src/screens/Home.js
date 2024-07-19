import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, Image,TouchableOpacity} from 'react-native';
import Dropdown from '../componenHome/dropdown';
import CustomButton from '../componenHome/customButton';
import DatePickerComponent from '../componenHome/datepicker';

export default function Home({ navigation }) {
  const [selectedOption, setSelectedOption] = useState([]);
  const options = ['VAN NHS 1234', 'VAN HMRC 5678', 'VAN JUPD 3456'];

  const handleOptionSelected = (option) => {
    setSelectedOption(option);
  };
  const list = [
    {
      key: 1,
      text: 'Student Entry',
      icon: 'StudentEntry',
    },
    {
      key: 2,
      text: 'Route',
      icon: 'Route',
    },
    {
      key: 3,
      text: 'Student Shuffle',
      icon: 'StudentShuffle',
    },
    {
      key: 4,
      text: 'Van Shuffle',
      icon: 'VanShuffle',
    },
  ];
  const StudentEntry = require('../assets/images/studentList.png');
  const Route = require('../assets/images/Route.png');
  const StudentShuffle = require('../assets/images/studentshuffle.png');
  const VanShuffle = require('../assets/images/vanshuffle.png');
  const Alerticon = require('../assets/images/alreticon.png');
  const renderIcon = (icon) => {
    if (typeof icon === 'string') {
      // Return other icons based on the string value
      switch (icon) {
        case 'StudentEntry':
          return (
            <Image source={StudentEntry}  />
          );
        case 'Route':
          return (
            <Image source={Route} />
          );
        case 'StudentShuffle':
          return (
            <Image source={StudentShuffle}  />
          );
        case 'VanShuffle':
          return (
            <Image source={VanShuffle}  />
          );
        default:
          return null;
      }
    }
    return icon; // Return the component directly if it is already an element
  };

  return (
    <>
      <View style={[styles.container]}>
        <View style={[styles.vanContainer]}>
          <Dropdown options={options} onOptionSelected={handleOptionSelected} />

          <Text style={styles.headingTitle}>VAN Time</Text>
          <View style={[styles.vanTimeContainer]}>
            <Text style={styles.headingTitle}>Pickup Time</Text>
            <Text style={styles.headingTitleRight}>07:30 AM</Text>
          </View>
          <View style={[styles.vanTimeContainer]}>
            <Text style={styles.headingTitle}>Drop Time</Text>
            <Text style={styles.headingTitleRight}>12:30 PM</Text>
          </View>
        </View>
        <View style={[styles.routeContainer]}>
          <DatePickerComponent />
          <View style={[styles.routeButtonstyle]}>
          <CustomButton customStyle={{ backgroundColor:'rgb(79,156,233)'}} onPress={handleOptionSelected} title="START ROUTE" />
          </View>
        </View>
        <View style={[styles.servicesContainer]}>
          <FlatList
            data={list}
            numColumns={2}
            keyExtractor={(item, index) => item.key}
            renderItem={({item}) => (
              <View style={styles.card}>
                <View style={styles.imageIcon}>{renderIcon(item.icon)}</View>
                <Text style={styles.text}>{item.text}</Text>
              </View>
            )}
          />
         
        </View>
        
        <TouchableOpacity style={styles.EmergencyAlertButton}>
            <Image source={Alerticon}  style={styles.imageIcon} />
            <Text style={styles.buttonText}>Emergency Alert</Text>
          </TouchableOpacity>
         
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
  vanContainer: {
    flex: 1.5,
    backgroundColor: '#4383e3',
    marginBottom: 15,
    borderRadius: 5,
    padding: 4,
  },
  routeContainer: {
    flex: 2,
    backgroundColor: '#4383e3',
    marginBottom: 15,
    borderRadius: 5,
  },
  servicesContainer: {
    flex: 3,
    borderRadius: 5,
    columnGap: 5,
  },
  card: {
    height: 125,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4383e3',
    borderRadius: 5,
    margin: 5,
  },
  vanTimeContainer: {
    marginTop: 5,
    padding: 4,
    flex: 1,
    flexDirection: 'row' /*it was column*/,
    alignContent: 'space-between',
  },
  bottomButtonontainer:{
    flex: 1,
  },
  imageIcon:{
    color:'#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
  headingTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
    textAlign: 'left',
  },
  headingTitleRight: {
    fontWeight: '600',
    color: 'white',
    textAlign: 'right',
    flex: 6,
  },
  routeButtonstyle:{
    marginTop:25,   
  },
  EmergencyAlertButton: {
    backgroundColor: '#E31B1E',
    borderRadius: 60,
    padding: 12,
    color:'#ffffff',
    position: 'absolute',
    bottom: 100,
    left: 8,
    width: 90,
    height: 90,    
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, 
    shadowColor: 'rgba(27, 131, 227, 0.13)',
    shadowOffset: { width: 0, height: 10 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 3, 
  },
  buttonText: {
    fontFamily: 'Poppins-Regular', // Ensure this matches the font file name
    fontSize: 10,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
  }
});



