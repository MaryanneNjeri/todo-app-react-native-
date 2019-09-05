import { createStackNavigator } from "react-navigation";
import LoginScreen from '../../screens/LoginScreen';
import LoadingScreen from '../../screens/LoadingScreen';
const AuthNavigator  = createStackNavigator({
    Loading:{screen:LoadingScreen,
        navigationOptions:{header:null}
    },
    Login:{
        screen:LoginScreen,
        navigationOptions:{header: null}
    }
});

export default AuthNavigator;