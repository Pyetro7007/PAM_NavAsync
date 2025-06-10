import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-web';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Screen</Text>
            <View style={styles.container}>
                <TextInput style={styles.input}
                    placeholder='Digite o email'
                    keyboardType='email-address'
                    onChangeText={setEmail}
                    value={email}
                />

                <TextInput style={styles.input}
                    placeholder='Digite a senha'
                    secureTextEntry={true}
                    onChangeText={setSenha}
                    value={senha}
                />

                <View style={styles.buttonContainer}>
                    <Button                     
                        title="Logar"
                        onPress={() => navigation.navigate('Home')}/>
                </View>
            </View>
        </View>
    );
}

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
        margin: 10,
        width: windowWidth * 0.5, // 50% da largura da tela
        borderRadius: 5,
    },
});