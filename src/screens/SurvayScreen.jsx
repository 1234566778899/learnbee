import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'

export default function SurvayScreen({ navigation }) {
    const [isGenerate, setIsGenerate] = useState(false);
    const moreLate = () => {
        Alert.alert(
            "¿Está seguro que no desea realizar la encuesta estudiantil?",
            "Seleccione una opción",
            [
                {
                    text: 'No, retroceder',
                    style: 'cancel'
                },
                {
                    text: 'Sí, publicar',
                    onPress: () => navigation.navigate('succed')
                }
            ]
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Encuesta estudiantil</Text>
                <Text style={{ fontSize: 15, marginTop: 5 }}>¿Desear realizar la encuesta para que tus alumnos evaluen el proyecto?</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 20, zIndex: 1, justifyContent: 'space-between', width: '100%' }}>
                <TouchableOpacity
                    onPress={() => moreLate()}
                    style={{ borderWidth: 1, borderColor: '#F9CD14', paddingHorizontal: 35, paddingVertical: 15, marginTop: 10, borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', fontSize: 15 }}>Más tarde</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setIsGenerate(true)}
                    style={{ backgroundColor: '#F9CD14', paddingHorizontal: 35, paddingVertical: 15, marginTop: 10, borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', fontSize: 15 }}>Generar QR</Text>
                </TouchableOpacity>
            </View>
            {
                isGenerate && (<>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 15, marginTop: 30 }}>¡Conéctate con este código QR!</Text>
                    <Text style={{ textAlign: 'center', marginTop: 10 }}>Usa tu celular para escanearlo</Text>
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Image source={require('../assets/qr.png')} style={{ width: 200, height: 200 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, marginTop: 20 }}>
                        <Text>Encuesta realizada por</Text>
                        <TextInput value='0 Estudiantes' style={{ marginLeft: 10, borderRadius: 5, borderColor: '#F9CD14', borderWidth: 1, paddingVertical: 5, paddingHorizontal: 10, fontSize: 15 }} />
                    </View>
                    <View style={{ flexDirection: 'row', position: 'absolute', bottom: 20, width: '100%', paddingHorizontal: 20, zIndex: 1, justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('succed')}
                            style={{ backgroundColor: '#F9CD14', paddingHorizontal: 35, paddingVertical: 15, marginTop: 10, borderRadius: 5 }}>
                            <Text style={{ textAlign: 'center', fontSize: 15 }}>Publicar</Text>
                        </TouchableOpacity>
                    </View>
                </>)
            }
        </View>
    )
}