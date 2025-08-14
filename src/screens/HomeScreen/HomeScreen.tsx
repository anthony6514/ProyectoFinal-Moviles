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
        { id: 1, name: 'Tarjeta Gráfica NVIDIA GeForce RTX 4090', price: 1599.99, stock: 5, pathImage: 'https://m.media-amazon.com/images/I/711vU2IrEuL._AC_SL1500_.jpg' },
        { id: 2, name: 'Procesador Intel Core i9-13900K', price: 599.99, stock: 10, pathImage: 'https://www.compugamer.com.ec/gamer/110-home_default/pci913900k4090.jpg' },
        { id: 3, name: 'Memoria RAM Corsair Vengeance 32GB', price: 149.99, stock: 20, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_853427-MLA54380438504_032023-O.webp' },
        { id: 4, name: 'SSD Samsung 980 Pro 2TB', price: 179.99, stock: 15, pathImage: 'https://http2.mlstatic.com/D_Q_NP_759391-MLA47572090286_092021-O.webp' },
        { id: 5, name: 'Monitor Alienware AW3423DW 34"', price: 899.99, stock: 8, pathImage: 'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/peripherals/monitors/alienware/aw3423dw/monitor-alienware-aw3423dw-pdp-hero.psd?qlt=95&fit=constrain,1&hei=3470&wid=5000&fmt=jpg' },
        { id: 6, name: 'Teclado Mecánico Razer BlackWidow V4 Pro', price: 229.99, stock: 12, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_888395-MLU74523092241_022024-O.webp' },
        { id: 7, name: 'Ratón Logitech G502 HERO', price: 49.99, stock: 30, pathImage: 'data:image/jpeg;base64,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' },
        { id: 8, name: 'Auriculares HyperX Cloud II', price: 99.99, stock: 25, pathImage: 'https://universe.com.ec/wp-content/uploads/2023/10/AUDIFONOS-HyperX-Cloud-II-Gaming-4P5M0AA.jpg' },
        { id: 9, name: 'Fuente de Poder EVGA Supernova 1000 P6', price: 189.99, stock: 7, pathImage: 'https://m.media-amazon.com/images/I/71IHSNnVZBL._UF894,1000_QL80_.jpg' },
        { id: 10, name: 'Placa Base ASUS ROG Maximus Z790 Hero', price: 599.99, stock: 6, pathImage: 'https://dlcdnwebimgs.asus.com/gain/A3777166-EF70-4D33-915B-EC65CF77CAE5/w717/h525' },
        { id: 11, name: 'Disipador CPU Noctua NH-D15', price: 109.99, stock: 18, pathImage: 'https://m.media-amazon.com/images/I/91t48GBv8TL._SL1500_.jpg' },
        { id: 12, name: 'Caja para PC NZXT H7 Flow', price: 129.99, stock: 11, pathImage: 'https://m.media-amazon.com/images/I/61CTe9lywcL.jpg' },
        { id: 13, name: 'Tarjeta de Sonido Creative Sound Blaster AE-9', price: 349.99, stock: 4, pathImage: 'https://d287ku8w5owj51.cloudfront.net/images/products/hero/sound-blaster-ae-9/hero.png?width=750' },
        { id: 14, name: 'Webcam Logitech C920S Pro HD', price: 69.99, stock: 22, pathImage: 'https://www.artefacta.com/media/catalog/product/1/2/127727.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1040&width=1040&canvas=1040:1040' },
        { id: 15, name: 'Micrófono de Condensador Blue Yeti X', price: 169.99, stock: 9, pathImage: 'https://japon.vtexassets.com/arquivos/ids/167139/Microfono-Profesional-Logitech-Blue-Yeti-X.jpg?v=638681504497530000' },
        { id: 16, name: 'Silla Gamer Secretlab Titan EVO 2022', price: 549.99, stock: 3, pathImage: 'https://images.secretlab.co/turntable/tr:n-w_450/R22PU-Classic_02.jpg' },
        { id: 17, name: 'Impresora 3D Creality Ender 3 S1 Pro', price: 429.99, stock: 5, pathImage: 'https://m.media-amazon.com/images/I/41lQcszGeqL._UF894,1000_QL80_.jpg' },
        { id: 18, name: 'Hub USB-C Anker PowerExpand 8-in-1', price: 59.99, stock: 40, pathImage: 'https://i5.walmartimages.com/seo/Anker-USB-C-Hub-PowerExpand-8-in-1-Adapter-Dual-4K-HDMI-100W-Power-Delivery-1-Gbps-Ethernet-2-3-0-Data-Ports-SD-microSD-Card-Reader-MacBook-Pro-XPS-M_ef291c80-20a5-4aaf-b09c-40f922c98a5d.89e9c7ca939c13f6b38a3e1c249b5b13.jpeg' },
        { id: 19, name: 'Cable HDMI 2.1 UGREEN 8K', price: 29.99, stock: 50, pathImage: 'https://http2.mlstatic.com/D_Q_NP_727313-MLA81180014188_122024-O.webp' },
        { id: 20, name: 'Altavoces Logitech Z407', price: 79.99, stock: 14, pathImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3Bi3gdJ03sUnEix05t6IXD7UgIuo67lnnQ&s' },
        { id: 21, name: 'Lector de Tarjetas SD UGREEN', price: 15.99, stock: 60, pathImage: 'https://m.media-amazon.com/images/I/6155TeibrLL._AC_SL1500_.jpg' },
        { id: 22, name: 'Soporte para Monitor de Escritorio', price: 39.99, stock: 25, pathImage: 'https://m.media-amazon.com/images/I/61CTe9lywcL.jpg' }
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