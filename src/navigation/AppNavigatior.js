import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductListScreen, ProductDetailScreen, LoginAndRegisterScreen } from 'TallerReactNative/src/screens';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inicio" component={LoginAndRegisterScreen} />
                {/* <Stack.Screen name="Productos" component={ProductListScreen} />
                <Stack.Screen name="Producto" component={ProductDetailScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}





