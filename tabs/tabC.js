import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import firebase from '../constants/firebase';

export default class tabC extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut() {
    firebase.auth().signOut().then(() => {
      this.props.navigation.replace('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }

  showData() {
    // console.log('global.userData', global.userData);
    // console.log('global.userArchivement', global.userArchivement);
    /*Object.keys(global.userArchivement).forEach((key,index) => {
      // console.log(key, global.userArchivement[key]);
    })*/
    /*// console.log('global.userArchivement', [global.userArchivement].map(feild => ({
      value,
      timestamp : timestamp.toDate().toLocaleDateString() + ' ' + timestamp.toDate().toLocaleTimeString(),
    })));*/
  }

  render() {
    
    return (
      <GestureRecognizer>
        <ScrollView>
          <View style={
            {flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 20,
            paddingHorizontal: 10}}
          >
            <Text style={styles.title}>โปรไฟล์</Text>
            <View style={{flex: 1, marginBottom: 100}}>
              <Text style={styles.content}>username : {global.userData.userName}</Text>
              <Text style={styles.content}>email : {global.userData.email}</Text>
              <Text style={styles.content}>ชื่อจริง-นามสกุล : {global.userData.realName}</Text>
              <Text style={styles.content}>ระดับการศึกษา : {global.userData.education}</Text>
            </View>

            {/* <TouchableOpacity onPress={() => this.showData()}>
              <View style={styles.roundedButton}>
                <Text style={{textAlign: 'center', padding: 20, color: 'white', fontFamily: 'Kanit-Regular', fontSize: 18}}>showData</Text>
              </View>
            </TouchableOpacity> */}

            <TouchableOpacity onPress={() => this.signOut()}>
              <View style={[styles.roundedButton,{backgroundColor: 'red'}]}>
                <Text style={{textAlign: 'center', padding: 20, color: 'white', fontFamily: 'Kanit-Regular', fontSize: 18}}>ออกจากระบบ</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </GestureRecognizer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Kanit-Medium',
    fontSize: Dimensions.get('window').width < 375 ? 14 : Dimensions.get('window').width < 600 ? 16 : 18
  },
  content: {
    textAlign: 'left',
    marginVertical: 8,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Kanit-Regular',
    fontSize: Dimensions.get('window').width < 375 ? 12 : Dimensions.get('window').width < 600 ? 14 : 16
  },
  topLeftButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopRightRadius: 10
  },
  topRightButton: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 10
  },
  roundedButton: {
    justifyContent:"center",
    alignItems:"center",
    width: '100%',
    height: 62,
    borderRadius:30,
    backgroundColor:"#22459E",
    display: "flex",
    padding: 10,
    margin: 10,
    alignSelf: "center"
  },
  hiddenButton: {
    justifyContent:"center",
    alignItems:"center",
    width: 292,
    height: 62,
    borderRadius:30,
    backgroundColor:"white",
    display: "flex",
    padding: 10,
    margin: 10
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'black'
  },
  buttonFont: {
    textAlign: 'center',
    padding: 0,
    color: 'white',
    fontFamily: 'Kanit-Regular',
    fontSize: Dimensions.get('window').width < 375 ? 12 : Dimensions.get('window').width < 600 ? 14 : 16
  },
});
