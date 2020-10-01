import React from 'react';
import { FlatList, View, Text } from 'react-native';
import basicStyles from 'TallerReactNative/src/styles/basicStyles';

import { ProductItem } from './ProductItem';

export const ProductListScreen = ({ navigation }) => {
    return (
        <View style={basicStyles.container}>
            <ProductItem navigation={navigation} />
            <ProductItem navigation={navigation} />
            <ProductItem navigation={navigation} />
            <ProductItem navigation={navigation} />
        </View>
    )
}
