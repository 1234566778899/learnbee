import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';

export default function CreateProjectScreen({ navigation }) {
    const [imgs, setImgs] = useState([]);
    const cancelProject = () => {
        Alert.alert(
            "¿Está seguro que desea cancelar la publicación del proyecto?",
            "Seleccione una opción",
            [
                {
                    text: 'Sí',
                    onPress: () => navigation.goBack()
                },
                {
                    text: 'No'
                }
            ]
        )
    }
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsMultipleSelection: true,
            quality: 1
        })
        if (!result.canceled) {
            setImgs([...imgs, ...result.assets]);
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white', paddingBottom: 20 }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 15 }}>Nombre</Text>
                    <TextInput
                        placeholder='¿Cómo se llama el proyecto?'
                        style={{ borderColor: '#F9CD14', borderWidth: 1, padding: 10, fontSize: 15, marginTop: 5, borderRadius: 5 }} />
                    <Text style={{ fontSize: 15, marginTop: 10 }}>Descripción</Text>
                    <TextInput
                        multiline={true}
                        textAlignVertical='top'
                        placeholder='¿De que trata tu proyecto?'
                        style={{ height: 100, borderColor: '#F9CD14', borderWidth: 1, padding: 10, fontSize: 15, marginTop: 5, borderRadius: 5 }} />
                    <Text style={{ fontSize: 15, marginTop: 10 }}>Curso</Text>
                    <TextInput
                        placeholder='¿Cómo se llama el proyecto?'
                        style={{ borderColor: '#F9CD14', borderWidth: 1, padding: 10, fontSize: 15, marginTop: 5, borderRadius: 5 }} />
                    <Text style={{ fontSize: 15, marginTop: 10 }}>Tema</Text>
                    <TextInput
                        placeholder='¿Qué tema abarca tu curso?'
                        style={{ borderColor: '#F9CD14', borderWidth: 1, padding: 10, fontSize: 15, marginTop: 5, borderRadius: 5 }} />
                    <Text style={{ fontSize: 15, marginTop: 10 }}>Contenido multimedia</Text>
                    {
                        imgs.length == 0 && (
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <TouchableOpacity style={{ padding: 10, borderRadius: 5, borderWidth: 1, borderColor: '#F9CD14' }}>
                                    <Entypo name="camera" size={44} color="black" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => pickImage()} style={{ padding: 10, borderRadius: 5, marginLeft: 10, borderWidth: 1, borderColor: '#F9CD14' }}>
                                    <FontAwesome name="photo" size={44} color="black" />
                                </TouchableOpacity>
                            </View>
                        )
                    }
                    {
                        imgs.length > 0 && <View>
                            {
                                imgs.map(img => (
                                    <Image key={img.uri} source={{ uri: img.uri }} style={{ height: 200, marginTop: 20 }} />
                                ))
                            }
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity
                                    onPress={() => setImgs([])}
                                    style={{ padding: 10, backgroundColor: '#F6FAFE', width: 100, borderRadius: 5, marginTop: 10 }}>
                                    <Text style={{ color: '#174EA6', fontWeight: 'bold', textAlign: 'center', fontSize: 15 }}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => pickImage()}
                                    style={{ padding: 10, backgroundColor: '#F6FAFE', marginLeft: 10, width: 100, borderRadius: 5, marginTop: 10 }}>
                                    <Text style={{ color: '#174EA6', fontWeight: 'bold', textAlign: 'center', fontSize: 15 }}>Agregar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                </View>
            </ScrollView>
            <View style={{ flexDirection: 'row', paddingHorizontal: 20, zIndex: 1, justifyContent: 'space-between', width: '100%' }}>
                <TouchableOpacity
                    onPress={() => cancelProject()}
                    style={{ borderWidth: 1, borderColor: '#F9CD14', paddingHorizontal: 35, paddingVertical: 15, marginTop: 10, borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', fontSize: 15 }}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('survay')}
                    style={{ backgroundColor: '#F9CD14', paddingHorizontal: 35, paddingVertical: 15, marginTop: 10, borderRadius: 5 }}>
                    <Text style={{ textAlign: 'center', fontSize: 15 }}>Siguiente</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}