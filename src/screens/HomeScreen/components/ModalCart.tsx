import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Modal, Text, View, FlatList, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../../theme/appTheme';
import { PRIMARY_COLOR } from '../../../commons/constants';

interface Cart {
 id: number;
 name: string;
 price: number;
 quantity: number;
 total: number;
}

interface Props {
 visible: boolean;
 setShowModal: () => void;
 cart: Cart[];
}

export const ModalCart = ({ visible, setShowModal, cart }: Props) => {
 const { width } = useWindowDimensions();

 // función para calcular el total a pagar
 const totalPay = () => {
   let total = 0;
   cart.forEach(item => {
     total += item.total;
   });
   return total.toFixed(2);
 };
 
 return (
   <Modal visible={visible} animationType='fade' transparent={true}>
     <View style={styles.containerModal}>
       <View style={{
         ...styles.modal,
         width: width * 0.90
       }}>
         <View style={styles.headerModal}>
           <Text style={styles.titleModal}>Mis Productos</Text>
           <View style={styles.containerIcon}>
             <Icon
               name='close'
               size={18}
               color={PRIMARY_COLOR}
               onPress={setShowModal}
             />
           </View>
         </View>
         
         <View style={styles.headerItemList}>
           <Text style={styles.headerItemText}>Producto</Text>
           <Text style={styles.headerItemText}>Precio</Text>
           <Text style={styles.headerItemText}>Cantidad</Text>
           <Text style={styles.headerItemText}>Total</Text>
         </View>

         <FlatList
           data={cart}
           renderItem={({ item }) => (
             <View style={styles.itemCart}>
               <Text style={styles.itemName}>{item.name}</Text>
               <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
               <Text style={styles.itemQuantity}>{item.quantity}</Text>
               <Text style={styles.itemTotal}>${item.total.toFixed(2)}</Text>
             </View>
           )}
           keyExtractor={item => item.id.toString()}
         />
         
         <View style={styles.totalContainer}>
           <Text style={styles.totalText}>Total a pagar: ${totalPay()}</Text>
         </View>

         <TouchableOpacity
           onPress={() => console.log('Boton comprar presionado')}
           style={styles.buyButton}>
           <Text style={styles.buyButtonText}>Comprar</Text>
         </TouchableOpacity>

       </View>
     </View>
   </Modal>
 );
};