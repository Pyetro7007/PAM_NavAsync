import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Alert, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        getDados();
    }, []);

    const getDados = async () => {
        try {
            const usuario = {
                    Email: "usuario123@gmail.com",
                    Senha: "123"
                };
                await AsyncStorage.setItem("Dados", JSON.stringify(usuario));
        } catch (error) {
            console.warn(error);
        }
    };

    const setDados = async () => {
            try {
                const dadosSalvos = await AsyncStorage.getItem("Dados");
                if (dadosSalvos) {
                    const usuario = JSON.parse(dadosSalvos);
                    if (email == usuario.Email && senha == usuario.Senha) {
                        Alert.alert("Logou com sucesso");
                        navigation.navigate('Home');
                    } else {
                        Alert.alert("Email ou senha incorretos");
                    }
                } else {
                    Alert.alert("Erro ao recuperar dados salvos")
                }
            } catch (error) {
                console.warn(error);
            }
        };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <View style={styles.inputContainer}>
                <TextInput style={styles.placeHolder}
                    placeholder='Digite o email'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput style={styles.placeHolder}
                    placeholder='Digite a senha'
                    secureTextEntry={true}
                    onChangeText={setSenha}
                    
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Logar"
                    onPress={setDados}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#87CEEB', // Cor de fundo da tela
    },
    title: {
        fontSize: 24,
        marginBottom: 25,
        color: '#2C3E50',
    },
    buttonContainer: {
        backgroundColor: '#add8e6', // Cor de fundo do container do botão
        margin: 10,
        width: windowWidth * 0.7, // 50% da largura da tela
        borderRadius: 5,
        marginTop: 25,
    },
    input: {
        backgroundColor: '#add8e6', // Cor de fundo do container do botão
        flex: 1,
        borderRadius: 5,
    },
    inputContainer: {
        margin: 10,
        width: windowWidth * 0.75, // 75% da largura da tela
        backgroundColor: '#e9e9e9',
        borderRadius: 50,
    },
    placeHolder: {
        marginLeft: 15,
        marginRight: 15,
    },
});