import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function DetailScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes</Text>
            <Text style={styles.text}>Aplicativo de Navegação e Async</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Ir para Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Ir para Perfil"
                    onPress={() => navigation.navigate('Perfil')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFAFA', // Cor de fundo da tela
    },
    title: {
        fontSize: 25,
        marginBottom: 15,
        color: '#2C3E50',
    },
    buttonContainer: {
        backgroundColor: '#ffebcd', // Cor de fundo do container do botão
        margin: 10,
        width: windowWidth * 0.5, // 50% da largura da tela
        borderRadius: 5,
    },
    text: {
        width: windowWidth * 0.80, // 80% da largura da tela
        textAlign: 'center',
        fontSize: 18,
        margin: 15,
        marginBottom: 30,
    },
});
