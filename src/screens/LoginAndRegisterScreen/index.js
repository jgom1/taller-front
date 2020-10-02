import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, Text, Button, Input } from 'react-native-elements';

export const LoginAndRegisterScreen = ({ navigation }) => {
    const [showLogin, setShowLogin] = useState(true);
    const [showRegistration, setShowRegistration] = useState(false);

    return (
        <ScrollView  style={styles.landing__container}>
            <View style={styles.landing__welcomeText}>
                <Text h4>Taller&nbsp;
                    <Text style={styles.landing__logoColor}>&nbsp;React&nbsp;</Text>
                </Text>
                <Text h2>¡Bienvenido!</Text>
            </View>
            <View style={styles.landing__dataInput}>
                {showLogin &&
                    <View style={styles.landing__dataInput__loginContainer}>
                        <Input
                            placeholder='Usuario'
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                        />
                        <Input
                            placeholder='Contraseña'
                            leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
                        />
                    </View>
                }
                {showRegistration &&
                    <View style={styles.landing__dataInput__registrationContainer}>
                        <Input
                            style={styles.landing__dataInput__registrationInputs}
                            placeholder='Nombre y apellidos'
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                        />
                        <Input
                            style={styles.landing__dataInput__registrationInputs}
                            placeholder='Correo electrónico'
                            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                        />
                        <Input
                            style={styles.landing__dataInput__registrationInputs}
                            placeholder='Contraseña'
                            leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
                        />
                        <Input
                            style={styles.landing__dataInput__registrationInputs}
                            placeholder='Confirma la contraseña'
                            leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
                        />
                    </View>
                }
            </View>
            <View style={styles.landing__buttonsContainer}>
                <View style={styles.landing__buttonRegistration}>
                    <TouchableOpacity
                        style={styles.landing__buttonRegistration__button}
                        onPress={() => { setShowLogin(false); setShowRegistration(true) }}
                    >
                        <Text h4 style={styles.landing__buttonRegistration__text}>Registrarme</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.landing__buttonLogin}>
                    <TouchableOpacity
                        style={styles.landing__buttonLogin__button}
                        onPress={() => navigation.navigate('Productos')}
                    >
                        <Text h4 style={styles.landing__buttonLogin__text}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    )
}


const styles = StyleSheet.create({
    landing__container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 25
    },
    landing__welcomeText: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    landing__logoColor: {
        backgroundColor: '#17a2b8',
        color: 'white'
    },


    landing__dataInput: {
        flex: 6,
        paddingVertical: 15
    },
    landing__dataInput__registrationInputs: {
        flex: 1
    },


    landing__buttonsContainer: {
        flex: 3,
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