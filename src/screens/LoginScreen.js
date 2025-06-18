// importações
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Alert, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Botao from '../components/Botao'; // componente do botão 

const windowWidth = Dimensions.get('window').width;

// definições para armazenamento
export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loginState, setState] = useState(false);

// useEffect serve para verificar se o usuário já está logado ou não
    useEffect(() => {
        const getUsuario = async () => {
            if(JSON.parse(await AsyncStorage.getItem("Estado"))) { // verifica se está logado
                navigation.navigate("Home"); // se já estiver, redireciona automaticamente para a tela de home
            }
        }
        getUsuario();
    }, []);

// função com os dados salvos 
    const getDados = async () => {
        try {
            const usuario = {
                    Email: "usuario123@gmail.com", // email fixo - futuramente talvez realizar cadastro
                    Senha: "123" // senha fixa
                };
                await AsyncStorage.setItem("Dados", JSON.stringify(usuario)); // armazena os dados
        } catch (error) {
            console.warn(error); // .warn para exibir mensagem de erro no console do navegador 
        }
    };

// função para validar login com os dados salvos
    const setDados = async () => {
            try {
                const dadosSalvos = await AsyncStorage.getItem("Dados"); // dados salvos
                if (dadosSalvos) {
                    const usuario = JSON.parse(dadosSalvos); // converte JSON para objeto
                    if (email == usuario.Email && senha == usuario.Senha) { // valida
                        Alert.alert("Logou com sucesso"); // exibe uma mensagem de sucesso
                        await AsyncStorage.setItem("Estado", JSON.stringify(true)); // salva o estado de login
                        navigation.navigate('Home'); // redireciona para a home
                    } else {
                        Alert.alert("Email ou senha incorretos"); // mensagem de erro se digitar errado
                    }
                } else {
                    Alert.alert("Erro ao recuperar dados salvos") // mensagem de erro se não houver dados cadastrados
                }
            } catch (error) {
                console.warn(error);
            }
        };

    return (
// conteiner principal da tela, tem o menu, o titulo, a linha cinza embaixo do titulo, container do email, conatiner da senha e o botão
        <View style={styles.container}>
            <View style={styles.menu}> 
            <Text style={styles.title}>Login</Text>
                <View style={styles.linha}></View>

                <View style={[styles.inputContainer, {marginTop: 50}]}>
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
                    <Botao aoPressionar={setDados}>
                        <Text style={{color:'#FFFFFF'}}>Logar</Text>
                    </Botao>
                </View>
            </View>
        </View>
    );
};

// css da tela

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
        marginTop: 20,
    },
    buttonContainer: {
        width: windowWidth * 0.7, // 70% da largura da tela
        marginTop: 25,
        height: 50,
    },
    inputContainer: {
        marginTop: 10,
        width: windowWidth * 0.75, // 75% da largura da tela
        borderWidth: 2.5,
        backgroundColor: '#292C33',
        borderColor: '#F20505',
        borderRadius: 1,
    },
    placeHolder: { // o textinho dentro do TextInput, pra não ficar colado nas bordas laterais
        marginLeft: 15,
        marginRight: 15,
        color: '#FFFFFF'
    },
    menu: {
        flex: 1,
        backgroundColor: '#0D0D0D', // Cor de fundo da tela
        paddingVertical: 10, // espaçamento interno, apenas na vertical
        width: windowWidth * 0.80, 
        maxHeight: 300, // limita o tamanho máximo
        alignItems: 'center',
    },
    linha: {
        height: 1, // espessura
        backgroundColor: '#919191',
        width: windowWidth * 0.75,
        alignSelf: 'center', // centraliza a linha
        position: 'absolute', // posiciona no topo
        marginTop: 70, // depois a margin para descer a linha (gambiarra) 
        marginBottom: 80, 
    },
});