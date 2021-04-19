import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import firebase from '../constants/firebase';
import 'firebase/firestore';
import { db } from '../constants/firebase'

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false,
      docName: '',
      errorMessage: '',
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin() {
    if(this.state.email === '' || this.state.password === '') {
      this.setState({
        errorMessage: 'โปรดกรอกอีเมลหรือรหัสผ่านให้ครบถ้วน',
        isLoading: false
      })
    } else {
      this.setState({
        isLoading: true,
      })
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        // console.log(res)
        // console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: '',
        })
        this.props.navigation.replace('Init')
      })
      .catch((error) => {
        // console.log('error', error.message)
        var newErrorMessage = '';
        if(error.message === 'The password is invalid or the user does not have a password.') {
          newErrorMessage = 'รหัสผ่านไม่ถูกต้อง โปรดกรอกใหม่อีกครั้ง';
        } else if(error.message === 'The email address is badly formatted.') {
          newErrorMessage = 'รูปแบบอีเมลไม่ถูกต้อง';
        } else {
          newErrorMessage = error.message;
        }
        this.setState({
          errorMessage: newErrorMessage,
          isLoading: false
        })
      })
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',}}>
        <View style={styles.container}>
          <TextInput
            style={styles.inputStyle}
            placeholder="อีเมล"
            value={this.state.email}
            onChangeText={(val) => this.updateInputVal(val, 'email')}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="รหัสผ่าน"
            value={this.state.password}
            onChangeText={(val) => this.updateInputVal(val, 'password')}
            maxLength={15}
            secureTextEntry={true}
          />
          <Text style={styles.errorStatus}>
            {this.state.errorMessage}
          </Text>
          <Button
            color="#3740FE"
            title="เข้าสู่ระบบ"
            onPress={() => this.userLogin()}
          />
          <Text
            style={styles.loginText}
            onPress={() => this.props.navigation.navigate('ResetPassword')}>
            คุณลืมรหัสผ่านใช่หรือไม่?
          </Text>
          <Button
            color="#31d140"
            title="สมัครสมาชิกใหม่"
            onPress={() => this.props.navigation.navigate('Signup')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  mainSurveyContainer: {
    width: Dimensions.get('window').width < 600 ? '90%' : Dimensions.get('window').width < 960 ? '70%' : '50%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    alignContent: 'center',
    padding: 5,
    flexGrow: 0,
  },
  container: {
    width: Dimensions.get('window').width < 600 ? '90%' : Dimensions.get('window').width < 960 ? '70%' : '50%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
  },
  subContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width < 600 ? '90%' : Dimensions.get('window').width < 960 ? '70%' : '50%',
  },
  inputStyle: {
    width: '100%',
    marginBottom: 5,
    padding: 10,
    alignSelf: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#FAF7F6',
  },
  loginText: {
    color: '#3740FE',
    marginTop: 30,
    marginBottom: 60,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  errorStatus: {
    textAlign: 'left',
    marginBottom: 15,
    fontFamily: 'Kanit-Regular',
    fontSize: 14,
    color: '#d7263f'
  }
});