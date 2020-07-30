import  React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home"
import Detail from "./Detail"
import AnotherDetail from "./AnotherDetail"
import TestCamera from "./TestCamera"
import UGotSick from './UGotSick'
import Notifi from './Notifi'
const Stack = createStackNavigator()    ;
function PageStack () {
    console.log("page was render")
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name = "Home" component={Home} 
                      options={{
                        headerShown: false,                        
                      }}     
                      
               
            />
            <Stack.Screen name = "Detail" component={Detail}
                options={{
                headerShown: false,
              }}     
            />
            <Stack.Screen name = "AnotherDetail" component={AnotherDetail}
                options={{
                headerShown: false,
              }}     
            />
            <Stack.Screen name = "TestCamera" component={TestCamera}
                options={{
                headerShown: false,
              }}     
            />
              <Stack.Screen name = "UGotSick" component={UGotSick}
                options={{
                headerShown: false,
              }}     
            />
              <Stack.Screen name = "Notifi" component={Notifi}
                options={{
                headerShown: false,
              }}     
            />
             </Stack.Navigator>
        </NavigationContainer>
    )
}
export default PageStack