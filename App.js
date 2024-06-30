import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatBotScreen } from './app/screens/chatBotScr';
import { BoardScreen } from './app/screens/boardScr';
import { ChatListScreen } from './app/screens/chatListScr';
import { MatchingScreen } from './app/screens/matchingScr';
import { MyPageScreen } from './app/screens/myPageScr';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TempSplashScreen = () => {
  return (
    <View>
      <Text>Splash Screen</Text>
    </View>
  )
}

const TempLoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => navigation.replace('Main')}
        style={{ backgroundColor: '#5678F0', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 7 }}>
        <Text style={{ color: '#ffffff' }}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export const MainScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen options={{ headerShown: false }} name='ChatBot' component={ChatBotScreen} />
        <Tab.Screen options={{ headerShown: false }} name="Board" component={BoardScreen} />
        <Tab.Screen options={{ headerShown: false }} name="Matching" component={MatchingScreen} />
        <Tab.Screen options={{ headerShown: false }} name="ChatList" component={ChatListScreen} />
        <Tab.Screen options={{ headerShown: false }} name="MyPage" component={MyPageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Splash'
          component={TempSplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Login'
          component={TempLoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Main'
          component={MainScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}