import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Alert } from 'react-native';
import { TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        setDados();
    }, []);

    const getDados = async () => {
        try {
            await AsyncStorage.getItem('DadosUsuario').then(value => {
                if (value != null) {
                    Alert.alert("Logou com sucesso");
                };
            });
        } catch (error) {
            console.warn(error);
        };
    };

    const setDados = async () => {
        if (email.length == 0 || senha.length == 0) {
            Alert.alert("Digite o login corretamente");
        } else {
            try {
                var usuario = {
                    Email: email,
                    Senha: senha,
                };
                await AsyncStorage.setItem('DadosUsuario', JSON.stringify(usuario));
                Alert.alert("Conta criada com sucesso");
            } catch (error) {
                console.warn(error);
            };
        };
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Digite o email'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Digite a senha'
                    secureTextEntry={true}
                    onChangeText={setSenha}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Logar"
                    onPress={() => {
                        setDados()
                        navigation.navigate('Home')
                    }}
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
        backgroundColor: '#f0f8ff', // Cor de fundo da tela
    },
    title: {
        fontSize: 24,
        marginBottom: 2,
    },
    buttonContainer: {
        backgroundColor: '#add8e6', // Cor de fundo do container do botão
        margin: 10,
        width: windowWidth * 0.5, // 50% da largura da tela
        borderRadius: 5,
    },
    input: {
        backgroundColor: '#add8e6', // Cor de fundo do container do botão
        flex: 1,
        borderRadius: 5,
    },
    inputContainer: {
        margin: 10,
        width: windowWidth * 0.5, // 50% da largura da tela
    }
});