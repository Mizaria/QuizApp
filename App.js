import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid, ScrollView, Image, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome6';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    userContainer: {
        marginBottom: 20,
    },
    usertext: {
        color: 'cyan',
        fontSize: 16,
        marginBottom: 5,
    },
    username: {
        borderWidth: 1,
        borderColor: 'cyan',
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'white',
    },
    button: {
        alignSelf: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: 'cyan',
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    questionText: {
        fontSize: 18,
        color: 'cyan',
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: 300,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10,
    },
    questionContainer: {
        backgroundColor: '#282846',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
    },
});

const questions = [
    {
        image: require('./img/bee.jpg'),
        options: [
            { label: 'Bee', value: 'Bee' },
            { label: 'Fly', value: 'Fly' },
            { label: 'Spider', value: 'Spider' },
        ],
        correctAnswer: 'Bee',
    },
    {
        image: require('./img/elephant.jpg'),
        options: [
            { label: 'Elephant', value: 'Elephant' },
            { label: 'Lion', value: 'Lion' },
            { label: 'Cow', value: 'Cow' },
        ],
        correctAnswer: 'Elephant',
    },
    {
        image: require('./img/tiger.jpg'),
        options: [
            { label: 'Mammal', value: 'Mammal' },
            { label: 'Reptile', value: 'Reptile' },
            { label: 'Bird', value: 'Bird' },
        ],
        correctAnswer: 'Mammal',
    },
];

const MyApp = () => {
    const [name, setName] = useState('');
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));

    const handleAnswerChange = (value, index) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value;
        setAnswers(updatedAnswers);

        const isCorrect = questions[index].correctAnswer === value;
        const message = isCorrect
            ? `Congrats ${name}, you got it right!`
            : 'Not Even Close, Try again!';
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };

    const handleFinalSubmit = () => {
        const correctCount = answers.filter(
            (answer, index) => answer === questions[index].correctAnswer
        ).length;
        ToastAndroid.show(`You got ${correctCount} out of ${questions.length} correct!`, ToastAndroid.LONG);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.top}>
                <Icon name="paw" size={30} color="cyan" style={{ marginRight: 10 }} />
                <Text style={styles.title}>ANIMAL QUIZ</Text>
                <Icon name="paw" size={30} color="cyan" style={{ marginLeft: 10 }} />
            </View>


            <View style={styles.userContainer}>
                <Text style={styles.usertext}>Username:</Text>
                <TextInput
                    style={styles.username}
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
            </View>


            <TouchableOpacity
                onPress={() => ToastAndroid.show(`Welcome ${name}`, ToastAndroid.SHORT)}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Enter</Text>
            </TouchableOpacity>


            <Text style={styles.questionText}>Welcome to the Animal Quiz!</Text>

            {questions.map((question, index) => (
                <View key={index} style={styles.questionContainer}>
                    <Image source={question.image} style={styles.image} />
                    <Text style={styles.questionText}>What animal is this?</Text>
                    <RNPickerSelect
                        onValueChange={(value) => handleAnswerChange(value, index)}
                        items={question.options}
                        value={answers[index]}
                        style={{ inputIOS: { color: 'white' }, inputAndroid: { color: 'white' } }}
                    />
                </View>
            ))}


            <TouchableOpacity style={styles.button} onPress={handleFinalSubmit}>
                <Text style={styles.buttonText}>Final Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default MyApp;










