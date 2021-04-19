import { Video } from 'expo-av';
import React, { Component } from 'react';
import { Dimensions, Image, Picker, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar, ActivityIndicator } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import SelectionGroup, { SelectionHandler } from 'react-native-selection-group';
import { emotions, program5Image } from '../constants/MockupData';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { db } from '../constants/firebase'
import * as ScreenOrientation from 'expo-screen-orientation';
import { DeviceMotion } from 'expo-sensors';
import { Program0 } from '../constants/โปรแกรมฝึกปฏิบัติpc';
import { prologue } from '../constants/แบบประเมิน';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const GREEN = 'rgba(141,196,63,1)';
const BLUE = '#7BDAF8';
const SELECTED = '#22459E';

const defaultSurvey = [
  {
    contentId: '1',
    contentType: 'Info',
    contentText: 'This is default content',
    hasImage: false,
    imageUri: undefined
  }
]

export default class ZeroScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contents: defaultSurvey,
      currentStep: 0,
      answers: [],
      totalPlayTime: 0,
      playTime: 0,
      checkpointVideo: 0,
      selectionHandlers: {},
      textInputHandlers: {},
      videoHandlers: [],
      currentChoiceAfterGame: {},
      expectedAnswerAfterGame: null,
      gameHandlers: false,
      rotate: 0
    };
  }
  
  renderSpecialButton(buttonText ,onPressEvent) {
    return (
      <View style={{ flexGrow: 1, marginTop: 10, marginBottom: 10 }}>
        <TouchableOpacity onPress={onPressEvent}>
          <View style={styles.nonSelectionButton}>
            <Text style={styles.buttonText}>
              {buttonText}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  renderPrevButton(onPressEvent, enabledCondition) {
    return (
      <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
        <TouchableOpacity onPress={onPressEvent} disabled={!enabledCondition}>
          <View style={enabledCondition ? styles.navButton : styles.disableNavButton}>
            <Text style={enabledCondition ? styles.buttonText : [styles.buttonText,{color: '#a3a3a3'}]}>
              ย้อนกลับ
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  renderNextOrFinishButton(survey, NextEvent, FinishedEvent, enabledCondition) {
    const { currentStep, contents } = this.state;
    if(currentStep < survey.length - 1) {
      return (
        <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
          <TouchableOpacity onPress={NextEvent} disabled={!enabledCondition}>
            <View style={enabledCondition ? styles.navButton : styles.disableNavButton}>
              <Text style={enabledCondition ? styles.buttonText : [styles.buttonText,{color: '#a3a3a3'}]}>
                ถัดไป
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
    else {
      return (
        <View style={{ flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10 }}>
          <TouchableOpacity onPress={FinishedEvent} disabled={!enabledCondition}>
            <View style={enabledCondition ? [styles.navButton,{backgroundColor: SELECTED}] : styles.disableNavButton}>
              <Text style={enabledCondition ? styles.buttonText : [styles.buttonText,{color: '#a3a3a3'}]}>
                เสร็จสิ้น
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }

  renderInfo(survey,stepIndex) {
    const { currentStep } = this.state;
    const { contentText } = survey[stepIndex];
    const options = survey[stepIndex].options === undefined ? undefined : survey[stepIndex].options
    return (
      <View style={styles.surveyContainer}>
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Text style={styles.infoText}>{contentText}</Text>
          {options !== undefined ? (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={options.imageUri} style={styles.charecterSize}/>
            </View>
          ) : (
            <></>
          )}
        </View>
        {
          !!survey[stepIndex].goToEvaluation ? (
            <View style={{ marginTop: 5, marginBottom: 5, justifyContent: 'flex-start' }}>
              {
                this.renderSpecialButton(
                  'เริ่มทำแบบประเมิน',
                  () => {
                    const initTimestamp = firebase.firestore.Timestamp.fromDate(new Date());
                    this.props.navigation.navigate('prologueScreen', { data : prologue, initTimestamp: initTimestamp })
                  }
                )
              }
            </View>
          ) : (
            <View style={styles.navButtonContainerStyle}>
              {
                this.renderNextOrFinishButton(
                  survey,
                  () => {
                    this.setState({ currentStep: currentStep + 1});
                  },
                  () => {
                    this.setState({ currentStep: currentStep + 1});
                  },
                  true
                )
              }
            </View>
          )
        }
      </View>
    );
  }

  getStepContent(survey,stepIndex) {
    const contentType = survey[stepIndex].contentType;
    if (contentType === 'Info') {
      return this.renderInfo(survey,stepIndex);
    } else {
      return <Text>Unknown stepIndex</Text>;
    }
  }

  render() {
    const survey = Program0;
    return (
      <GestureRecognizer style={styles.background}>
        <ScrollView style={{flex:1 ,width:'100%'}}>
          <View style={{width:'100%', height: '100%' }}>
            <Text style={{textAlign: 'center', padding: 20, color: 'white', fontFamily: 'Kanit-Regular', fontSize: 16}}>
                {this.state.currentStep + 1} / {survey.length}
            </Text>
            <View style={styles.mainSurveyContainer}>
              {this.getStepContent(survey,this.state.currentStep)}
            </View>
          </View>
        </ScrollView>
      </GestureRecognizer>
    );
  }
}

const styles = StyleSheet.create({
  mainSurveyContainer: {
    width: Dimensions.get('window').width < 600 ? '90%' : Dimensions.get('window').width < 960 ? '70%' : '50%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    alignContent: 'center',
    padding: 5,
    marginBottom: 30,
    flexGrow: 0,
  },
  surveyContainer: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    alignContent: 'center',
    padding: 5,
    flexGrow: 0,
  },
  answersContainer: {
    width: '90%',
    maxHeight: '20%',
    marginTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    elevation: 20,
    borderRadius: 10,
  },
  selectionGroupContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    alignContent: 'flex-end',
  },
  background: {
    flex: 1,
    /*justifyContent: 'center',
    alignItems: 'center',*/
    backgroundColor: BLUE
  },
  questionText: {
    marginBottom: 20,
    fontSize: Dimensions.get('window').width < 375 ? 12 : Dimensions.get('window').width < 600 ? 14 : 16,
  },
  textBox: {
    borderWidth: 1,
    borderColor: 'rgba(204,204,204,1)',
    backgroundColor: 'white',
    borderRadius: 10,
    
    padding: 10,
    textAlignVertical: 'top',
    marginLeft: 10,
    marginRight: 10
  },
  numericInput: {
    borderWidth: 1,
    borderColor: 'rgba(204,204,204,1)',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    marginLeft: 10,
    marginRight: 10
  },
  infoText: {
    marginBottom: 20,
    fontSize: Dimensions.get('window').width < 375 ? 12 : Dimensions.get('window').width < 600 ? 14 : 16,
    fontFamily: 'Kanit-Regular'
  },
  charecterSize: {
    width: 60,
    height: 184
  },
  navButtonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  inputStyle: {
    width: '90%',
    marginBottom: 15,
    paddingVertical: 5,
    alignSelf: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    textAlign: "center",
    fontFamily: "Kanit-Regular",
    fontSize: Dimensions.get('window').width < 375 ? 12 : Dimensions.get('window').width < 600 ? 14 : 16,
  },
  smallInputStyle: {
    width: '60%',
    marginBottom: 15,
    paddingVertical: 5,
    alignSelf: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    textAlign: "center",
    fontFamily: "Kanit-Regular",
    fontSize: Dimensions.get('window').width < 375 ? 10 : Dimensions.get('window').width < 600 ? 12 : 14,
  },
  dropDownStyle: {
    width: '90%',
    marginBottom: 15,
    paddingVertical: 5,
    alignSelf: "center"
  },
  emotionButton: {
    backgroundColor: 'transparent',
    width: Dimensions.get('window').width < 600 ? (windowWidth * 0.2) : Dimensions.get('window').width < 960 ? (windowWidth * 0.15) : (windowWidth * 0.1),
    height: Dimensions.get('window').width < 600 ? (windowWidth * 0.2) : Dimensions.get('window').width < 960 ? (windowWidth * 0.15) : (windowWidth * 0.1),
    margin: Dimensions.get('window').width < 600 ? 5 : Dimensions.get('window').width < 960 ? 10 : 15,
    borderRadius: 5
  },
  selectedemotionButton: {
    backgroundColor: '#A4D6D5',
    width: Dimensions.get('window').width < 600 ? (windowWidth * 0.2) : Dimensions.get('window').width < 960 ? (windowWidth * 0.15) : (windowWidth * 0.1),
    height: Dimensions.get('window').width < 600 ? (windowWidth * 0.2) : Dimensions.get('window').width < 960 ? (windowWidth * 0.15) : (windowWidth * 0.1),
    margin: Dimensions.get('window').width < 600 ? 5 : Dimensions.get('window').width < 960 ? 10 : 15,
    borderRadius: 10
  },
  coverImage: {
    flex: 1,
    resizeMode: 'cover',
    width: 'auto',
    justifyContent: 'center'
  },
  imageButton: {
    backgroundColor: 'transparent',
    marginVertical: Dimensions.get('window').width < 600 ? 5 : Dimensions.get('window').width < 960 ? 10 : 15,
    marginHorizontal: Dimensions.get('window').width < 600 ? 2.5 : Dimensions.get('window').width < 960 ? 5 : 7.5,
    borderRadius: 5
  },
  selectedImageButton: {
    backgroundColor: '#8DC43F',
    marginVertical: Dimensions.get('window').width < 600 ? 5 : Dimensions.get('window').width < 960 ? 10 : 15,
    marginHorizontal: Dimensions.get('window').width < 600 ? 2.5 : Dimensions.get('window').width < 960 ? 5 : 7.5,
    borderRadius: Dimensions.get('window').width < 600 ? 7 : Dimensions.get('window').width < 960 ? 7 : 10,
  },
  imageStyle: {
    width: Dimensions.get('window').width < 600 ? (windowWidth * 0.7) : Dimensions.get('window').width < 960 ? (windowWidth * 0.6) : (windowWidth * 0.3),
    height: Dimensions.get('window').width < 600 ? (windowWidth * 0.7 * 0.75) : Dimensions.get('window').width < 960 ? (windowWidth * 0.6 * 0.75) : (windowWidth * 0.3 * 0.75),
    margin: Dimensions.get('window').width < 600 ? 10 : Dimensions.get('window').width < 960 ? 10 : 15,
  },
  selectionButton: {
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
    backgroundColor: SELECTED,
    display: "flex",
    padding: 8,
    margin: 2
  },
  nonSelectionButton: {
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
    backgroundColor: GREEN,
    display: "flex",
    padding: 8,
    margin: 2
  },
  disabledSelectionButton: {
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
    backgroundColor: '#dfdfdf',
    display: "flex",
    padding: 8,
    margin: 2
  },
  navButton: {
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
    backgroundColor: GREEN,
    display: "flex",
    padding: 8,
    margin: 2
  },
  disableNavButton: {
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
    backgroundColor: '#dfdfdf',
    display: "flex",
    padding: 8,
    margin: 2
  },
  videoCanvas : {
    width: '100%',
    height: Dimensions.get('window').width < 600 ? (((windowWidth * 0.9) - 40) * 45 / 80) : Dimensions.get('window').width < 960 ? (((windowWidth * 0.7) - 40) * 45 / 80) : (((windowWidth * 0.5) - 40) * 45 / 80),
    alignSelf: "center",
    //borderWidth: 1,
    //borderColor: '#444444'
  },
  buttonText : {
    textAlign: 'center',
    color: 'white',
    fontFamily:'Kanit-Regular',
    fontSize: Dimensions.get('window').width < 600 ? 12 : Dimensions.get('window').width < 960 ? 14 : 16,
  }
});