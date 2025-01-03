import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './SRC/Screens/WelcomeScreen';
import PhoneVerification from './SRC/Screens/PhoneVerification';
import OtpVerification from './SRC/Screens/OtpVerification';
import ProfileCompletion from './SRC/Screens/ProfileCompletion';
import DeliveryAddress from './SRC/Screens/DeliveryAddress';
import SlideShow from './SRC/Screens/SlideShow';
import productscreen from './SRC/Screens/productscreen'
import Schedule from './SRC/Screens/Schedule'
import Daily from './SRC/Screens/Daily'
import Weekly from './SRC/Screens/Weekly'
import Monthly from './SRC/Screens/Monthly'
import AlternateDays from './SRC/Screens/AlternateDays'
import HomeScreen from './SRC/Screens/HomeScreen';
import SearchScreen from './SRC/Screens/SearchScreen';
import DropsScreen from './SRC/Screens/DropsScreen';
import AccountScreen from './SRC/Screens/AccountScreen';
import WaterCanScreen from './SRC/Screens/WaterCanScreen';
import SubscriptionStartScreen from './SRC/Screens/SubscriptionStartScreen';

 
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Phone Number Verification" component={PhoneVerification} />
        <Stack.Screen name="OTP Verification" component={OtpVerification} />
        <Stack.Screen name="ProfileCompletion" component={ProfileCompletion} />
        <Stack.Screen name="DeliveryAddress" component={DeliveryAddress} />
        <Stack.Screen name="Intro" component={SlideShow} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="Daily" component={Daily} />
        <Stack.Screen name="Weekly" component={Weekly} />
        <Stack.Screen name="Monthly" component={Monthly} />
        <Stack.Screen name="AlternateDays" component={AlternateDays} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="DropScreen" component={DropsScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="WaterCanScreen" component={WaterCanScreen} />
        <Stack.Screen name="productscreen" component={productscreen} />
        <Stack.Screen name="SubscriptionStartScreen" component={SubscriptionStartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
