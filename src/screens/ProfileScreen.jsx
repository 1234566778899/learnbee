import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { AntDesign, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }) {
    const [tabNumber, setTabNumber] = useState(1);
    const viewOptions = () => {
        Alert.alert(
            '¿Que deseas realizar?',
            'Selecciona una opcion',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Realizar encuesta',
                    onPress: () => navigation.navigate('survay2')
                },
                {
                    text: 'Eliminar proyecto',
                    onPress: () => { }
                }
            ])
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Perfil',
            headerStyle: {
                backgroundColor: '#F9CD14'
            },
            headerRight: () => (
                <Image source={require('../assets/mosca.png')} style={{ width: 50, height: 50 }} />
            )
        })
    }, [navigation])
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <Image source={require('../assets/perfil.png')} style={{ width: 70, height: 70, marginRight: 10 }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Carla Linares Diaz</Text>
            </View>
            <View style={{ paddingHorizontal: 20 }}>
                <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 15 }}>Prof. en Santa Teresita de Calcuta</Text>
                <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>12</Text>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>Proyectos</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>136</Text>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>Seguidores</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>379</Text>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>Siguiendo</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', zIndex: 1, marginTop: 10, justifyContent: 'space-between', width: '100%' }}>
                    <TouchableOpacity
                        onPress={() => cancelProject()}
                        style={{ borderWidth: 1, borderColor: '#F9CD14', paddingHorizontal: 35, paddingVertical: 15, marginTop: 10, borderRadius: 5 }}>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>Editar perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => cancelProject()}
                        style={{ borderWidth: 1, borderColor: '#F9CD14', paddingHorizontal: 35, paddingVertical: 15, marginTop: 10, borderRadius: 5 }}>
                        <Text style={{ textAlign: 'center', fontSize: 15 }}>Compartir perfil</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <TouchableOpacity
                        onPress={() => setTabNumber(1)}
                        style={{ width: '50%' }}
                    >
                        <Text
                            style={{ fontSize: 15, textAlign: 'center', paddingVertical: 5, borderBottomWidth: tabNumber == 1 ? 1 : 0 }}>Proyectos concluidos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: '50%' }}
                        onPress={() => setTabNumber(2)}
                    >
                        <Text
                            style={{ borderBottomWidth: tabNumber == 2 ? 1 : 0, fontSize: 15, textAlign: 'center', paddingVertical: 5 }}>Proyectos en proceso</Text>
                    </TouchableOpacity>
                </View>

            </View>
            {
                tabNumber == 1 && (
                    <ScrollView>
                        <View style={{ paddingHorizontal: 10, marginTop: 25 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../assets/hugo.png')} style={{ width: 50, height: 50 }} />
                                <View style={{ marginLeft: 15 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 40 }}>
                                        <Text style={{ fontWeight: 'bold' }}>Hugo Jimenez</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <AntDesign name="star" size={14} color="#F9CD14" />
                                            <AntDesign name="star" size={14} color="#F9CD14" />
                                            <AntDesign name="star" size={14} color="#F9CD14" />
                                            <AntDesign name="star" size={14} color="black" />
                                            <AntDesign name="star" size={14} color="black" />
                                        </View>
                                    </View>
                                    <View style={{ marginTop: 5 }}>
                                        <Text >Proyecto: No lo digas!</Text>
                                        <Text style={{ paddingRight: 40 }} numberOfLines={2}>La semana pasada hemos jugado con todo el salón. Es bueno poner en práctica de vez en cuando lo aprendido de manera divertida para que nuestros niños aprendan</Text>
                                    </View>
                                </View>
                            </View>
                            <Image source={require('../assets/img2.png')} style={{ borderRadius: 10, width: '100%', height: 200, marginTop: 15 }} />
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
                        <View style={{ paddingHorizontal: 10, marginTop: 25 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../assets/ester.png')} style={{ width: 50, height: 50 }} />
                                <View style={{ marginLeft: 15 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 40 }}>
                                        <Text style={{ fontWeight: 'bold' }}>Hugo Jimenez</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <AntDesign name="star" size={14} color="#F9CD14" />
                                            <AntDesign name="star" size={14} color="#F9CD14" />
                                            <AntDesign name="star" size={14} color="#F9CD14" />
                                            <AntDesign name="star" size={14} color="black" />
                                            <AntDesign name="star" size={14} color="black" />
                                        </View>
                                    </View>
                                    <View style={{ marginTop: 5 }}>
                                        <Text >Proyecto: No lo digas!</Text>
                                        <Text style={{ paddingRight: 40 }} numberOfLines={2}>La semana pasada hemos jugado con todo el salón. Es bueno poner en práctica de vez en cuando lo aprendido de manera divertida para que nuestros niños aprendan</Text>
                                    </View>
                                </View>
                            </View>
                            <Image source={require('../assets/img3.png')} style={{ borderRadius: 10, width: '100%', height: 200, marginTop: 15 }} />
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
                        <View style={{ paddingHorizontal: 10, marginTop: 25 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../assets/avatar.png')} style={{ width: 50, height: 50 }} />
                                <View style={{ marginLeft: 15 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 40 }}>
                                        <Text style={{ fontWeight: 'bold' }}>Hugo Jimenez</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <AntDesign name="star" size={14} color="#F9CD14" />
                                            <AntDesign name="star" size={14} color="#F9CD14" />
                                            <AntDesign name="star" size={14} color="#F9CD14" />
                                            <AntDesign name="star" size={14} color="black" />
                                            <AntDesign name="star" size={14} color="black" />
                                        </View>
                                    </View>
                                    <View style={{ marginTop: 5 }}>
                                        <Text >Proyecto: No lo digas!</Text>
                                        <Text style={{ paddingRight: 40 }} numberOfLines={2}>La semana pasada hemos jugado con todo el salón. Es bueno poner en práctica de vez en cuando lo aprendido de manera divertida para que nuestros niños aprendan</Text>
                                    </View>
                                </View>
                            </View>
                            <Image source={require('../assets/img3.png')} style={{ borderRadius: 10, width: '100%', height: 200, marginTop: 15 }} />
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
                        <View style={{ paddingHorizontal: 10, marginTop: 25 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../assets/hugo.png')} style={{ width: 50, height: 50 }} />
                                <View style={{ marginLeft: 15 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 40 }}>
                                        <Text style={{ fontWeight: 'bold' }}>Hugo Jimenez</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <AntDesign name="star" size={14} color="#F9CD14" />
                                            <AntDesign name="star" size={14} color="#F9CD14" />
                                            <AntDesign name="star" size={14} color="#F9CD14" />
                                            <AntDesign name="star" size={14} color="black" />
                                            <AntDesign name="star" size={14} color="black" />
                                        </View>
                                    </View>
                                    <View style={{ marginTop: 5 }}>
                                        <Text >Proyecto: No lo digas!</Text>
                                        <Text style={{ paddingRight: 40 }} numberOfLines={2}>La semana pasada hemos jugado con todo el salón. Es bueno poner en práctica de vez en cuando lo aprendido de manera divertida para que nuestros niños aprendan</Text>
                                    </View>
                                </View>
                            </View>
                            <Image source={require('../assets/img2.png')} style={{ borderRadius: 10, width: '100%', height: 200, marginTop: 15 }} />
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
                )
            }
            {
                tabNumber == 2 && (
                    <ScrollView>
                        <View style={{ paddingHorizontal: 10, marginTop: 25 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../assets/avatar.png')} style={{ width: 50, height: 50 }} />
                                <View style={{ marginLeft: 15 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 40 }}>
                                        <Text style={{ fontWeight: 'bold' }}>Carla Linares Diaz</Text>
                                        <TouchableOpacity onPress={() => viewOptions()}>
                                            <SimpleLineIcons name="options-vertical" size={20} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginTop: 5 }}>
                                        <Text >Proyecto: Encuentra el tesoro</Text>
                                        <Text style={{ paddingRight: 40 }} numberOfLines={2}>La semana pasada hemos jugado con todo el salón. Es bueno poner en práctica de vez en cuando lo aprendido de manera divertida para que nuestros niños aprendan</Text>
                                    </View>
                                </View>
                            </View>
                            <Image source={require('../assets/img3.png')} style={{ borderRadius: 10, width: '100%', height: 200, marginTop: 15 }} />
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
                        <View style={{ paddingHorizontal: 10, marginTop: 25 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../assets/ester.png')} style={{ width: 50, height: 50 }} />
                                <View style={{ marginLeft: 15 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 40 }}>
                                        <Text style={{ fontWeight: 'bold' }}>Hugo Jimenez</Text>
                                        <TouchableOpacity onPress={() => viewOptions()}>
                                            <SimpleLineIcons name="options-vertical" size={20} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginTop: 5 }}>
                                        <Text >Proyecto: No lo digas!</Text>
                                        <Text style={{ paddingRight: 40 }} numberOfLines={2}>La semana pasada hemos jugado con todo el salón. Es bueno poner en práctica de vez en cuando lo aprendido de manera divertida para que nuestros niños aprendan</Text>
                                    </View>
                                </View>
                            </View>
                            <Image source={require('../assets/img2.png')} style={{ borderRadius: 10, width: '100%', height: 200, marginTop: 15 }} />
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
                )
            }
        </View>
    )
}