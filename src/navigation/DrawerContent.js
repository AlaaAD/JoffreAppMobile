import React from 'react'
import {View,StyleSheet} from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import {
Avatar,
Title,
Caption,
Paragraph,
Drawer,
Text,
TouchableRipple,
Switch
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export function DrawerContent (props) {

const [isDarkTheme,setIsDarkTheme] = React.useState(false)
//cette fonction nous permet de changer le dark theme
const toggleTheme = () =>{
    setIsDarkTheme(!isDarkTheme)
}

    return (
        <View style={{flex :1}}>
       <DrawerContentScrollView {...props}>
        <View style ={styles.drawerContent}>
           <View style={styles.userInfoSection}>
               <View style={{flexDirection:'row',marginTop : 15}}>
                   <Avatar.Image 
                        source={{uri:'https://1.bp.blogspot.com/-Er9NewgvspA/XoxNi_NvpYI/AAAAAAAAGDY/jEa7wwcKa0w9kKkt9uI01oaxjK54IewLQCPcBGAYYCw/s320/853a1560-e022-47a5-95f1-8da740226895.jpg'}}
                        size={50}
                   />
                   <View style= {{flexDirection:'column',marginLeft:15}}>
                       <Title style={styles.title}>ALAA AD</Title>
                       <Caption style={styles.caption}>@TEAMS_Joffre</Caption>
                   </View>
               </View>

           </View>
           <Drawer.Section style ={styles.drawerSection}>
           <DrawerItem 
            icon={
                ({color,size}) =>(
                    <Icon
                    name="home-outline"
                    color={color}
                    size ={size}
                    />
                )
            }
               label="Home"
               onPress={()=>{props.navigation.navigate('Home')}}
           />
           <DrawerItem 
            icon={
                ({color,size}) =>(
                    <Icon
                    name="account-outline"
                    color={color}
                    size ={size}
                    />
                )
            }
               label="Mon profil"
               onPress={()=>{props.navigation.navigate('MyProfil')}}
           />
           <DrawerItem 
            icon={
                ({color,size}) =>(
                    <Icon
                    name="bookmark-outline"
                    color={color}
                    size ={size}
                    />
                )
            }
               label="Mes offres"
               onPress={()=>{props.navigation.navigate('MyOffers')}}
           />
           <DrawerItem 
            icon={
                ({color,size}) =>(
                    <Icon
                    name="information-variant"
                    color={color}
                    size ={size}
                    />
                )
            }
               label="About"
               onPress={()=>{props.navigation.navigate('About')}}
           />
             <DrawerItem 
            icon={
                ({color,size}) =>(
                    <Icon
                    name="account-check-outline"
                    color={color}
                    size ={size}
                    />
                )
            }
               label="Support"
               onPress={()=>{props.navigation.navigate('Support')}}
           />
           
           
           </Drawer.Section>
           <Drawer.Section title="Preferences">
               <TouchableRipple onPress={()=>{toggleTheme()}}>
                   <View style={styles.preference}>
                       <Text>Dark Theme</Text>
                       <View pointerEvents="none">
                       <Switch value={isDarkTheme} />
                       </View>
                   
                   </View>
               </TouchableRipple>

           </Drawer.Section>
        </View>
       </DrawerContentScrollView>
       <Drawer.Section style={styles.bottomDrawerSection}>
           <DrawerItem 
            icon={
                ({color,size}) =>(
                    <Icon
                    name="exit-to-app"
                    color={color}
                    size ={size}
                    />
                )
            }
               label="Log out"
               onPress={()=>{}}
           />
          
       </Drawer.Section>
        </View>
    );

}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  })