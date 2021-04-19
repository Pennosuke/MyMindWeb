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
import { useNavigation } from '@react-navigation/native';
import { MockupData } from '../constants/MockupData';
import {
  defaultData,
  Program1,
  Program2,
  Program3,
  Program4,
  ProgramFinal,
  program1ButtonData,
  homework1ButtonData,
  program2ButtonData,
  homework2ButtonData,
  program3ButtonData,
  homework3ButtonData,
  program4ButtonData,
  homework4ButtonData,
  program5ButtonData,
  homework5ButtonData,
  programFinalButtonData,
} from '../constants/โปรแกรมฝึกปฏิบัติ_ทดสอบ';
import firebase from '../constants/firebase';
import 'firebase/firestore';

export default class tabRT extends Component {

  constructor() {
    super();
    this.state = {
    }
  }

  getDay = (date) => {
    const splitDate = date.split('/')
    return parseInt(splitDate[1], 10)
  }
  
  getMonth = (date) => {
    const splitDate = date.split('/')
    return parseInt(splitDate[0], 10)
  }
  
  getYear = (date) => {
    const splitDate = date.split('/')
    const moreSplitDate = splitDate[2].split(' ')
    return parseInt(moreSplitDate[0], 10)
  }

  getHour = (date) => {
    const splitDate = date.split(' ')
    var Time = ''
    var TimeZone = ''
    var splitTime = []
    if(splitDate.length === 2) {
      Time = splitDate[1]
      splitTime = Time.split(':')
      return parseInt(splitTime[0], 10)
    } else if(splitDate.length === 3) {
      Time = splitDate[1]
      TimeZone = splitDate[2]
      splitTime = Time.split(':')
      return TimeZone === 'PM' ? (splitTime[0] === '12' ? 12 : parseInt(splitTime[0], 10) + 12) : (splitTime[0] === '12' ? 0 : parseInt(splitTime[0], 10))
    }
  }

  getMinute = (date) => {
    const splitDate = date.split(' ')
    const Time = splitDate[1]
    const TimeZone = splitDate[2]
    const splitTime = Time.split(':')
    return parseInt(splitTime[1], 10)
  }

  getSecond = (date) => {
    const splitDate = date.split(' ')
    const Time = splitDate[1]
    const TimeZone = splitDate[2]
    const splitTime = Time.split(':')
    return parseInt(splitTime[2], 10)
  }

  getTotalSecond = (date) => {
    return this.getSecond(date) + (this.getMinute(date) * 60) + (this.getHour(date) * 3600)
  }

  renderHomeworkValue(collection, minimum) {
    if(!global.userArchivement[collection]) {
      return ' (0/' + minimum + ' วัน)';
    } else if(global.userArchivement[collection].totalDays < minimum) {
      return ' (' + global.userArchivement[collection].totalDays + '/' + minimum + ' วัน)';
    } else {
      return ''
    }
  }

  renderWaitingText(collection, name, minimumDay) {
    if(!global.userArchivement[collection]) {
      return(
        <Text style={[styles.buttonFont, styles.waitingFont]}>
          โปรดทำ "{name}" ให้ครบ {minimumDay} วัน (0/{minimumDay} วัน)
        </Text>
      )
    } else if(global.userArchivement[collection]['totalDays'] < minimumDay) {
      return(
        <Text style={[styles.buttonFont, styles.waitingFont]}>
          โปรดทำ "{name}" ให้ครบ {minimumDay} วัน ({global.userArchivement[collection]['totalDays']}/{minimumDay} วัน)
        </Text>
      )
    } else if(global.userArchivement[collection]['totalDays'] === minimumDay) {
      const currentTime = firebase.firestore.Timestamp.fromDate(new Date())
      const currentDate = currentTime.toDate().toLocaleDateString()
      const latestTimestamp = global.userArchivement[collection]['latestTimestamp']
      // console.log('currentDate', currentDate)
      // console.log('latestTimestamp', latestTimestamp)
      if (!(this.getYear(currentDate) <= this.getYear(latestTimestamp)) || !(this.getMonth(currentDate) <= this.getMonth(latestTimestamp)) || !(this.getDay(currentDate) <= this.getDay(latestTimestamp))) {
        return(
          <></>
        )
      } else {
        var newDay = this.getDay(latestTimestamp) + 1;
        var newMonth = this.getMonth(latestTimestamp);
        var newYear = this.getYear(latestTimestamp);
        const kom = [1,3,5,7,8,10,12];
        const yon = [4,6,9,11];
        if(kom.find(month => month === newMonth) !== undefined && newDay > 31) {
          newDay -= 31;
          newMonth++;
        } else if(yon.find(month => month === newMonth) !== undefined && newDay > 30) {
          newDay -= 30;
          newMonth++;
        } else if(newYear % 400 === 0 || (newYear % 4 === 0 && newYear % 100 !== 0) && newDay > 29) {
          newDay -= 29;
          newMonth++;
        } else if(newDay > 28) {
          newDay -= 28;
          newMonth++;
        }
        if(newMonth > 12) {
          newMonth -= 12;
          newYear++;
        }
        return(
          <Text style={[styles.buttonFont, styles.waitingFont]}>
            สามารถเริ่มทำ "{name}" ได้ในวันที {newDay}/{newMonth}/{newYear}
          </Text>
        )
      }
    } else {
      return(
        <></>
      )
    }
  }

  isAvailible(collection, minimum, isCurrentButton) {
    if(!global.userArchivement[collection]) {
      return false;
    } else if (global.userArchivement[collection]['totalDays'] < minimum) {
      return false;
    } else if (global.userArchivement[collection]['totalDays'] === minimum) {
      if(isCurrentButton) {
        return true;
      } else {
        const currentTime = firebase.firestore.Timestamp.fromDate(new Date())
        const currentDate = currentTime.toDate().toLocaleDateString()
        const latestTimestamp = global.userArchivement[collection]['latestTimestamp']
        return !(this.getYear(currentDate) <= this.getYear(latestTimestamp)) || !(this.getMonth(currentDate) <= this.getMonth(latestTimestamp)) || !(this.getDay(currentDate) <= this.getDay(latestTimestamp))
      }
          } else {
      return true;
    }
  }

  

  renderTestButton(obj) {
    const isVisibleCollection = !!obj['isVisibleCollection'] ? obj['isVisibleCollection'] : 'evaluation'
    const buttonType = !!obj['buttonType'] ? obj['buttonType'] : 'Program'
    const data = !!obj['data'] ? obj['data'] : defaultData
    const collectionName = !!obj['collectionName'] ? obj['collectionName'] : 'unknowCollection'
    const screenName = !!obj['screenName'] ? obj['screenName'] : 'defaultScreenName'
    const buttonText = !!obj['buttonText'] ? obj['buttonText'] : 'defaultButtonText'
    const buttonDays = !!obj['buttonDays'] ? obj['buttonDays'] : 1
    const preCollectionName = !!obj['preCollectionName'] ? obj['preCollectionName'] : 'evaluation'
    const preButtonText = !!obj['preButtonText'] ? obj['preButtonText'] : 'defaultPreButtonText'
    const preButtonDays = !!obj['preButtonDays'] ? obj['preButtonDays'] : 1

    return(
      <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('TreatmentScreen', { data : data, collection : collectionName, name: screenName/*, test: true*/ })}
      >
        <View style={[styles.roundedButton, styles.finishedButton]}>
          <Text style={styles.buttonFont}>{buttonText}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <GestureRecognizer>
        <ScrollView>
          <View 
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingVertical: 20,
              paddingHorizontal: 10
            }}
          >
            <Text style={styles.title}>ทดสอบโปรแกรม</Text>
            <View style={
              {flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingVertical: 20}}
            >
              {this.renderTestButton(program1ButtonData)}
              {this.renderTestButton(homework1ButtonData)}
              {this.renderTestButton(program2ButtonData)}
              {this.renderTestButton(homework2ButtonData)}
              {this.renderTestButton(program3ButtonData)}
              {this.renderTestButton(homework3ButtonData)}
              {this.renderTestButton(program4ButtonData)}
              {this.renderTestButton(homework4ButtonData)}
              {this.renderTestButton(program5ButtonData)}
              {this.renderTestButton(homework5ButtonData)}
              {this.renderTestButton(programFinalButtonData)}
            </View>
            <Text style={styles.title}>ทดสอบหน้าอื่นๆ</Text>
            <View style={
              {flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              paddingVertical: 20}}
            >
              <TouchableOpacity onPress={() => this.props.navigation.navigate('CompletedSurvey', { score : 0 })}>
                <View style={[styles.roundedButton, {backgroundColor: '#4fbb20'}]}>
                  <Text style={styles.buttonFont}>ทดสอบหน้าประกาศผลประเมิน(สุขภาพจิตดี)</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('CompletedSurvey', { score : 5 })}>
                <View style={[styles.roundedButton, {backgroundColor: '#94b81b'}]}>
                  <Text style={styles.buttonFont}>ทดสอบหน้าประกาศผลประเมิน(ซึมเศร้าเล็กน้อย)</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('CompletedSurvey', { score : 7 })}>
                <View style={[styles.roundedButton, {backgroundColor: '#caa423'}]}>
                  <Text style={styles.buttonFont}>ทดสอบหน้าประกาศผลประเมิน(ซึมเศร้าปานกลาง)</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('CompletedSurvey', { score : 11 })}>
                <View style={[styles.roundedButton, {backgroundColor: '#b1651b'}]}>
                  <Text style={styles.buttonFont}>ทดสอบหน้าประกาศผลประเมิน(ซึมเศร้าค่อนข้างมาก)</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('CompletedSurvey', { score : 14 })}>
                <View style={[styles.roundedButton, {backgroundColor: '#ba3a1d'}]}>
                  <Text style={styles.buttonFont}>ทดสอบหน้าประกาศผลประเมิน(ซึมเศร้าสูงมาก)</Text>
                </View>
              </TouchableOpacity>
            </View>
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
    width: Dimensions.get('window').width < 600 ? (Dimensions.get('window').width * 0.8) : Dimensions.get('window').width < 960 ? (Dimensions.get('window').width * 0.6) : (Dimensions.get('window').width * 0.4),
    height: 62,
    borderRadius:30,
    backgroundColor:"#22459E",
    display: "flex",
    padding: 10,
    margin: 10,
    alignSelf: "center"
  },
  disableButton: {
    backgroundColor:"#dfdfdf"
  },
  finishedButton: {
    backgroundColor:"#2cc156"
  },
  buttonFont: {
    textAlign: 'center',
    padding: 0,
    color: 'white',
    fontFamily: 'Kanit-Regular',
    fontSize: Dimensions.get('window').width < 375 ? 12 : Dimensions.get('window').width < 600 ? 14 : 16
  },
  disablebuttonFont: {
    color: '#a3a3a3'
  },
  waitingFont: {
    fontFamily: 'Kanit-Regular',
    color: '#535353',
    fontSize: Dimensions.get('window').width < 375 ? 8 : Dimensions.get('window').width < 600 ? 10 : 12
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
  }
});