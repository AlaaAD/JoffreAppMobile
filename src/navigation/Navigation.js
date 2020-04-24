import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen'
import OffrirScreen from '../screens/OffrirScreen'
import ChatScreen from '../screens/ChatScreen'
import FavorisScreen from '../screens/FavorisScreen'
import MyProfilScreen from '../screens/DrawerScreen/MyProfilScreen'
import MyOffersScreen from '../screens/DrawerScreen/MyOffersScreen'
import AboutScreen from '../screens/DrawerScreen/AboutScreen'
import SupportScreen from '../screens/DrawerScreen/SupportScreen'

import colors from '../styles/colors'
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerContent} from './DrawerContent'


const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const OffrirStack = createStackNavigator();
const ChatStack = createStackNavigator();
const FavorisStack = createStackNavigator();

const MyProfilStack = createStackNavigator();
const MyOffersStack = createStackNavigator();
const AboutStack = createStackNavigator();
const SupportStack = createStackNavigator();

const Drawer = createDrawerNavigator();
//Bottom tab
const HomeStackScreen = ({navigation}) =>(
    <HomeStack.Navigator screenOptions={{
        headerStyle : {
            backgroundColor : colors.lightPurple,
        },
        headerTintColor : colors.white,
        headerTitleStyle : {
            fontWeight : 'bold'
        }
    }}>
    <HomeStack.Screen name = "Home" component={HomeScreen} options={{
        title : 'Home',
        
        headerLeft : () => (
            <Icon.Button name ="md-menu" size={25} color = {colors.white} backgroundColor = {colors.lightPurple}
             onPress={()=> {navigation.openDrawer()}} >
                </Icon.Button>
)
    }} />
</HomeStack.Navigator>
)
const OffrirStackScreen = ({navigation}) =>(
    <OffrirStack.Navigator screenOptions={{
        headerStyle : {
            backgroundColor : colors.lightPurple,
        },
        headerTintColor : colors.white,
        headerTitleStyle : {
            fontWeight : 'bold'
        }
    }}>
    <OffrirStack.Screen name = "Offrir" component={OffrirScreen} options={{
        title : 'Offrir',
        headerLeft : () => {
            <Icon.Button name ="menu" size={25} 
            backgroundColor = "#fff" onPress={()=> {navigation.openDrawer()}} >
                </Icon.Button>
        }
    }} />
</OffrirStack.Navigator>
)
const ChatStackScreen = ({navigation}) =>(
    <ChatStack.Navigator screenOptions={{
        headerStyle : {
            backgroundColor : colors.lightPurple,
        },
        headerTintColor : colors.white,
        headerTitleStyle : {
            fontWeight : 'bold'
        }
    }}>
    <ChatStack.Screen name = "Chat" component={ChatScreen} options={{
        title : 'Chat',
        headerLeft : () => {
            <Icon.Button name ="menu" size={25} 
            backgroundColor = "#fff" onPress={()=> {navigation.openDrawer()}} >
                </Icon.Button>
        }
    }} />
</ChatStack.Navigator>
)
const FavorisStackScreen = ({navigation}) =>(
    <FavorisStack.Navigator screenOptions={{
        headerStyle : {
            backgroundColor : colors.lightPurple,
        },
        headerTintColor : colors.white,
        headerTitleStyle : {
            fontWeight : 'bold'
        }
    }}>
    <OffrirStack.Screen name = "Favoris" component={FavorisScreen} options={{
        title : 'Favoris',
        headerLeft : () => {
            <Icon.Button name ="menu" size={25} 
            backgroundColor = "#fff" onPress={()=> {navigation.openDrawer()}} >
                </Icon.Button>
        }
    }} />
</FavorisStack.Navigator>
)
//Drawer 
const AboutStackScreen = ({navigation}) =>(
    <AboutStack.Navigator screenOptions={{
        headerStyle : {
            backgroundColor : colors.lightPurple,
        },
        headerTintColor : colors.white,
        headerTitleStyle : {
            fontWeight : 'bold'
        }
    }}>
    <AboutStack.Screen name = "About" component={AboutScreen} options={{
        
        headerLeft : () => {
            <Icon.Button name ="menu" size={25} 
            backgroundColor = "#009387" onPress={()=> {navigation.openDrawer()}} >
                </Icon.Button>
        }
    }} />
</AboutStack.Navigator>
)
const MyOffersStackScreen = ({navigation}) =>(
    <MyOffersStack.Navigator screenOptions={{
        headerStyle : {
            backgroundColor : colors.lightPurple,
        },
        headerTintColor : colors.white,
        headerTitleStyle : {
            fontWeight : 'bold'
        }
    }}>
    <MyOffersStack.Screen name = "MyOffers" component={MyOffersScreen} options={{
        
        headerLeft : () => {
            <Icon.Button name ="menu" size={25} 
            backgroundColor = "#009387" onPress={()=> {navigation.openDrawer()}} >
                </Icon.Button>
        }
    }} />
</MyOffersStack.Navigator>
)
const MyProfilStackScreen = ({navigation}) =>(
    <MyProfilStack.Navigator screenOptions={{
        headerStyle : {
            backgroundColor : colors.lightPurple,
        },
        headerTintColor : colors.white,
        headerTitleStyle : {
            fontWeight : 'bold'
        }
    }}>
    <MyProfilStack.Screen name = "MyProfil" component={MyProfilScreen} options={{
        
        headerLeft : () => {
            <Icon.Button name ="menu" size={25} 
            backgroundColor = "#009387" onPress={()=> {navigation.openDrawer()}} >
                </Icon.Button>
        }
    }} />
</MyProfilStack.Navigator>
)
const SupportStackScreen = ({navigation}) =>(
    <SupportStack.Navigator screenOptions={{
        headerStyle : {
            backgroundColor : colors.lightPurple,
        },
        headerTintColor : colors.white,
        headerTitleStyle : {
            fontWeight : 'bold'
        }
    }}>
    <SupportStack.Screen name = "About" component={SupportScreen} options={{
        
        headerLeft : () => {
            <Icon.Button name ="menu" size={25} 
            backgroundColor = "#009387" onPress={()=> {navigation.openDrawer()}} >
                </Icon.Button>
        }
    }} />
</SupportStack.Navigator>
)
const Navigation = () => {
    return(
   
   <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
   <Drawer.Screen name="Home" component={BottomTab} />
   <Drawer.Screen name="About" component={AboutStackScreen} />
   <Drawer.Screen name="MyOffers" component={MyOffersStackScreen} />
   <Drawer.Screen name="MyProfil" component={MyProfilStackScreen} />
   <Drawer.Screen name="Support" component={SupportStackScreen} />


  
 </Drawer.Navigator>
    )
  
}

const BottomTab = () => {
    return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor={colors.white}
          style={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor : colors.lightPurple,
              tabBarIcon: ({ color }) => (
                <Icon name="md-home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Offrir"
            component={OffrirStackScreen}
            options={{
              tabBarLabel: 'Offrir',
              tabBarColor : colors.lightPurple,
              tabBarIcon: ({ color }) => (
                <Icon name="ios-hand" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Chat"
            component={ChatStackScreen}
            options={{
              tabBarLabel: 'Chat',
              tabBarColor : colors.lightPurple,
              tabBarIcon: ({ color }) => (
                <Icon name="md-chatboxes" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Favoris"
            component={FavorisStackScreen}
            options={{
              tabBarLabel: 'Favoris',
              tabBarColor : colors.lightPurple,
              tabBarIcon: ({ color }) => (
                <Icon name="md-heart-half" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );
}


export default Navigation