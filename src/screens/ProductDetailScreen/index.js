import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import basicStyles from 'TallerReactNative/src/styles/basicStyles';
import { Icon, Text } from 'react-native-elements';

export const ProductDetailScreen = () => {
    return (
        <ScrollView style={styles.productDetail__globalContainer}>
            <View style={styles.productDetail__imageContainer}>
                <Image
                    style={styles.productDetail__image}
                    source={require('TallerReactNative/assets/phone_img.png')}
                />
            </View>
            <View style={styles.productDetail__infoContainer}>
                <Text h3 style={styles.productDetail__productName}>Samsung Galaxy A51</Text>
                <Text h5 style={styles.productDetail__productResume}>128 GB Azul móvil libre</Text>
                <Text style={styles.productDetail__productDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum nec purus ac scelerisque.
                    Etiam egestas pretium turpis et egestas. Quisque finibus ex lectus, eu commodo odio pretium sit amet.
                </Text>
                <Text h1 style={styles.productDetail__productPrice}>299€</Text>
            </View>
            <View style={styles.productDetail__buttonsContainer}>
                <TouchableOpacity
                    style={styles.productDetail__buttonAddFavourites}
                    onPress={() => console.log('Add to favourites')}
                >
                    <Icon
                        name='heart'
                        type='font-awesome'
                        color='#dc3545'
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.productDetail__buttonBuy}
                    onPress={() => console.log('buy')}
                >
                    <Icon
                        name='cart-plus'
                        type='font-awesome'
                        color='white' />
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    productDetail__globalContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 30
    },


    productDetail__imageContainer: {
        flex: 2,
        alignItems: 'center',
        paddingBottom: 10
    },
    productDetail__image: {
        flex: 1,
        resizeMode: 'contain',
        height: 250
    },


    productDetail__infoContainer: {
        flex: 2,
        paddingVertical: 10
    },
    productDetail__productName: {
        flex: 2,
        paddingHorizontal: 10,
        paddingBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30
    },
    productDetail__productResume: {
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 5,
        textAlign: 'center',
        fontSize: 20
    },
    productDetail__productDescription: {
        flex: 4,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
    productDetail__productPrice: {
        flex: 2,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30
    },


    productDetail__buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
    },
    productDetail__buttonAddFavourites: {
        width: 90,
        height: 90,
        borderRadius: 90,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    },
    productDetail__buttonBuy: {
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    }
});