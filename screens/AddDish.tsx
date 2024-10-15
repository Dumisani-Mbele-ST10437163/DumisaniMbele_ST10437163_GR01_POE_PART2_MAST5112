import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './RootStackParams';
import { StackNavigationProp } from '@react-navigation/stack';

type addDishProp = StackNavigationProp<RootStackParamList, 'AddDish'>;

export default function AddDishScreen() {

    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [Course, setCourse] = useState('');
    const [Price, setPrice] = useState<number>(0);

    const navigation = useNavigation<addDishProp>();


    const handleAddDish = (currentMenu: Array<{ Title: string; Description: string; Course: string; Price: number }>) => {

        const newDish = { Title, Description, Course, Price };
        const updatedMenu = [...currentMenu, newDish];


        navigation.navigate('Home', { dishes: updatedMenu });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Dish Title:</Text>
            <TextInput placeholder="Title" onChangeText={newText => setTitle(newText)} style={styles.input} />

            <Text style={styles.label}>Dish Description:</Text>
            <TextInput placeholder="Description" onChangeText={newText => setDescription(newText)} style={styles.input} />

            <Text style={styles.label}>Dish Price(R):</Text>
            <TextInput placeholder="Price" onChangeText={newText => setPrice(parseInt(newText))} style={styles.input} />

            <Text style={styles.label}>Course:</Text>
            <Picker selectedValue={Course} onValueChange={(value) => setCourse(value)} style={styles.picker}>
                <Picker.Item label="Starter" value="Starter" />
                <Picker.Item label="Main" value="Main" />
                <Picker.Item label="Dessert" value="Dessert" />
            </Picker>

            <View style={styles.spacing}>
            <Button 
                title="Add Dish"
                onPress={() => {
                    const currentDishes = navigation.getState().routes.find(r => r.name === 'Home')?.params?.dishes || [];
                    handleAddDish(currentDishes);
                }}
            />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16,  backgroundColor: '#ffc7b5' },
    input: { borderWidth: 1, padding: 8, marginBottom: 12 },
    label: { fontSize: 16, marginBottom: 8, fontWeight: 'bold' },
    picker: { paddingTop: 0, height: 20, width: 150 },
    spacing: { paddingTop: 80, paddingLeft: 100}
});


