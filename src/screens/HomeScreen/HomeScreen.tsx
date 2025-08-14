import React, { useState } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../commons/constants';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { CardProduct } from './components/CardProduct';
import { ModalCart } from './components/ModalCart';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../theme/appTheme';

// Interfaces para los datos
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

export interface Cart {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}

export const HomeScreen = () => {
    // Lista de productos actualizada
    const products: Product[] = [
        { id: 1, name: 'Tarjeta Gráfica NVIDIA GeForce RTX 4090', price: 1599.99, stock: 5, pathImage: 'https://images.unsplash.com/photo-1596496195655-7d52f6b8c9d2?q=80&w=2070' },
        { id: 2, name: 'Procesador Intel Core i9-13900K', price: 599.99, stock: 10, pathImage: 'https://images.unsplash.com/photo-1574926526806-3829285038c7?q=80&w=1923' },
        { id: 3, name: 'Memoria RAM Corsair Vengeance 32GB', price: 149.99, stock: 20, pathImage: 'https://images.unsplash.com/photo-1596496195655-7d52f6b8c9d2?q=80&w=2070' },
        { id: 4, name: 'SSD Samsung 980 Pro 2TB', price: 179.99, stock: 15, pathImage: 'https://images.unsplash.com/photo-1596496195655-7d52f6b8c9d2?q=80&w=2070' },
        { id: 5, name: 'Monitor Alienware AW3423DW 34"', price: 899.99, stock: 8, pathImage: 'https://images.unsplash.com/photo-1549488344-9333333335c0?q=80&w=2070' },
        { id: 6, name: 'Teclado Mecánico Razer BlackWidow V4 Pro', price: 229.99, stock: 12, pathImage: 'https://images.unsplash.com/photo-1616230623668-5e926a7e04b4?q=80&w=2070' },
        { id: 7, name: 'Ratón Logitech G502 HERO', price: 49.99, stock: 30, pathImage: 'https://images.unsplash.com/photo-1582234033100-84358a98a00a?q=80&w=2070' },
        { id: 8, name: 'Auriculares HyperX Cloud II', price: 99.99, stock: 25, pathImage: 'https://images.unsplash.com/photo-1575806307612-e429210714ed?q=80&w=2070' },
        { id: 9, name: 'Fuente de Poder EVGA Supernova 1000 P6', price: 189.99, stock: 7, pathImage: 'https://images.unsplash.com/photo-1599577717462-8e100f7c2295?q=80&w=2070' },
        { id: 10, name: 'Placa Base ASUS ROG Maximus Z790 Hero', price: 599.99, stock: 6, pathImage: 'https://images.unsplash.com/photo-1596496195655-7d52f6b8c9d2?q=80&w=2070' },
        { id: 11, name: 'Disipador CPU Noctua NH-D15', price: 109.99, stock: 18, pathImage: 'https://images.unsplash.com/photo-1596496195655-7d52f6b8c9d2?q=80&w=2070' },
        { id: 12, name: 'Caja para PC NZXT H7 Flow', price: 129.99, stock: 11, pathImage: 'https://images.unsplash.com/photo-1596496195655-7d52f6b8c9d2?q=80&w=2070' },
        { id: 13, name: 'Tarjeta de Sonido Creative Sound Blaster AE-9', price: 349.99, stock: 4, pathImage: 'https://images.unsplash.com/photo-1596496195655-7d52f6b8c9d2?q=80&w=2070' },
        { id: 14, name: 'Webcam Logitech C920S Pro HD', price: 69.99, stock: 22, pathImage: 'https://images.unsplash.com/photo-1549488344-9333333335c0?q=80&w=2070' },
        { id: 15, name: 'Micrófono de Condensador Blue Yeti X', price: 169.99, stock: 9, pathImage: 'https://images.unsplash.com/photo-1596496195655-7d52f6b8c9d2?q=80&w=2070' },
        { id: 16, name: 'Silla Gamer Secretlab Titan EVO 2022', price: 549.99, stock: 3, pathImage: 'https://images.unsplash.com/photo-1549488344-9333333335c0?q=80&w=2070' },
        { id: 17, name: 'Impresora 3D Creality Ender 3 S1 Pro', price: 429.99, stock: 5, pathImage: 'https://images.unsplash.com/photo-1596496195655-7d52f6b8c9d2?q=80&w=2070' },
        { id: 18, name: 'Hub USB-C Anker PowerExpand 8-in-1', price: 59.99, stock: 40, pathImage: 'https://images.unsplash.com/photo-1596496195655-7d52f6b8c9d2?q=80&w=2070' },
        { id: 19, name: 'Cable HDMI 2.1 UGREEN 8K', price: 29.99, stock: 50, pathImage: 'https://images.unsplash.com/photo-1596496195655-7d52f6b8c9d2?q=80&w=2070' },
        { id: 20, name: 'Altavoces Logitech Z407', price: 79.99, stock: 14, pathImage: 'https://images.unsplash.com/photo-1596496195655-7d52f6b8c9d2?q=80&w=2070' },
        { id: 21, name: 'Lector de Tarjetas SD UGREEN', price: 15.99, stock: 60, pathImage: 'https://images.unsplash.com/photo-1596496195655-7d52f6b8c9d2?q=80&w=2070' },
        { id: 22, name: 'Soporte para Monitor de Escritorio', price: 39.99, stock: 25, pathImage: 'https://images.unsplash.com/photo-1596496195655-7d52f6b8c9d2?q=80&w=2070' }
    ];

    const [listProducts, setListProducts] = useState<Product[]>(products);
    const [cart, setCart] = useState<Cart[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);

    const updateStock = (id: number, quantity: number): void => {
        const updatedProducts = listProducts.map(product => product.id === id
            ? { ...product, stock: product.stock - quantity }
            : product);
        setListProducts(updatedProducts);
        addProduct(id, quantity);
    };

    const addProduct = (id: number, quantity: number): void => {
        const product = listProducts.find(product => product.id === id);
        if (!product) return;

        const existingCartItemIndex = cart.findIndex(item => item.id === id);

        if (existingCartItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingCartItemIndex].quantity += quantity;
            updatedCart[existingCartItemIndex].total = updatedCart[existingCartItemIndex].price * updatedCart[existingCartItemIndex].quantity;
            setCart(updatedCart);
        } else {
            const newProductCart: Cart = {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity,
                total: product.price * quantity,
            };
            setCart([...cart, newProductCart]);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <View style={styles.headerHome}>
                <TitleComponent title="Productos" />
                <View style={styles.containerIconCart}>
                    {cart.length > 0 && (
                        <Text style={styles.textIconCart}>
                            {cart.length}
                        </Text>
                    )}
                    <Icon
                        name='shopping-cart'
                        size={27}
                        color={SECONDARY_COLOR}
                        onPress={() => setShowModal(!showModal)}
                    />
                </View>
            </View>
            <BodyComponent>
                <FlatList
                    data={listProducts}
                    renderItem={({ item }) => <CardProduct item={item} updateStock={updateStock} />}
                    keyExtractor={item => item.id.toString()}
                />
            </BodyComponent>
            <ModalCart visible={showModal} setShowModal={() => setShowModal(!showModal)} cart={cart} />
        </View>
    );
};