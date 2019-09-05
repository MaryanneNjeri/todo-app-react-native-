import {createAppContainer,createSwitchNavigator } from "react-navigation";
import AuthNavigator from './Auth/AuthNavigator';
import AppNavigator from './App/AppNavigator';

export default createAppContainer(createSwitchNavigator(
    {
        Auth: AuthNavigator,
        App:AppNavigator
    }
))