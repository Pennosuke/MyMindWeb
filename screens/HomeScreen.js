import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Alert, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import tabA from '../tabs/tabA'
import tabB from '../tabs/tabB'
import tabBextra from '../tabs/tabBextra'
import tabC from '../tabs/tabC'
import tabTest from '../tabs/tabTest'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export function HomeScreen() {

  const Tab = createMaterialTopTabNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
    <Tab.Navigator>
      <Tab.Screen
        name="แบบประเมิน"
        component={tabA}
        tabBarOptions={{labelStyle: { fontFamily: 'Kanit-Regular' }}}
      />
      <Tab.Screen
        name="โปรแกรม"
        component={tabB}
        tabBarOptions={{labelStyle: { fontFamily: 'Kanit-Regular' }}}
      />
      <Tab.Screen
        name="โปรแกรมเสริม"
        component={tabBextra}
        tabBarOptions={{labelStyle: { fontFamily: 'Kanit-Regular' }}}
      />
      {/* <Tab.Screen
        name="ทดสอบระบบ"
        component={tabTest}
        tabBarOptions={{labelStyle: { fontFamily: 'Kanit-Regular' }}}
      /> */}
      <Tab.Screen
        name="โปรไฟล์"
        component={tabC}
        tabBarOptions={{labelStyle: { fontFamily: 'Kanit-Regular' }}}
      />
    </Tab.Navigator>
    </SafeAreaView>
  );
}