import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Input } from 'react-native-elements';
import axios from 'axios';

export const LoginAndRegisterScreen = ({ navigation }) => {
    
    const [showLogin, setShowLogin] = useState(true);
    const [dataLogin, setDataLogin] = useState({ user: '', password: '' });
    const [errorLogin, setErrorLogin] = useState('');
    
    const [showRegistration, setShowRegistration] = useState(false);
    const [dataRegistration, setDataRegistration] = useState({ name: '', surname: '', email: '', password: '', confirmPassword: '' });
    const [errorRegistration, setErrorRegistration] = useState('');

    const submitLogin = () => {
        if (showLogin && dataLogin.user && dataLogin.password) {
            axios.get(`http://10.0.2.2:3004/users?userEmail=${(dataLogin.user).trim().toLowerCase()}`)
                .then(function (response) {
                    if (response.data.length === 0 || response.data[0].userPassword !== dataLogin.password) {
                        setErrorLogin('El correo o la contraseña introducidos no son correctos');
                    } else {
                        setErrorLogin('');
                        navigation.navigate('Productos');
                    }
                })
                .catch(function (error) { })
        } else {
            setShowLogin(true);
            setShowRegistration(false);
        }
    }

    const saveNewUser = () => {
        const headers = {
            "Content-type": "application/json; charset=UTF-8"
        };
        const newUser = {
            'userName': dataRegistration.name,
            'userSurname': dataRegistration.surname,
            'userEmail': dataRegistration.email,
            'userPassword': dataRegistration.password
        }
        axios.post('http://10.0.2.2:3004/users', newUser, headers)
            .then(function (response) {
                navigation.navigate('Productos');
            })
            .catch(function (error) { })
    }

    const checkNewUserEmail = () => {
        axios.get(`http://10.0.2.2:3004/users?userEmail=${(dataRegistration.email).trim().toLowerCase()}`)
            .then(function (response) {
                if (response.data.length === 0) {
                    saveNewUser();
                } else {
                    setErrorRegistration('Ya existe un usuario con ese correo');
                }
            })
            .catch(function (error) { })
    }

    const submitRegistration = () => {
        if (showRegistration && dataRegistration.name && dataRegistration.surname
            && dataRegistration.email && dataRegistration.password
            && dataRegistration.confirmPassword) {
            if (dataRegistration.password === dataRegistration.confirmPassword) {
                checkNewUserEmail();
            } else {
                setErrorRegistration('Las contraseñas introducidas deben coincidir');
            }
        } else {
            setShowLogin(false);
            setShowRegistration(true);
        }
    }

    return (
        <ScrollView style={styles.landing__container}>
            <View style={styles.landing__welcomeText}>
                <Text h4>Taller&nbsp;
                    <Text style={styles.landing__logoColor}>&nbsp;React native&nbsp;</Text>
                </Text>
                <Text h2>¡Bienvenido!</Text>
            </View>
            <View style={styles.landing__dataInput}>
                {showLogin &&
                    <View style={styles.landing__dataInput__loginContainer}>
                        <Input
                            placeholder='Usuario'
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                            onEndEditing={(event) => setDataLogin((prevData) => ({ ...prevData, user: event.nativeEvent.text || '' }))}
                            onFocus={() => setErrorLogin('')}
                        />
                        <Input
                            placeholder='Contraseña'
                            secureTextEntry
                            leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
                            onEndEditing={(event) => setDataLogin((prevData) => ({ ...prevData, password: event.nativeEvent.text || '' }))}
                            onFocus={() => setErrorLogin('')}
                        />
                        <Text style={styles.landing__errorMessage}>{errorLogin}</Text>
                    </View>
                }
                {showRegistration &&
                    <View style={styles.landing__dataInput__registrationContainer}>
                        <Input
                            style={styles.landing__dataInput__registrationInputs}
                            placeholder='Nombre'
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                            onEndEditing={(event) => setDataRegistration((prevData) => ({ ...prevData, name: event.nativeEvent.text || '' }))}
                            onFocus={() => setErrorRegistration('')}
                        />
                        <Input
                            style={styles.landing__dataInput__registrationInputs}
                            placeholder='Apellidos'
                            leftIcon={{ type: 'font-awesome', name: 'user' }}
                            onEndEditing={(event) => setDataRegistration((prevData) => ({ ...prevData, surname: event.nativeEvent.text || '' }))}
                            onFocus={() => setErrorRegistration('')}
                        />
                        <Input
                            style={styles.landing__dataInput__registrationInputs}
                            placeholder='Correo electrónico'
                            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                            onEndEditing={(event) => setDataRegistration((prevData) => ({ ...prevData, email: event.nativeEvent.text || '' }))}
                            onFocus={() => setErrorRegistration('')}
                        />
                        <Input
                            style={styles.landing__dataInput__registrationInputs}
                            placeholder='Contraseña'
                            leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
                            onEndEditing={(event) => setDataRegistration((prevData) => ({ ...prevData, password: event.nativeEvent.text || '' }))}
                            onFocus={() => setErrorRegistration('')}
                        />
                        <Input
                            style={styles.landing__dataInput__registrationInputs}
                            placeholder='Confirma la contraseña'
                            leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
                            onEndEditing={(event) => setDataRegistration((prevData) => ({ ...prevData, confirmPassword: event.nativeEvent.text || '' }))}
                            onFocus={() => setErrorRegistration('')}
                        />
                        <Text style={styles.landing__errorMessage}>{errorRegistration}</Text>
                    </View>
                }
            </View>
            <View style={styles.landing__buttonsContainer}>
                <View style={styles.landing__buttonRegistration}>
                    <TouchableOpacity
                        style={styles.landing__buttonRegistration__button}
                        onPress={submitRegistration}
                    >
                        <Text h4 style={styles.landing__buttonRegistration__text}>Registrarme</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.landing__buttonLogin}>
                    <TouchableOpacity
                        style={styles.landing__buttonLogin__button}
                        onPress={submitLogin}
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
        backgroundColor: 'white',
        padding: 25
    },
    landing__welcomeText: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    landing__logoColor: {
        backgroundColor: '#17a2b8',
        color: 'white'
    },


    landing__dataInput: {
        paddingVertical: 15
    },
    landing__dataInput__registrationInputs: {
       
    },


    landing__buttonsContainer: {
       
    },


    landing__buttonRegistration: {
        paddingBottom: 15
    },
    landing__buttonRegistration__button: {
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
    },
    landing__buttonLogin__button: {

        backgroundColor: '#17a2b8',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    landing__buttonLogin__text: {
        color: 'white',
        textAlign: 'center'
    },

    landing__errorMessage: {
        color: 'red',
        textAlign: 'center'
    }
});