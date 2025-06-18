// importações - TouchableOpacity serve para criar botões personalizados
import { TouchableOpacity, StyleSheet } from "react-native";

// children - conteúdo do botão
// aoPressionar - mesma coisa que o onPress, função que é executada quando o botão é apertado
export default function Botao({children, aoPressionar}){
    return(
        <TouchableOpacity style={styles.botao}onPress={aoPressionar} >
            {children}
        </TouchableOpacity>
    )
}

// estilizações do botão, usado em todos as outras telas
const styles = StyleSheet.create({
    botao:{
        justifyContent:'center',
        backgroundColor: '#292C33',
        alignItems: 'center',
        borderRadius: 5,
        height: 45,
        borderWidth: 2.5,
        borderColor: '#F20505',
        borderRadius: 1,
    },
});