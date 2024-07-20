import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import CustomButton from '../componenHome/customButton';
import CustomInputText from '../components/TextInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import { RNCamera } from 'react-native-camera';
const Register = ({ navigation }) => {
  
  /*const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await RNCamera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.takePictureAsync(options);
      setPhoto(data.uri);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }*/

  return (
    <View style={styles.container}>    
          <View style={styles.innercontainer}>
            <Text style={styles.welcomeText}>Register</Text>
            <View style={styles.captureButtonContainer}>
            <TouchableOpacity style={styles.captureButton} >
                <MaterialCommunityIcons name="camera" size={40}  />
              </TouchableOpacity>
            </View>
          </View>     
      
   
    <View style={styles.fieldcontainer} > 
    <CustomInputText placeholder={'Name'} id={'Name'}/>
    <CustomInputText placeholder={'Phone Number'} id={'Phonenumber'} />
    <CustomInputText placeholder={'Vehicle Number'} id={'Vehiclenumber'} />
    <CustomInputText placeholder={'Upload Drivers License'}  id={'DriversLicense'} onChangeText={txt => {
                //searchData(txt);
              }}
              rightIcon={
                <MaterialCommunityIcons
                  name="upload"
                  size={20}
                  color={'rgba(98, 98, 98, 1)'}
                />
              } />
    <CustomInputText placeholder={'Upload Vehicle Insurance'} rightIcon={
                <MaterialCommunityIcons
                  name="upload"
                  size={20}
                  color={'rgba(98, 98, 98, 1)'}
                />
              } />
    </View>
    <View style={styles.bottomcontainer} >   
    <CustomButton onPress={() => navigation.navigate('RegisterSuccess')} title="Register" />    
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
  camera: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 50,
  },
  captureButtonContainer: {
    alignItems: 'center',
    marginBottom:20,
  },
  captureButton: {
    backgroundColor: '#E9F3FD',
    borderRadius: 50,
    padding: 20,
    color:'#626262'
  },
  preview: {
    width: '100%',
    height: '100%',
  },
  innercontainer:{   
    //flex:1,
    height:160,
    backgroundColor: '#1B83E3',
    justifyContent: 'space-between',
    alignItems: 'center',
    //paddingVertical: 20,
    borderRadius: 26,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: '100%',
    maxHeight:'400',
    
    //marginBottom: 15,
  },
  fieldcontainer:{
    flex:2.5,
    marginTop:70,
   // backgroundColor: '#B4ED6B',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  bottomcontainer:{
    flex:1,
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
    paddingVertical:35
  }
});

export default Register;
