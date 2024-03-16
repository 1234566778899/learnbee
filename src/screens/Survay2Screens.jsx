import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Survay2Screens({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ marginTop: 20, fontSize: 18, fontWeight: 'bold' }}>Encuesta estudiantil</Text>
                <Text style={{ fontSize: 15 }}>Realiza una encuesta para evaluar como le fue al proyecto</Text>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30, borderColor: '#F9CD14', borderWidth: 1, paddingVertical: 30, borderRadius: 10 }}>
                    <Text>¡Conéctate con este código QR!</Text>
                    <Text>Usa tu celular para escanearlo</Text>
                    <Image source={require('../assets/qr.png')} style={{ marginTop: 10 }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, marginTop: 20 }}>
                    <Text>Encuesta realizada por</Text>
                    <TextInput value='0 Estudiantes' style={{ marginLeft: 10, borderRadius: 5, borderColor: '#F9CD14', borderWidth: 1, paddingVertical: 5, paddingHorizontal: 10, fontSize: 15 }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 20, paddingHorizontal: 20, zIndex: 1, justifyContent: 'space-between', width: '100%' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ borderWidth: 1, borderColor: '#F9CD14', paddingHorizontal: 35, paddingVertical: 15, marginTop: 10, borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', fontSize: 15 }}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('succed')}
                    style={{ backgroundColor: '#F9CD14', paddingHorizontal: 35, paddingVertical: 15, marginTop: 10, borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', fontSize: 15 }}>Guardar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}