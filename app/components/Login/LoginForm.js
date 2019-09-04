import React from 'react';
import {View,Text,Item,Button,Input,Form } from "native-base";
import {StyleSheet} from "react-native";

const styles=StyleSheet.create({
    Item:{
        backgroundColor: '#f2f2f2',
        marginTop: 8
    },
    Input:{
       fontSize: 12,
       fontWeight: "200"
    }
});
export default class LoginForm extends React.Component {
    render() {
        return(

            <View>
                <Form>
                <Item regular  style={styles.Item}>

                    <Input
                        placeholder='Email'
                        style={styles.Input}
                    />
                </Item>

                <Item regular style={styles.Item}>

                    <Input
                        placeholder='Password'
                        style={styles.Input}
                        secureTextEntry

                    />
                </Item>
                </Form>
                <Text>{" "}</Text>
                <Button block style={{backgroundColor:'#d13e60'}}>
                    <Text style={{color:'white',fontWeight: '200'}}>Confirm Login</Text>
                </Button>
            </View>
        )
    }
}