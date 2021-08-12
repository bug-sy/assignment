import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Screen1 from '../screen/First';
import Second from '../screen/Second';
import Third from '../screen/Third';
import HomeScreen from '../screen/HomeScreen';
import Fourth from '../screen/Fourth';



const AppNavigator = createStackNavigator(
    {
        Screen1: {
            screen: Screen1,
            navigationOptions: { headerShown: false },
        },
        Screen2: {
            screen: Second,
            navigationOptions: { headerShown: false },
        },
        Screen3: {
            screen: Third,
            navigationOptions: { headerShown: false },
        },
        Screen4: {
            screen:Fourth ,
            navigationOptions: { headerShown: false },
        },
        HomeScreen: {
            screen:HomeScreen ,
            navigationOptions: { headerShown: false },
        },
    },
    {
        initialRouteName: "HomeScreen",
    },
);

export default createAppContainer(AppNavigator);
