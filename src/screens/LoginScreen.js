import React from 'react';
import {
  Text, Container, Content, Icon, View, Header, Title, Left, Body, Right, Button,
} from 'native-base';
import { StyleSheet } from 'react-native';
import LoginForm from '../../app/components/Login/LoginForm';

const styles = StyleSheet.create({
  container: {

    padding: 15,
    justifyContent: 'center',

  },
  Icon: {
    alignItems: 'center',
    marginTop: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 15,
  },

});
export default class LoginScreen extends React.Component {
    back=() => {
      this.props.navigation.navigate('Loading');
    };

    render() {
      return (
        <Container>
          <Header transparent>
            <Left>
              <Icon type="Feather" name="arrow-left" onPress={this.back} style={{ color: '#d13e60' }} />
            </Left>
            <Body>
              <Title style={{ color: '#d13e60', fontWeight: '200' }}>Log In</Title>
            </Body>
            <Right />
          </Header>

          <Content>

            <View style={styles.Icon}>
              <Icon type="FontAwesome" name="user-circle-o" style={{ color: '#d13e60', fontSize: 120 }} />
            </View>


            <Text>{' '}</Text>
            <View style={styles.container}>
              <LoginForm />
            </View>
            <Body>
              <Text style={{ color: '#d13e60', fontWeight: '200' }}>Forgot Password ?</Text>
            </Body>
            <Text>{' '}</Text>
            <View style={styles.buttonContainer}>
              <Button iconLeft style={{ backgroundColor: '#0033cc' }}>
                <Icon name="facebook" type="FontAwesome" style={{ color: 'white' }} />
                <Text style={{ color: 'white', fontWeight: '200', fontSize: 13 }}>Login with facebook</Text>
              </Button>
              <Text>{' '}</Text>
              <Button iconLeft danger>
                <Icon name="googleplus" type="AntDesign" style={{ color: 'white' }} />
                <Text style={{ color: 'white', fontWeight: '200', fontSize: 13 }}>Login with google</Text>
              </Button>
            </View>
          </Content>
        </Container>
      );
    }
}
