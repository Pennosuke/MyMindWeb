import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Alert, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Dimensions } from 'react-native';
import {
  Program1,
  Homework1,
  Program2,
  Homework2,
  Program3,
  Homework3,
  Program4,
  Homework4,
  MockupData
} from '../constants/โปรแกรมฝึกปฏิบัติ_ทดสอบ';
import { SPWB, awareness, DASS, Q8 } from '../constants/แบบประเมิน';

import * as ScreenOrientation from 'expo-screen-orientation';

export default class tabTest extends Component {

  constructor() {
    super();
    this.state = { 
      isRotate: false
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
    const Time = splitDate[1]
    const TimeZone = splitDate[2]
    const splitTime = Time.split(':')
    return TimeZone === 'AM' ? (splitTime[0] === '12' ? 0 : parseInt(splitTime[0], 10)) : parseInt(splitTime[0], 10) + 12
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

  getHomeworkValue = (collection) => {
    if(!global.userArchivement[collection]) {
      return 0;
    } else if(global.userArchivement[collection].value > 3) {
      return 3;
    } else {
      return global.userArchivement[collection].value;
    }
  }

  renderWaitingDate(collection,timestamp) {
    var newSecond = this.getSecond(global.userArchivement[collection][timestamp]) + 20;
    var plusMinute = 0;
    if(newSecond >= 60) {
      newSecond -= 60;
      plusMinute = 1
    }
    var newMinute = this.getMinute(global.userArchivement[collection][timestamp]) + plusMinute;
    var plusHour = 0;
    if(newMinute >= 60) {
      newMinute -= 60;
      plusHour = 1
    }
    var newHour = this.getHour(global.userArchivement[collection][timestamp]) + plusHour;
    var plusDay = 0;
    if(newHour >= 24) {
      newHour -= 24;
      plusDay = 0
    }
    var newDay = this.getDay(global.userArchivement[collection][timestamp]) + plusDay;
    var newMonth = this.getMonth(global.userArchivement[collection][timestamp]);
    var newYear = this.getYear(global.userArchivement[collection][timestamp]);
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
        เริ่มทำได้ในวันที่ {newDay}/{newMonth}/{newYear} เวลา {newHour}:{newMinute}:{newSecond} น.
      </Text>
    )
  }

  isAvailible(collection,timestamp,waitingTime) {
    if(!global.userArchivement[collection]) {
      // console.log('global.userArchivement[collection] === undefined case')
      return false;
    } else if (global.userArchivement[collection].value === 0) {
      // console.log('global.userArchivement[collection].value === 0 case')
      return false;
    } else if (this.getYear(global.checkpointTime) > this.getYear(global.userArchivement[collection][timestamp])) {
      // console.log('this.getYear(global.checkpointTime)', this.getYear(global.checkpointTime));
      // console.log('this.getYear(global.userArchivement[collection][timestamp])', this.getYear(global.userArchivement[collection][timestamp]));
      return true;
    } else if (this.getMonth(global.checkpointTime) > this.getMonth(global.userArchivement[collection][timestamp])) {
      // console.log('this.getMonth(global.checkpointTime)', this.getMonth(global.checkpointTime));
      // console.log('this.getMonth(global.userArchivement[collection][timestamp])', this.getMonth(global.userArchivement[collection][timestamp]));
      return true;
    } else if (this.getDay(global.checkpointTime) > this.getDay(global.userArchivement[collection][timestamp])) {
      // console.log('this.getDay(global.checkpointTime)', this.getDay(global.checkpointTime));
      // console.log('this.getDay(global.userArchivement[collection][timestamp])', this.getDay(global.userArchivement[collection][timestamp]));
      return true;
    } else if (this.getTotalSecond(global.checkpointTime) - this.getTotalSecond(global.userArchivement[collection][timestamp]) >= waitingTime) {
      // console.log('this.getTotalSecond(global.checkpointTime)', this.getTotalSecond(global.checkpointTime));
      // console.log('this.getTotalSecond(global.userArchivement[collection][timestamp])', this.getTotalSecond(global.userArchivement[collection][timestamp]));
      return true;
    } else {
      // console.log('last case')
      return false;
    }
  }

  handleAvailable(beforeCollection,currentCollection,waitingTime) {
    if(this.getHomeworkValue(currentCollection) > 0) {
      return this.isAvailible(currentCollection,'latestTimestamp',waitingTime)
    } else {
      return this.isAvailible(beforeCollection,'firstTimestamp',waitingTime)
    }
    
  }

  handlerenderWaitingDate(beforeCollection,currentCollection) {
    if(this.getHomeworkValue(currentCollection) > 0) {
      return this.renderWaitingDate(currentCollection,'latestTimestamp')
    } else {
      return this.renderWaitingDate(beforeCollection,'firstTimestamp')
    }
  }

  renderProgram1Button() {
    if(!!global.userArchivement['แบบประเมิน']) {
      return(
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('TreatmentScreen', { data : Program1, collection : 'โปรแกรมที่_1_หายใจคลายเครียด', name: 'โปรแกรมที่ 1 หายใจคลายเครียด' })}
          disabled={!this.isAvailible('แบบประเมิน','firstTimestamp',0)}
        >
          <View style={!this.isAvailible('แบบประเมิน','firstTimestamp',0) ? [styles.roundedButton, styles.disableButton] : !!global.userArchivement['โปรแกรมที่_1_หายใจคลายเครียด'] ? [styles.roundedButton, styles.finishedButton] : styles.roundedButton}>
            <Text style={!this.isAvailible('แบบประเมิน','firstTimestamp',0) ? [styles.buttonFont, styles.disablebuttonFont] : styles.buttonFont}>โปรแกรมที่ 1 “หายใจคลายเครียด”</Text>
            {!this.isAvailible('แบบประเมิน','firstTimestamp',0) ? this.renderWaitingDate('แบบประเมิน','firstTimestamp') : <></>}
          </View>
        </TouchableOpacity>
      )
    } else {
      return(
        <></>
      )
    }
  }

  renderHomework1Button() {
    if(!!global.userArchivement['โปรแกรมที่_1_หายใจคลายเครียด']) {
      return(
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('TreatmentScreen', { data : Homework1, collection : 'ทบทวนโปรแกรมที่_1_หายใจคลายเครียด', name: 'ทบทวนโปรแกรมที่ 1 หายใจคลายเครียด' })}
          disabled={!this.handleAvailable('โปรแกรมที่_1_หายใจคลายเครียด','ทบทวนโปรแกรมที่_1_หายใจคลายเครียด',20)}
        >
          <View style={!this.handleAvailable('โปรแกรมที่_1_หายใจคลายเครียด','ทบทวนโปรแกรมที่_1_หายใจคลายเครียด',20) ? [styles.roundedButton, styles.disableButton] : this.getHomeworkValue('ทบทวนโปรแกรมที่_1_หายใจคลายเครียด') >= 3 ? [styles.roundedButton, styles.finishedButton] : styles.roundedButton}>
            <Text style={!this.handleAvailable('โปรแกรมที่_1_หายใจคลายเครียด','ทบทวนโปรแกรมที่_1_หายใจคลายเครียด',20) ? [styles.buttonFont, styles.disablebuttonFont] : styles.buttonFont}>
              ทบทวนโปรแกรมที่ 1 ({this.getHomeworkValue('ทบทวนโปรแกรมที่_1_หายใจคลายเครียด')}/3)
            </Text>
            {
              !this.handleAvailable('โปรแกรมที่_1_หายใจคลายเครียด','ทบทวนโปรแกรมที่_1_หายใจคลายเครียด',20) ?
              this.handlerenderWaitingDate('โปรแกรมที่_1_หายใจคลายเครียด','ทบทวนโปรแกรมที่_1_หายใจคลายเครียด') : <></>
            }
          </View>
        </TouchableOpacity>
      )
    } else {
      return(
        <></>
      )
    }
  }

  renderProgram2Button() {
    if(this.getHomeworkValue('ทบทวนโปรแกรมที่_1_หายใจคลายเครียด') >= 3) {
      return(
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('TreatmentScreen', { data : Program2, collection : 'โปรแกรมที่_2_ละเอียดลออดูกาย', name: 'โปรแกรมที่ 2 ละเอียดลออดูกาย' })}
          disabled={!this.isAvailible('ทบทวนโปรแกรมที่_1_หายใจคลายเครียด','latestTimestamp',20) && global.userArchivement['ทบทวนโปรแกรมที่_1_หายใจคลายเครียด'].value <= 3}
        >
          <View style={!this.isAvailible('ทบทวนโปรแกรมที่_1_หายใจคลายเครียด','latestTimestamp',20) && global.userArchivement['ทบทวนโปรแกรมที่_1_หายใจคลายเครียด'].value <= 3 ? [styles.roundedButton, styles.disableButton] : !!global.userArchivement['โปรแกรมที่_2_ละเอียดลออดูกาย'] ? [styles.roundedButton, styles.finishedButton] : styles.roundedButton}>
            <Text style={!this.isAvailible('ทบทวนโปรแกรมที่_1_หายใจคลายเครียด','latestTimestamp',20) && global.userArchivement['ทบทวนโปรแกรมที่_1_หายใจคลายเครียด'].value <= 3 ? [styles.buttonFont, styles.disablebuttonFont] : styles.buttonFont}>
              โปรแกรมที่ 2 “ละเอียดลออดูกาย”
            </Text>
            {
              !this.isAvailible('ทบทวนโปรแกรมที่_1_หายใจคลายเครียด','latestTimestamp',20) && global.userArchivement['ทบทวนโปรแกรมที่_1_หายใจคลายเครียด'].value <= 3 ?
              this.renderWaitingDate('ทบทวนโปรแกรมที่_1_หายใจคลายเครียด','latestTimestamp') : <></>
            }
          </View>
        </TouchableOpacity>
      )
    } else {
      return(
        <></>
      )
    }
  }

  renderHomework2Button() {
    if(!!global.userArchivement['โปรแกรมที่_2_ละเอียดลออดูกาย']) {
      return(
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('TreatmentScreen', { data : Homework2, collection : 'ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย', name: 'ทบทวนโปรแกรมที่ 2 ละเอียดลออดูกาย' })}
          disabled={!this.handleAvailable('โปรแกรมที่_2_ละเอียดลออดูกาย','ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย',20)}
        >
          <View style={!this.handleAvailable('โปรแกรมที่_2_ละเอียดลออดูกาย','ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย',20) ? [styles.roundedButton, styles.disableButton] : this.getHomeworkValue('ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย') >= 3 ? [styles.roundedButton, styles.finishedButton] : styles.roundedButton}>
            <Text style={!this.handleAvailable('โปรแกรมที่_2_ละเอียดลออดูกาย','ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย',20) ? [styles.buttonFont, styles.disablebuttonFont] : styles.buttonFont}>
              ทบทวนโปรแกรมที่ 2 ({this.getHomeworkValue('ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย')}/3)
            </Text>
            {
              !this.handleAvailable('โปรแกรมที่_2_ละเอียดลออดูกาย','ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย',20) ?
              this.handlerenderWaitingDate('โปรแกรมที่_2_ละเอียดลออดูกาย','ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย') : <></>
            }
          </View>
        </TouchableOpacity>
      )
    } else {
      return(
        <></>
      )
    }
  }

  renderProgram3Button() {
    if(this.getHomeworkValue('ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย') >= 3) {
      return(
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('TreatmentScreen', { data : Program3, collection : 'โปรแกรมที่_3_ตระหนักรู้ในอารมณ์', name: 'โปรแกรมที่ 3 ตระหนักรู้ในอารมณ์' })}
          disabled={!this.isAvailible('ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย','latestTimestamp',20) && global.userArchivement['ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย'].value <= 3}
        >
          <View style={!this.isAvailible('ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย','latestTimestamp',20) && global.userArchivement['ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย'].value <= 3 ? [styles.roundedButton, styles.disableButton] : !!global.userArchivement['โปรแกรมที่_3_ตระหนักรู้ในอารมณ์'] ? [styles.roundedButton, styles.finishedButton] : styles.roundedButton}>
            <Text style={!this.isAvailible('ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย','latestTimestamp',20) && global.userArchivement['ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย'].value <= 3 ? [styles.buttonFont, styles.disablebuttonFont] : styles.buttonFont}>
              โปรแกรมที่ 3 “ตระหนักรู้ในอารมณ์”
            </Text>
            {
              !this.isAvailible('ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย','latestTimestamp',20) && global.userArchivement['ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย'].value <= 3 ?
              this.renderWaitingDate('ทบทวนโปรแกรมที่_2_ละเอียดลออดูกาย','latestTimestamp') : <></>
            }
          </View>
        </TouchableOpacity>
      )
    } else {
      return(
        <></>
      )
    }
  }

  renderHomework3Button() {
    if(!!global.userArchivement['โปรแกรมที่_3_ตระหนักรู้ในอารมณ์']) {
      return(
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('TreatmentScreen', { data : Homework3, collection : 'ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์', name: 'ทบทวนโปรแกรมที่ 3 ตระหนักรู้ในอารมณ์' })}
          disabled={!this.handleAvailable('โปรแกรมที่_3_ตระหนักรู้ในอารมณ์','ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์',20)}
        >
          <View style={!this.handleAvailable('โปรแกรมที่_3_ตระหนักรู้ในอารมณ์','ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์',20) ? [styles.roundedButton, styles.disableButton] : this.getHomeworkValue('ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์') >= 3 ? [styles.roundedButton, styles.finishedButton] : styles.roundedButton}>
            <Text style={!this.handleAvailable('โปรแกรมที่_3_ตระหนักรู้ในอารมณ์','ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์',20) ? [styles.buttonFont, styles.disablebuttonFont] : styles.buttonFont}>
              ทบทวนโปรแกรมที่ 3 ({this.getHomeworkValue('ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์')}/3)
            </Text>
            {
              !this.handleAvailable('โปรแกรมที่_3_ตระหนักรู้ในอารมณ์','ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์',20) ?
              this.handlerenderWaitingDate('โปรแกรมที่_3_ตระหนักรู้ในอารมณ์','ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์') : <></>
            }
          </View>
        </TouchableOpacity>
      )
    } else {
      return(
        <></>
      )
    }
  }

  renderProgram4Button() {
    if(this.getHomeworkValue('ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์') >= 3) {
      return(
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('TreatmentScreen', { data : Program4, collection : 'โปรแกรมที่_4_ปรับความคิดพิชิตเศร้า', name: 'โปรแกรมที่ 4 ปรับความคิด.....พิชิตเศร้า' })}
          disabled={!this.isAvailible('ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์','latestTimestamp',20) && global.userArchivement['ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์'].value <= 3}
        >
          <View style={!this.isAvailible('ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์','latestTimestamp',20) && global.userArchivement['ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์'].value <= 3 ? [styles.roundedButton, styles.disableButton] : !!global.userArchivement['โปรแกรมที่_4_ปรับความคิดพิชิตเศร้า'] ? [styles.roundedButton, styles.finishedButton] : styles.roundedButton}>
            <Text style={!this.isAvailible('ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์','latestTimestamp',20) && global.userArchivement['ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์'].value <= 3 ? [styles.buttonFont, styles.disablebuttonFont] : styles.buttonFont}>
              โปรแกรมที่ 4 “ปรับความคิด.....พิชิตเศร้า”
            </Text>
            {
              !this.isAvailible('ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์','latestTimestamp',20) && global.userArchivement['ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์'].value <= 3 ?
              this.renderWaitingDate('ทบทวนโปรแกรมที่_3_ตระหนักรู้ในอารมณ์','latestTimestamp') : <></>
            }
          </View>
        </TouchableOpacity>
      )
    } else {
      return(
        <></>
      )
    }
  }

  renderHomework4Button() {
    if(!!global.userArchivement['โปรแกรมที่_4_ปรับความคิดพิชิตเศร้า']) {
      return(
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('TreatmentScreen', { data : Homework4, collection : 'ทบทวนโปรแกรมที่_4_ปรับความคิดพิชิตเศร้า', name: 'ทบทวนโปรแกรมที่ 4 ตระหนักรู้ในอารมณ์' })}
          disabled={!this.handleAvailable('โปรแกรมที่_4_ปรับความคิดพิชิตเศร้า','ทบทวนโปรแกรมที่_4_ปรับความคิดพิชิตเศร้า',20)}
        >
          <View style={!this.handleAvailable('โปรแกรมที่_4_ปรับความคิดพิชิตเศร้า','ทบทวนโปรแกรมที่_4_ปรับความคิดพิชิตเศร้า',20) ? [styles.roundedButton, styles.disableButton] : this.getHomeworkValue('ทบทวนโปรแกรมที่_4_ปรับความคิดพิชิตเศร้า') >= 3 ? [styles.roundedButton, styles.finishedButton] : styles.roundedButton }>
            <Text style={!this.handleAvailable('โปรแกรมที่_4_ปรับความคิดพิชิตเศร้า','ทบทวนโปรแกรมที่_4_ปรับความคิดพิชิตเศร้า',20) ? [styles.buttonFont, styles.disablebuttonFont] : styles.buttonFont}>
              ทบทวนโปรแกรมที่ 4 ({this.getHomeworkValue('ทบทวนโปรแกรมที่_4_ปรับความคิดพิชิตเศร้า')}/3)
            </Text>
            {
              !this.handleAvailable('โปรแกรมที่_4_ปรับความคิดพิชิตเศร้า','ทบทวนโปรแกรมที่_4_ปรับความคิดพิชิตเศร้า',20) ?
              this.handlerenderWaitingDate('โปรแกรมที่_4_ปรับความคิดพิชิตเศร้า','ทบทวนโปรแกรมที่_4_ปรับความคิดพิชิตเศร้า') : <></>
            }
          </View>
        </TouchableOpacity>
      )
    } else {
      return(
        <></>
      )
    }
  }

  doQuestionare = (data) => {
    const initTimestamp = firebase.firestore.Timestamp.fromDate(new Date());
    this.props.navigation.navigate('prologueScreen', { data : data, initTimestamp: initTimestamp })
  }

  async changeScreenOrientation () {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
  }

  async changeScreenOrientationPotrait () {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }

  heavyRotation() {
    if(this.state.isRotate){
      this.setState({isRotate:false})
      this.changeScreenOrientationPotrait()
    }
    else {
      this.setState({isRotate:true})
      this.changeScreenOrientation()
    }
  }

  render() {
    return (
      <ScrollView>
        <View 
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: 'white',
            paddingVertical: 20,
            paddingHorizontal: 10
          }}
        >
          <Text style={styles.title}>หน้านี้สำหรับทดสอบระบบเท่านั้น{'\n'}ในแอพเวอร์ชั่นจริง ผู้ใช้จะไม่เห็นหน้านี้</Text>
          <Text style={styles.subtitle}>ทดสอบระบบแบบประเมินภาวะสุขภาพจิต</Text>
          <View style={
            {flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingVertical: 20}}
          >
            <TouchableOpacity onPress={() => this.heavyRotation()}>
              <View style={styles.roundedButton}>
                <Text style={{textAlign: 'center', padding: 20, color: 'white', fontFamily: 'Kanit-Regular', fontSize: 14}}>heavyRotation</Text>
              </View>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('MockUpScreen', { data : MockupData})}>
              <View style={styles.roundedButton}>
                <Text style={{textAlign: 'center', padding: 20, color: 'white', fontFamily: 'Kanit-Regular', fontSize: 14}}>MockUpScreen</Text>
              </View>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => this.props.navigation.navigate('spwbScreen', { data : SPWB})}>
              <View style={styles.roundedButton}>
                <Text style={{textAlign: 'center', padding: 20, color: 'white', fontFamily: 'Kanit-Regular', fontSize: 14}}>ทดสอบแบบวัดสุขภาวะทางจิตใจ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('awarenessScreen', { data : awareness})}>
              <View style={styles.roundedButton}>
                <Text style={{textAlign: 'center', padding: 20, color: 'white', fontFamily: 'Kanit-Regular', fontSize: 14}}>ทดสอบแบบวัดการมีสติ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('dassScreen', { data : DASS})}>
              <View style={styles.roundedButton}>
                <Text style={{textAlign: 'center', padding: 20, color: 'white', fontFamily: 'Kanit-Regular', fontSize: 14}}>ทดสอบแบบสอบถามวัดภาวะสุขภาพจิต</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('q8Screen', { data : Q8, score : 11})}>
              <View style={styles.roundedButton}>
                <Text style={{textAlign: 'center', padding: 20, color: 'white', fontFamily: 'Kanit-Regular', fontSize: 14}}>ทดสอบแบบประเมินQ8(ซึมเศร้าค่อนข้างมาก)</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('q8Screen', { data : Q8, score : 14})}>
              <View style={styles.roundedButton}>
                <Text style={{textAlign: 'center', padding: 20, color: 'white', fontFamily: 'Kanit-Regular', fontSize: 14}}>ทดสอบแบบประเมินQ8(ซึมเศร้าสูงมาก)</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CompletedSurvey', { score : 0 })}>
              <View style={styles.roundedButton}>
                <Text style={{textAlign: 'center', padding: 20, color: 'white', fontFamily: 'Kanit-Regular', fontSize: 14}}>ทดสอบหน้าประกาศผลประเมิน(สุขภาพจิตดี)</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CompletedSurvey', { score : 5 })}>
              <View style={styles.roundedButton}>
                <Text style={{textAlign: 'center', padding: 20, color: 'white', fontFamily: 'Kanit-Regular', fontSize: 14}}>ทดสอบหน้าประกาศผลประเมิน(ซึมเศร้าเล็กน้อย)</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CompletedSurvey', { score : 7 })}>
              <View style={styles.roundedButton}>
                <Text style={{textAlign: 'center', padding: 20, color: 'white', fontFamily: 'Kanit-Regular', fontSize: 14}}>ทดสอบหน้าประกาศผลประเมิน(ซึมเศร้าปานกลาง)</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CompletedSurvey', { score : 11 })}>
              <View style={styles.roundedButton}>
                <Text style={{textAlign: 'center', padding: 20, color: 'white', fontFamily: 'Kanit-Regular', fontSize: 14}}>ทดสอบหน้าประกาศผลประเมิน(ซึมเศร้าค่อนข้างมาก)</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('CompletedSurvey', { score : 14 })}>
              <View style={styles.roundedButton}>
                <Text style={{textAlign: 'center', padding: 20, color: 'white', fontFamily: 'Kanit-Regular', fontSize: 14}}>ทดสอบหน้าประกาศผลประเมิน(ซึมเศร้าสูงมาก)</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.subtitle}>ทดสอบระบบแบบประเมินภาวะสุขภาพจิต{'\n'}(ระยะเวลาขั้นต่ำในการดูวิดีโอเหลือ 3 วินาที){'\n'}(ระยะเวลาในการรอโปรแกรมถัดไปเหลือ 20 วิ)</Text>
          <View style={
            {flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingVertical: 20}}
          >
            {this.renderProgram1Button()}
            {this.renderHomework1Button()}
            {this.renderProgram2Button()}
            {this.renderHomework2Button()}
            {this.renderProgram3Button()}
            {this.renderHomework3Button()}
            {this.renderProgram4Button()}
            {this.renderHomework4Button()}
          </View>
        </View>
      </ScrollView>
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
    fontSize: Dimensions.get('window').width >= 375 ? 16 : 14
  },
  subtitle: {
    textAlign: 'center',
    marginVertical: 8,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'Kanit-Medium',
    fontSize: Dimensions.get('window').width >= 375 ? 18 : 14
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
    width: (Dimensions.get('window').width * 0.8),
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
    fontSize: Dimensions.get('window').width >= 375 ? 16 : 14
  },
  disablebuttonFont: {
    color: '#a3a3a3'
  },
  waitingFont: {
    fontFamily: 'Kanit-Regular',
    color: '#535353',
    fontSize: Dimensions.get('window').width >= 375 ? 12 : 10
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