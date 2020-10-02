import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Text, Button } from 'react-native-elements';

export const LoginAndRegisterScreen = () => {
    return (
        <View style={styles.landing__container}>
            <View style={styles.landing__welcomeText}>
                <Text h3>Taller&nbsp;
                    <Text style={styles.landing__logoColor}>&nbsp;React&nbsp;</Text>
                </Text>
                <Text h1>¡Bienvenido!</Text>
            </View>
            <View style={styles.landing__buttonsContainer}>
                <View style={styles.landing__buttonRegistration}>
                    <TouchableOpacity
                        style={styles.landing__buttonRegistration__button}
                        onPress={() => { console.log('Registro') }}
                    >
                        <Text h4 style={styles.landing__buttonRegistration__text}>Registrarme</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.landing__buttonLogin}>
                    <TouchableOpacity
                        style={styles.landing__buttonLogin__button}
                        onPress={() => { console.log('Entrar') }}
                    >
                        <Text h4 style={styles.landing__buttonLogin__text}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    landing__container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 50,
        backgroundColor: 'lightgray'
    },
    landing__welcomeText: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    landing__logoColor: {
        backgroundColor: '#17a2b8',
        color: 'white'
    },


    landing__buttonsContainer: {
        flex: 1,
    },


    landing__buttonRegistration: {
        flex: 1,
        paddingBottom: 15
    },
    landing__buttonRegistration__button: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    landing__buttonRegistration__text: {
        textAlign: 'center'
    },


    landing__buttonLogin: {
        flex: 1,
    },
    landing__buttonLogin__button: {
        flex: 1,
        backgroundColor: '#17a2b8',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    landing__buttonLogin__text: {
        color: 'white',
        textAlign: 'center'
    }
});