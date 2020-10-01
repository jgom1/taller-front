import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const HeaderLogo = () => {
    return (

        <View style={styles.header}>
            <View>
                <Text style={styles.logo}>Taller</Text>
            </View>
            <View>
                <Text style={styles.colorLogo}>React Native</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    colorLogo: {
        paddingHorizontal: 2,
        paddingVertical: 1,
        backgroundColor: '#17a2b8',
        fontSize: 18,
        marginLeft: 5,
        fontWeight: 'bold',
    }
});
