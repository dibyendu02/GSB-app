import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icons from '../../Icons';
import gsbLogo from '../../assets/gsbtransparent.png';
import {useNavigation} from '@react-navigation/native';
import service from '../../assets/service.png';

const ServiceData = [
  {
    question: 'Do you have IBS?',
    answers: ['Yes', 'No'],
  },
  {
    question: 'Which Type Of IBS You Have?',
    answers: ['IBS-C', 'IBS-B', 'IBS-M'],
  },
  {
    question: 'What Are Your Symptoms?',
    answers: [
      'Diarrhea with mucus',
      'Constipation',
      'Excessive gas & bloating',
      'Abdominal',
      'Stress',
      'Anxiety',
      'Overthinking',
      'Irritable',
      'Lack of focus',
      'Disrub sleeping pattern',
      'Weight loss',
    ],
  },
  {
    question: 'How is the environment of your family?',
    answers: ['Stressfull', 'Happy', 'All of Them'],
  },
  {
    question: 'How long have you had this problem?',
    answers: ['6-12 Month', 'More than 1 Year', 'More than 5 Year', 'Other'],
  },
  {
    question: 'Have you taken any treatment have you taken ?',
    answers: ['Allopathy', 'Homeopathic', 'Ayurvedic', 'All'],
  },
  {
    question: 'Which type of test have you taken?',
    answers: [
      'Sonography',
      'Ultrasound',
      'Endoscopy',
      'CBC',
      'LFT',
      'Thyroid profile',
      'KFT',
      'Lipid profile',
    ],
  },
  {
    question: 'How is your lifestyle?',
    answers: ['Alcohol', 'Smoking', 'Bad foods habit', 'All'],
  },
];

const FirstForm = () => {
  const navigation = useNavigation();
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(ServiceData.length).fill(-1),
  ); // Initialize with -1 indicating no selection

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          paddingHorizontal: 16,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icons.AntDesign name="arrowleft" size={25} color={'black'} />
        </TouchableOpacity>
        <Image source={gsbLogo} />
        <TouchableOpacity>
          {/* <Icons.Feather name="shopping-bag" size={25} color={'black'} /> */}
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 20, marginBottom: 20}}>
        {ServiceData.map((item, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.question}>{item.question}</Text>
            <View
              style={{
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#FFA800',
                padding: 10,
              }}>
              {item.answers.map((answer, i) => (
                <TouchableOpacity
                  key={i}
                  style={styles.answer}
                  onPress={() => handleAnswerSelect(index, i)}>
                  <View
                    style={[
                      styles.checkbox,
                      {
                        backgroundColor:
                          selectedAnswers[index] === i
                            ? '#F6AF24'
                            : 'transparent',
                      },
                    ]}
                  />
                  <Text style={styles.answerText}>{answer}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TabNavigator');
          }}
          style={{
            backgroundColor: '#F6AF24',
            padding: 16,
            alignItems: 'center',
            borderRadius: 12,
          }}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 16}}>
            SUMBIT
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FirstForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    color: 'gray',
  },
  answer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  answerText: {
    fontSize: 16,
    color: 'black',
  },
});
