/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  StatusBar,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import PhoneInput from 'react-native-phone-input'
import Logo from './src/assets/logo.png'
import Facebook from './src/assets/facebook-square.png'
import Google from './src/assets/google.png'
import CountryPicker from 'react-native-country-picker-modal'

const { width, height } = Dimensions.get("window");

const App: () => React$Node = () => {
  const imageStyle = [
    {
      alignItems: 'flex-start',
      width: 50,
      height: 50,
      borderRadius: 15
    }
  ];
  const [countryCode, setCountryCode] = useState('')
  let phone = null

  return (
    <>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.header}>
            <Image source={Logo} style={imageStyle} />
            <Text style={styles.headerText}>Pickmeup</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title1}>Hey there!</Text>
            <Text style={styles.title2}>Type your phone number to get started</Text>
          </View>
          <View style={styles.phoneContainer}>
            <View style={styles.inputContainer}>
              <PhoneInput
                ref={ref => {
                  phone = ref;
                }}
                onSelectCountry={(value) => {
                  let counrtyCode = phone.getCountryCode(value)
                  setCountryCode(counrtyCode)
                }}
              />
              <View style={styles.counrtyCodeContainer}>
                <Text style={styles.counrtyCode}>{'+ ' + countryCode}</Text>
                <View style={styles.inputBox}>
                  <TextInput style={styles.input} keyboardType='numeric' />
                </View>
              </View>
            </View>
            <View style={styles.formButton}>
              <TouchableOpacity style={styles.submitContainer}>
                <Text style={styles.submitText}>GO</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>or you can sign in with</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.facebookButton}>
            <Image source={Facebook} style={styles.buttonIcon} />
            <Text style={styles.facebookText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton}>
            <View style={{ justifyContent: 'center', marginLeft: 10 }}>
              <Image source={Google} style={styles.buttonIcon} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.googleText}>Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  formContainer: {
    height: height - 80,
    backgroundColor: '#2666c9',
  },
  header: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    marginLeft: 10,
    fontSize: 48,
    color: 'white'
  },
  titleContainer: {
    margin: 30
  },
  title1: {
    fontSize: 30,
    color: 'white',
    marginBottom: 20

  },
  title2: {
    fontSize: 28,
    color: 'white'
  },
  buttonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonIcon: {
    width: 20,
    height: 20,
    justifyContent: 'center'
  },
  facebookButton: {
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
    borderColor: '#2666c9',
    width: width / 2 - 30,
    height: 45
  },
  googleButton: {
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    borderColor: 'grey',
    width: width / 2 - 30,
    height: 45
  },
  facebookText: {
    marginLeft: 20,
    fontSize: 18
  },
  googleText: {
    marginLeft: 20,
    fontSize: 18,
    color: 'white'
  },
  textContainer: {
    marginLeft: 10,
    backgroundColor: '#2666c9',
    width: width / 2 - 70,
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#2666c9',
    justifyContent: 'center'
  },
  footerText: {
    color: 'white',
    fontSize: 18
  },
  footerContainer: {
    width: '100%',
    position: 'absolute', //Here is the trick
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  phoneContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30
  },
  submitContainer: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white'
  },
  submitText: {
    color: 'white',
    fontSize: 26,
    margin: 10
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: width - 130
  },
  input: {
    marginLeft: 5,
    fontSize: 20,
    color: 'grey',
    width: 120
  },
  inputBox: {
    borderLeftWidth: 1,
    justifyContent: 'center'
  },
  counrtyCode: {
    marginRight: 5,
    fontSize: 20,
  },
  counrtyCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
