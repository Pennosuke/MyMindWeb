import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TouchableOpacity, Image, Dimensions } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

const GREEN = 'rgba(141,196,63,1)';
const BLUE = '#7BDAF8';
const defaultAnswers = 0;

export default class InitSupScreen extends Component {
  renderReloadButton() {
    return(
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity 
          onPress={() => this.props.navigation.replace('Init')}
        >
          <View style={styles.roundedButton}>
            <Text style={styles.buttonText}>Refresh</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const errorData = this.props.route.params.errorData;
    return (
      <GestureRecognizer style={styles.background}>
        <ScrollView style={{flex:1 ,width:'100%'}}>
          <View style={{width:'100%', height: '100%' , paddingTop: 30}}>
            <View style={styles.mainSurveyContainer}>
              <View style={styles.surveyContainer}>
                <View style={{ margin: 10 }}>
                  <Text style={[styles.highlightText,{textAlign: 'center', color: '#749600'}]}>ขออภัย เกิดข้อผิดพลาดบางอย่าง</Text>
                  <Text style={styles.questionText}>{errorData}</Text>
                  <Text style={[styles.questionText, {textAlign: 'center'}]}>{'กรุณากดปุ่ม Refresh เพื่อลองโหลดใหม่อีกครั้ง'}</Text>
                  {this.renderReloadButton()}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </GestureRecognizer>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLUE,
  },
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
  container: {
    minWidth: '70%',
    maxWidth: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    maxHeight: '80%',
    padding: 20,
  },
  questionText: {
    marginBottom: 20,
    fontFamily: 'Kanit-Regular',
    fontSize: Dimensions.get('window').width < 375 ? 12 : Dimensions.get('window').width < 600 ? 14 : 16,
  },
  highlightText : {
    marginBottom: 20,
    fontFamily: 'Kanit-Medium',
    fontSize: Dimensions.get('window').width < 375 ? 14 : Dimensions.get('window').width < 600 ? 16 : 18,
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
  charecterSize: {
    width: 60,
    height: 184
  },
  contactContent: {
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  navButtonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around'
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
  buttonText : {
    textAlign: 'center',
    color: 'white',
    fontFamily:'Kanit-Regular',
    fontSize: Dimensions.get('window').width < 600 ? 12 : Dimensions.get('window').width < 960 ? 14 : 16,
  }
});