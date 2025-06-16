import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Alert, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loginState, setState] = useState(false);

    useEffect(() => {
        const getUsuario = async () => {
            if(JSON.parse(await AsyncStorage.getItem("Estado"))) {
                navigation.navigate("Home");
            }
        }
        getUsuario();
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
                        await AsyncStorage.setItem("Estado", JSON.stringify(true));
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
            <View style={styles.menu}>
            <Text style={styles.title}>Login</Text>
                <View style={styles.linha}></View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.placeHolder}
                        placeholder='Digite o email'
                        placeholderTextColor={'#FFFFFF'}
                        keyboardType='email-address'
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.placeHolder}
                        placeholder='Digite a senha'
                        placeholderTextColor={'#FFFFFF'}
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A60303', // Cor de fundo da tela
    },
    title: {
        fontSize: 24,
        color: '#FFFFFF',
        marginLeft: 20,
        marginTop: 20,
    },
    buttonContainer: {
        backgroundColor: '#add8e6', // Cor de fundo do container do botão
        width: windowWidth * 0.7, // 50% da largura da tela
        borderRadius: 5,
        margin: 25,
    },
    input: {
        backgroundColor: '#add8e6', // Cor de fundo do container do botão
        flex: 1,
        borderRadius: 5,
    },
    inputContainer: {
        margin: 10,
        width: windowWidth * 0.75, // 75% da largura da tela
        borderWidth: 2.5,
        backgroundColor: '#292C33',
        borderColor: '#F20505',
        borderRadius: 1,
    },
    placeHolder: {
        marginLeft: 15,
        marginRight: 15,
    },
    menu: {
        flex: 1,
        backgroundColor: '#0D0D0D', // Cor de fundo da tela
        margin: 225,
    },
    linha: {
        flex: 1,
        backgroundColor: '#919191',
        width: windowWidth * 0.75,
        margin: 31,
    },
});