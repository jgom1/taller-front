import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import basicStyles from 'TallerReactNative/src/styles/basicStyles';

export const ProductItem = ({navigation}) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Producto')}
        >
            <Image
                style={styles.productImage}
                source={{
                    uri: 'https://d1eh9yux7w8iql.cloudfront.net/product_images/328454_d07dd812-8bd9-4958-a568-2d5a98fc8648.jpg',
                }}
            />
            <View style={styles.productInfo}>
                <Text style={styles.productName}>Samsung Galaxy A51</Text>
                <Text style={styles.productResume}>128 GB Azul móvil libre</Text>
                <Text style={styles.productPrice}>299€</Text>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: "lightgray",
        padding: 10,
        marginBottom: 10
    },
    productImage: {
        width: 100,
        height: 100,
    },
    productInfo: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 100
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    productResume: {
        fontSize: 16
    },
    productPrice: {
        fontSize: 26,
        fontWeight: 'bold'
    }


});