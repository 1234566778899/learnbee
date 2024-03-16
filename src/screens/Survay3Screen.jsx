import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Survay3Screen({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ marginTop: 20, fontSize: 18, fontWeight: 'bold' }}>Encuesta estudiantil</Text>
                <Text style={{ fontSize: 15, marginTop: 5 }}>Realiza una encuesta para evaluar como le fue al proyecto</Text>
                <Text style={{ fontSize: 15, marginTop: 25, fontWeight: 'bold' }} >Proyecto</Text>
                <TextInput
                    placeholder='Selecciona el proyecto'
                    style={{ borderColor: '#F9CD14', borderWidth: 1, padding: 10, fontSize: 15, marginTop: 5, borderRadius: 5 }} />
            </View>
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 20, paddingHorizontal: 20, zIndex: 1, justifyContent: 'space-between', width: '100%' }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ borderWidth: 1, borderColor: '#F9CD14', paddingHorizontal: 35, paddingVertical: 15, marginTop: 10, borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', fontSize: 15 }}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('survay4')}
                    style={{ backgroundColor: '#F9CD14', paddingHorizontal: 35, paddingVertical: 15, marginTop: 10, borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', fontSize: 15 }}>Guardar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}