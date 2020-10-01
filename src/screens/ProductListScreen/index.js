import React from 'react';
import { FlatList, View, Text } from 'react-native';
import basicStyles from 'TallerReactNative/src/styles/basicStyles';

import { ProductItem } from './ProductItem';

export const ProductListScreen = () => {
    return (
        <View style={basicStyles.container}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </View>
    )
}
