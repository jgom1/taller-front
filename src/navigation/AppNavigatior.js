import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProductListScreen } from 'TallerReactNative/src/screens';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProductListScreen} options={{ title: 'Productos' }} />
            <Stack.Screen name="Settings" component={ProductListScreen} />
        </Stack.Navigator>
    );
}

export default function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Productos" component={ProductListScreen} />
                <Drawer.Screen name="¡Ofertas!" component={ProductListScreen} />
                <Drawer.Screen name="Mi perfil" component={ProductListScreen} />
                <Drawer.Screen name="Mi favoritos" component={ProductListScreen} />
                <Drawer.Screen name="Mis compras" component={ProductListScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}



