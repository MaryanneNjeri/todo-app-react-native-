import React from 'react';
import { View,Text,StyleSheet } from 'react-native'; 

const SubTitle = ({ subtitle }) => (
    <View style = {styles.titleContainer}>
    <Text style= {styles.titleText}>{subtitle.toLowerCase()}</Text>
    </View>
) 
const styles = StyleSheet.create({
    titleContainer: {
      marginTop: 20
    },
    titleText: {
      color: 'white',
      fontSize: 22,
      fontWeight: '500'
    }
  });
  export default SubTitle;