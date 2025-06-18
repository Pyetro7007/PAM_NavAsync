// importações
import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import Botao from '../components/Botao'; // botão

const windowWidth = Dimensions.get('window').width;

export default function DetailScreen({ navigation }) {
    return (
// conteiner principal, contém o titulo, a linha e os botões de navegação
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes</Text>
                <View style={styles.linha}></View>
                <Text style={styles.text}>Aplicativo de Navegação e Async</Text>
            <View style={styles.buttonContainer}>
                <Botao 
                    aoPressionar={() => navigation.navigate('Home')} >
                    <Text style={{color:'#FFFFFF'}}>Ir para Home</Text>
                </Botao>
            </View>
            <View style={styles.buttonContainer}>
                <Botao 
                    aoPressionar={() => navigation.navigate('Perfil')} >
                    <Text style={{color:'#FFFFFF'}}>Ir para Perfil</Text>
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
        marginTop: 20,
    },
    buttonContainer: {
        width: windowWidth * 0.7, // 50% da largura da tela
        marginTop: 25,
        height: 50,
    },
    text: {
        width: windowWidth * 0.80, // 80% da largura da tela
        textAlign: 'center', // alinha no centro
        fontSize: 18, // tamanho da fonte
        marginTop: 50,
        color: '#FFFFFF'
    },
    linha: {
        height: 1, // espessura
        backgroundColor: '#919191',
        width: windowWidth * 0.75,
        position: 'absolute', // posiciona no topo
        marginBottom: 150,
    },
});
