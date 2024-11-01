import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid, ScrollView, Image, Button, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome6';

const InputBox = ({ label, onChangeText, icon_name }) => {
    return (
        <View style={{ marginBottom: 20 }}>
            <Text>{label}</Text>
            <TextInput style={{ borderWidth: 1, padding: 8 }} onChangeText={onChangeText} />
            {icon_name && <Icon name={icon_name} size={30} color="#0c3dc4" />}
        </View>
    );
};

const MyApp = () => {
    const [name, setName] = useState('');
    const [insectType, setInsectType] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [anitype, setAnitype] = useState('');

    const handleInsectSelect = (value) => {
        setInsectType(value);
        let message = value === 'Bee'
            ? `Congrats ${name}, you got it right!`
            : value === 'Fly'
                ? 'RIP, fly is not the right answer. Try again!'
                : 'Not Even Close, Try again!';

        ToastAndroid.show(message, ToastAndroid.SHORT);
    };

    const handleAnimalSelect = (value) => {
        setAnimalType(value);
        let message = value === 'Elephant'
            ? `Congrats ${name}, you got it right!`
            : value === 'Lion'
                ? 'RIP, lion is not the right answer. Try again!'
                : 'Not Even Close, Try again!';

        ToastAndroid.show(message, ToastAndroid.SHORT);
    };

    return (
        <ScrollView style={{ padding: 20, paddingTop: 50 }}>
            <View style={{ flex: 1, minHeight: '100%', paddingBottom: 50 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <Icon name="paw" size={30} color="#3894c9" style={{ marginRight: 10 }} />
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#3894c9' }}>ANIMAL QUIZ</Text>
                    <Icon name="paw" size={30} color="#3894c9" style={{ marginLeft: 10 }} />
                </View>

                <InputBox label="Username:" onChangeText={(text) => setName(text)} />

                <TouchableOpacity onPress={() => ToastAndroid.show(`Welcome ${name}`, ToastAndroid.SHORT)}>
                    <Text>{name}</Text>
                    <Text style={{
                        fontSize: 20, fontWeight: 'bold', borderWidth: 1, borderBottomWidth: 10,
                        alignSelf: 'flex-start', paddingHorizontal: 10, backgroundColor: '#00FFFF'
                    }}>
                        Enter
                    </Text>
                </TouchableOpacity>

                <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#3854c9' }}>Welcome to the Animal Quiz!</Text>

                <Text style={{ fontSize: 16, marginTop: 20 }}>Q1-What Insect Is This?</Text>
                <RNPickerSelect
                    onValueChange={handleInsectSelect}
                    items={[
                        { label: 'Bee', value: 'Bee' },
                        { label: 'Fly', value: 'Fly' },
                        { label: 'Spider', value: 'Spider' },
                    ]}
                />

                <Image source={require('./img/bee.jpg')} style={{ width: 420, height: 500, marginTop: 20 }} />

                <Text style={{ fontSize: 16, marginTop: 20 }}>Q2-What Animal Is This?</Text>
                <RNPickerSelect
                    onValueChange={handleAnimalSelect}
                    items={[
                        { label: 'Elephant', value: 'Elephant' },
                        { label: 'Lion', value: 'Lion' },
                        { label: 'Cow', value: 'Cow' },
                    ]}
                />

                <Image source={require('./img/elephant.jpg')} style={{ width: 420, height: 500, marginTop: 20 }} />

                <InputBox label="What type of animal is this?" onChangeText={(text) => setAnitype(text)} />

                <TouchableOpacity onPress={() => {
                    const correctAnswer = 'Mammal';
                    const message = anitype === correctAnswer
                        ? `Congrats ${name}, you got it right! It's a mammal!`
                        : 'Wrong, try again!';

                    ToastAndroid.show(message, ToastAndroid.SHORT);
                }}>
                    <Text style={{
                        fontSize: 20, fontWeight: 'bold', borderWidth: 1,
                        alignSelf: 'flex-start', paddingHorizontal: 10, backgroundColor: '#00FFFF'
                    }}>
                        Submit
                    </Text>
                </TouchableOpacity>

                <Image source={require('./img/tiger.jpg')} style={{ width: 420, height: 500 }} />

            </View>
        </ScrollView>
    );
};

export default MyApp;






