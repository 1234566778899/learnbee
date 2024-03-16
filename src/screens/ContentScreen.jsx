import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'

export default function ContentScreen({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#F9CD14'
            },
            title: '',
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => lookProfile()}
                    style={{ paddingVertical: 15, marginLeft: 10 }}>
                    <FontAwesome name="user" size={26} color="black" />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity style={{ paddingVertical: 15, marginRight: 10 }}>
                    <Ionicons name="settings-sharp" size={26} color="black" />
                </TouchableOpacity>
            ),
        });
    }, [navigation])

    const lookProfile = () => {
        Alert.alert(
            "Carla Linares Diaz",
            "Prof. en Santa Teresita de Calcuta",
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Ver perfil',
                    onPress: () => navigation.navigate('profile')
                },
                {
                    text: 'Cerrar sesión',
                    onPress: () => navigation.navigate('login')
                }
            ]
        )
    }
    const selectOption = () => {
        Alert.alert(
            "¿Que quieres crear?",
            "Seleccione una opción",
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Proyecto',
                    onPress: () => navigation.navigate('project')
                },
                {
                    text: 'Encuesta',
                    onPress: () => navigation.navigate('survay3')
                }
            ]
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ paddingHorizontal: 10, marginTop: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/hugo.png')} style={{ width: 50, height: 50 }} />
                        <View style={{ marginLeft: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 40 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Hugo Jimenez</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <AntDesign name="star" size={14} color="#F9CD14" />
                                    <AntDesign name="star" size={14} color="#F9CD14" />
                                    <AntDesign name="star" size={14} color="#F9CD14" />
                                    <AntDesign name="star" size={14} color="black" />
                                    <AntDesign name="star" size={14} color="black" />
                                </View>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={{ fontWeight: 'bold' }}>Fisiyenga</Text>
                                <Text style={{ paddingRight: 40 }} numberOfLines={2}>La semana pasada hemos jugado con todo el salón. Es bueno poner en práctica de vez en cuando lo aprendido de manera divertida para que nuestros niños aprendan</Text>
                            </View>
                        </View>
                    </View>
                    <Image source={require('../assets/publication.png')} style={{ borderRadius: 5, width: '100%', height: 200, marginTop: 15 }} />
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                            <AntDesign name="like1" size={20} color="black" />
                            <Text style={{ marginLeft: 5 }}>Me gusta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="comment" size={20} color="black" />
                            <Text style={{ marginLeft: 5 }}>Comentarios</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="share" size={20} color="black" />
                            <Text style={{ marginLeft: 5 }}>Compartir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, marginTop: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/avatar.png')} style={{ width: 50, height: 50 }} />
                        <View style={{ marginLeft: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 40 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Maria Torres</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <AntDesign name="star" size={14} color="#F9CD14" />
                                    <AntDesign name="star" size={14} color="#F9CD14" />
                                    <AntDesign name="star" size={14} color="black" />
                                    <AntDesign name="star" size={14} color="black" />
                                    <AntDesign name="star" size={14} color="black" />
                                </View>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={{ fontWeight: 'bold' }}>Fabrica y recicla</Text>
                                <Text style={{ paddingRight: 40 }} numberOfLines={2}>La semana pasada hemos jugado con todo el salón. Es bueno poner en práctica de vez en cuando lo aprendido de manera divertida para que nuestros niños aprendan</Text>
                            </View>
                        </View>
                    </View>
                    <Image source={require('../assets/img3.png')} style={{ borderRadius: 5, width: '100%', height: 200, marginTop: 15 }} />
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                            <AntDesign name="like1" size={20} color="black" />
                            <Text style={{ marginLeft: 5 }}>Me gusta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="comment" size={20} color="black" />
                            <Text style={{ marginLeft: 5 }}>Comentarios</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="share" size={20} color="black" />
                            <Text style={{ marginLeft: 5 }}>Compartir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, marginTop: 15 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/ester.png')} style={{ width: 50, height: 50 }} />
                        <View style={{ marginLeft: 15 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 40 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Esther Clemente</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <AntDesign name="star" size={14} color="#F9CD14" />
                                    <AntDesign name="star" size={14} color="#F9CD14" />
                                    <AntDesign name="star" size={14} color="#F9CD14" />
                                    <AntDesign name="star" size={14} color="#F9CD14" />
                                    <AntDesign name="star" size={14} color="black" />
                                </View>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={{ fontWeight: 'bold' }}>Monopoly con mate</Text>
                                <Text style={{ paddingRight: 40 }} numberOfLines={2}>La semana pasada hemos jugado con todo el salón. Es bueno poner en práctica de vez en cuando lo aprendido de manera divertida para que nuestros niños aprendan</Text>
                            </View>
                        </View>
                    </View>
                    <Image source={require('../assets/img2.png')} style={{ borderRadius: 5, width: '100%', height: 200, marginTop: 15 }} />
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                            <AntDesign name="like1" size={20} color="black" />
                            <Text style={{ marginLeft: 5 }}>Me gusta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="comment" size={20} color="black" />
                            <Text style={{ marginLeft: 5 }}>Comentarios</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name="share" size={20} color="black" />
                            <Text style={{ marginLeft: 5 }}>Compartir</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
            <TouchableOpacity
                onPress={() => selectOption()}
                style={{ width: 60, justifyContent: 'center', borderRadius: 60, elevation: 2, height: 60, backgroundColor: '#F9CD14', position: 'absolute', bottom: 20, right: 20 }}>
                <Text style={{ textAlign: 'center', fontSize: 25 }}>+</Text>
            </TouchableOpacity>
        </View>


    )
}