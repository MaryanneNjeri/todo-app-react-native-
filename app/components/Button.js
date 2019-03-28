import React from 'react';
import { View,StyleSheet,TouchableOpacity } from 'react-native'; 
import { MaterialIcons } from '@expo/vector-icons';

const Button = ({ deleteAllItems }) => (
    <View style = {styles.buttonContainer}>
     <TouchableOpacity>
                     <MaterialIcons
                        name="delete-forever"
                        size={24}
                        color='white'
                        onPress={deleteAllItems}
                    />
                 </TouchableOpacity>
    </View>
) 
const styles = StyleSheet.create({
    buttonContainer: {
      margin: 10,
      color: '#841584'
    },
    headerText: {
      color: 'white',
      fontSize: 20,
      fontWeight: '500'
    }
  });
  export default Button;