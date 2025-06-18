// importações
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import Botao from '../components/Botao'; // botão

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({ navigation }) {

// função async para logout
    const logout = async () => {
        await AsyncStorage.setItem("Estado", JSON.stringify(false)); // define o estado como desconectado (false)
        navigation.replace("Login"); // redireciona para a tela de login
    };

    return (
// conteiner principal, contém o titulo, a linha, os botões de navegação e o botão de logout
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
                <View style={styles.linha}></View>
            <View style={styles.buttonContainer}>
                <Botao 
                    aoPressionar={() => navigation.navigate('Home')} >
                    <Text style={{color:'#FFFFFF'}}>Ir para Home</Text>
                </Botao>
            </View>
            <View style={styles.buttonContainer}>
                <Botao 
                    aoPressionar={() => navigation.navigate('Detalhes')} >
                    <Text style={{color:'#FFFFFF'}}>Ir para Detalhes</Text>
                </Botao>
            </View>
            <View style={styles.buttonContainer}>
                <Botao 
                    aoPressionar={() => logout()} >
                    <Text style={{color:'#FFFFFF'}}>LOGOUT</Text>
                </Botao>
            </View>
        </View>
    );
}

// estilizações
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D0D0D', // Cor de fundo da tela
    },
    title: {
        fontSize: 24,
        color: '#FFFFFF',
        marginBottom: 20,
    },
    buttonContainer: {
        width: windowWidth * 0.7, // 50% da largura da tela
        marginTop: 25,
        height: 50,
    },
    linha: {
        height: 1, // espessura
        backgroundColor: '#919191', // centraliza a linha
        width: windowWidth * 0.75,
        position: 'absolute', // posiciona no topo
        marginBottom: 200,
    },
});
