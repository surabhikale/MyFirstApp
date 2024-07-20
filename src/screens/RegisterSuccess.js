import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../componenHome/customButton';
import FastImage from 'react-native-fast-image';
const RegisterSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.welcomeText}>Register</Text>
      </View>
      <View style={styles.fieldcontainer}></View>
      <View style={styles.bottomcontainer}>
        <CustomButton
          onPress={() => navigation.navigate('Login')}
          title="Login"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 50,
  },
 
  innercontainer: {
    //flex:1,
    height: 130,
    backgroundColor: '#1B83E3',
    justifyContent: 'space-between',
    alignItems: 'center',
    //paddingVertical: 20,
    borderRadius: 26,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: '100%',
   
  },
  fieldcontainer: {
    flex: 2.5,
    marginTop: 70,
    // backgroundColor: '#B4ED6B',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  bottomcontainer: {
    flex: 1,
    //backgroundColor: '#EAF4DC',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  welcomeText: {
    fontFamily: 'Poppins-SemiBold', // Ensure this matches the font file name
    fontSize: 25,
    fontWeight: '600', // Font weight is often inferred from the font file
    lineHeight: 37.5,
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 10,
  },
});

export default RegisterSuccess;
