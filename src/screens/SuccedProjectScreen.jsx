import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SuccedProjectScreen({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 600, backgroundColor: '#F9CD14' }}>
                <View style={{ width: 300, height: 300, alignItems: 'center' }}>
                    <Image source={require('../assets/bee.png')} style={{ width: 150 * 0.5, height: 130 * 0.5 }} />
                    <Text style={{ textAlign: 'center', marginTop: 30, fontWeight: 'bold', fontSize: 20 }}>Se ha realizado la publicación de tu proyecto de manera exitosa</Text>
                </View>
            </View>
            <View style={{ position: 'absolute', bottom: 20, flexDirection: 'row', paddingHorizontal: 20, zIndex: 1, justifyContent: 'space-between', width: '100%' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('content')}
                    style={{ borderWidth: 1, borderColor: '#F9CD14', paddingHorizontal: 35, paddingVertical: 15, marginTop: 10, borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', fontSize: 15 }}>Ir al inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('content')}
                    style={{ backgroundColor: '#F9CD14', paddingHorizontal: 35, paddingVertical: 15, marginTop: 10, borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', fontSize: 15 }}>Compartir</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}