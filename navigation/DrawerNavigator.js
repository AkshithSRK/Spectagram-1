import * as React from 'react';
import {CreateDrawerNavigator} from '@react-navigation';
import TabNavigator from "./TabNavigator";
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = 'Home' component={TabNavigator} /><Drawer.Screen name = 'Profile' component={Profile} />
            </Drawer.Navigator>

    )
    }

    export default DrawerNavigator;


