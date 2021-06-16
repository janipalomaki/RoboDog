// React Navigation setup
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';

// Stack Navigator
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Stylesheet
import { StyleSheet} from 'react-native';

// Expo fonts
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';

// Components
import Home from "./src/components/Home";
import Market from "./src/components/Market";
import Sentiment from "./src/components/Sentiment";
import News from "./src/components/News";
import Reddit from "./src/components/Reddit";
import Details from "./src/components/Details";
import TopNavigationBar from './src/components/TopNavigationBar';

// Bottom Navigation
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function App() {

  // Expo fonts
const [loaded, error] = useFonts({ 
  Roboto_medium : require('./assets/fonts/Roboto/Roboto-Medium.ttf')
});

  return (

    <NavigationContainer>
    <TopNavigationBar />
      <Tab.Navigator
            style={styles.navigator}
            initialRouteName="Home"
            screenOptions={({ route }) => ({
              header: (props) => <TopNavigationBar {...props} />,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused
                    ? 'home-outline'
                    : 'home-outline';
                } else if (route.name === 'Market') {
                  iconName = focused ? 'bar-chart-outline' : 'bar-chart-outline';
                } else if (route.name === 'Sentiment') {
                  iconName = focused ? 'skull-outline' : 'skull-outline';
                } else if (route.name === 'News') {
                  iconName = focused ? 'newspaper-outline' : 'newspaper-outline';
                } else if (route.name === 'Reddit') {
                  iconName = focused ? 'logo-reddit' : 'logo-reddit';
                }


                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Market" component={Market} />
            <Tab.Screen name="Sentiment" component={Sentiment} />
            <Tab.Screen name="News" component={News} />
            <Tab.Screen name="Reddit" component={Reddit} />
            <Tab.Screen name="Details" component={Details} />
      
      </Tab.Navigator>
  </NavigationContainer>    
        
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigator : {
    
  }
});


    /*
    <NavigationContainer>
          <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <TopNavigationBar {...props} />,
          }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="CoinMarket" component={CoinMarket} />
            <Stack.Screen name="MarketSentiment" component={MarketSentiment} />
            <Stack.Screen name="News" component={News} />
            <Stack.Screen name="Reddit" component={Reddit} />
            <Stack.Screen name="Details" component={Details} />
            
          </Stack.Navigator>
        </NavigationContainer>
  */

  