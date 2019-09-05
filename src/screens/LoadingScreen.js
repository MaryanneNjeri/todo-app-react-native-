import React from 'react';
import { LinearGradient } from 'expo';
import { StyleSheet, Dimensions, Image } from 'react-native';
import {
  Content, Container, Text, Button, View,
} from 'native-base';
import { primaryGradientArray } from '../../app/utils/Colors';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',

  },
  gradient: {
    flex: 1,
    padding: 15,
  },
  button: {
    width: width - 100,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',

  },
  button1: {
    width: width - 100,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
    marginTop: 20,
  },
  buttonsContainer: {

    marginBottom: 100,
    position: 'absolute',
    bottom: 0,
  },
  imageContainer: {
    alignItems: 'center',
    flexGrow: 0.5,
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    width: 200,
    height: 200,
  },
});
export default class LoadingScreen extends React.Component {
    logIn= () => {
      this.props.navigation.navigate('Login');
    };

    render() {
      return (
        <Container>
          <LinearGradient colors={primaryGradientArray} style={styles.gradient}>
            <Content contentContainerStyle={styles.container}>
              <View style={styles.imageContainer}>
                <Image resizeMode="contain" style={styles.logo} source={require('../../assets/images/logo.png')} />
              </View>
              <View style={styles.buttonsContainer}>
                <Button transparent bordered style={styles.button}><Text style={{ color: 'white', fontWeight: '200' }}>Sign up</Text></Button>
                <Button bordered onPress={this.logIn} style={styles.button1}><Text style={{ color: '#d13e60', fontWeight: '200' }}>Login</Text></Button>
              </View>
            </Content>
          </LinearGradient>
        </Container>
      );
    }
}
