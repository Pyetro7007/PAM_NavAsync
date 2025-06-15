import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Ir para Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Ir para Detalhes"
                    onPress={() => navigation.navigate('Detalhes')}
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
        backgroundColor: '#D1F2EB', // Cor de fundo da tela
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: '#2C3E50',
    },
    buttonContainer: {
        backgroundColor: '#dda0dd', // Cor de fundo do container do botão
        margin: 10,
        width: windowWidth * 0.5, // 50% da largura da tela
        borderRadius: 5,
    },
});
