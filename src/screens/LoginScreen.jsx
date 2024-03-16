import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LoginScreen({ navigation }) {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../assets/inicio.png')} style={{ width: 250, height: 250 }} />
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 15, color: 'rgba(0,0,0,0.8)' }} >Correo electrónico</Text>
                    <TextInput
                        placeholder='you@gmail.com'
                        style={{ borderColor: '#F9CD14', borderWidth: 1, padding: 10, fontSize: 15, marginTop: 5, borderRadius: 5 }} />
                    <Text style={{ fontSize: 15, color: 'rgba(0,0,0,0.8)', marginTop: 15 }}>Contraseña</Text>
                    <TextInput
                        placeholder='Enter 6 character or more'
                        secureTextEntry style={{ borderColor: '#F9CD14', borderWidth: 1, padding: 10, fontSize: 15, marginTop: 5, borderRadius: 5 }} />
                    <TouchableOpacity style={{ paddingVertical: 15 }}>
                        <Text style={{ textAlign: 'center' }}>¿Olvidó su contraseña?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('content')}
                        style={{ backgroundColor: '#F9CD14', paddingVertical: 15, marginTop: 5, borderRadius: 5 }}>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>Ingresar</Text>
                    </TouchableOpacity>
                    <Text style={{ textAlign: 'center', marginTop: 15 }}>Ó</Text>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', justifyContent: 'center', borderColor: '#F9CD14', borderWidth: 1, paddingVertical: 15, marginTop: 10, borderRadius: 5, alignItems: 'center' }}>
                        <Image source={require('../assets/google.png')} style={{ width: 20, height: 20 }} />
                        <Text style={{ textAlign: 'center', fontSize: 15, marginLeft: 20 }}>Ingresar con Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#F9CD14', paddingVertical: 15, marginTop: 10, borderRadius: 5 }}>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>Registrate</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    )
}