import { StyleSheet } from "react-native";
import { ACCENT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR, TEXT_COLOR_LIGHT } from "../commons/constants";

export const styles = StyleSheet.create({
    titleWelcome: {
        fontSize: 17,
        fontWeight: 'bold',
        color: PRIMARY_COLOR
    },
    textDescription: {
        fontSize: 15,
        color: PRIMARY_COLOR,
        paddingVertical: 10
    },
    containerForm: {
        marginVertical: 10
    },
    iconForm: {
        position: 'absolute',
        bottom: 15,
        right: 10
    },
    textRedirect: {
        fontSize: 15,
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
        textAlign: 'center',
        marginTop: 20
    },
    containerModal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        padding: 20,
        margin: 15,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 10
    },
    headerModal: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10
    },
    containerIcon: {
        flex: 1,
        alignItems: 'flex-end'
    },
    titleModal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: PRIMARY_COLOR
    },
    imageModal: {
        width: 160,
        height: 160
    },
    containerImageM: {
        alignItems: 'center'
    },
    containerQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantity: {
        height: 50,
        width: 50,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        borderRadius: 25
    },
    buttonQuantityText: {
        color: SECONDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuantity: {
        fontSize: 18,
    },
    buttonAddCart: {
        backgroundColor: TERTIARY_COLOR,
        marginTop: 15,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 5
    },
    buttonAddCartText: {
        color: SECONDARY_COLOR,
        fontWeight: 'bold'
    },
    textStock: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#873424',
        textAlign: 'center'
    },
    headerHome: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10,
        alignItems: 'center'
    },
    containerIconCart: {
        position: 'relative',
        marginRight: 10,
    },
    textIconCart: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        color: 'white',
        fontSize: 12,
        borderRadius: 10,
        width: 20,
        height: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        zIndex: 1,
    },
    headerItemList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 8,
    },
    headerItemText: {
        fontWeight: 'bold',
        fontSize: 12,
        color: 'gray',
    },
    itemCart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
    },
    itemName: {
        flex: 2,
        fontSize: 16,
    },
    itemPrice: {
        flex: 1,
        fontSize: 16,
        textAlign: 'right',
    },
    itemQuantity: {
        flex: 1,
        fontSize: 16,
        textAlign: 'right',
    },
    itemTotal: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    totalContainer: {
        alignItems: 'flex-end',
        marginTop: 10,
        paddingRight: 10,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
    },
    buyButton: {
        backgroundColor: TERTIARY_COLOR,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 15,
        alignItems: 'center',
    },
    buyButtonText: {
        color: SECONDARY_COLOR,
        fontWeight: 'bold',
        fontSize: 16,
    },
    // Estilos para la pantalla de inicio de sesión y registro
    container: {
        flex: 1,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: SECONDARY_COLOR,
        textAlign: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 20,
    },
    input: {
        backgroundColor: SECONDARY_COLOR,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10,
        color: PRIMARY_COLOR,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 5,
        marginBottom: 10,
    },
    passwordIcon: {
        position: 'absolute',
        right: 15,
    },
    button: {
        backgroundColor: ACCENT_COLOR,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: SECONDARY_COLOR,
        fontWeight: 'bold',
        fontSize: 18,
    },
    link: {
        marginTop: 15,
        alignItems: 'center',
    },
    linkText: {
        color: ACCENT_COLOR,
        fontWeight: 'bold',
    },
    footerText: {
        color: SECONDARY_COLOR,
        fontSize: 14,
    },
});