import React, { useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Product } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../../commons/constants';
import { ModalProduct } from './ModalProduct';

// Interfaz para las propiedades
interface Props {
    item: Product;
    updateStock: (id: number, quantity: number) => void;
}

export const CardProduct = ({ item, updateStock }: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <Image source={{ uri: item.pathImage }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>Precio: ${item.price.toFixed(2)}</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon
                    name='add-shopping-cart'
                    size={30}
                    color={PRIMARY_COLOR}
                    onPress={() => setShowModal(!showModal)}
                />
            </View>
            <ModalProduct
                visible={showModal}
                item={item}
                setShowModal={() => setShowModal(!showModal)}
                updateStock={updateStock}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        borderStyle: 'solid',
        marginBottom: 15,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    infoContainer: {
        flex: 1,
        marginLeft: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
    },
    price: {
        fontSize: 14,
        color: '#555',
        marginTop: 5,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 5,
    },
    iconContainer: {
        marginLeft: 'auto',
        paddingLeft: 10,
    },
});