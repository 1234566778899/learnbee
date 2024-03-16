import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('login')}
                style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <View>
                    <Image source={require('../assets/inicio.png')} style={{ width: 300, height: 300 }} />
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>LearnBee</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}