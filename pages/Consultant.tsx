import {
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icons from '../Icons';
import gsbLogo from '../assets/gsbtransparent.png';
import {useNavigation} from '@react-navigation/native';

const Consultant = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted!', formData);
    alert('We will get back to you soon');
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons.AntDesign name="arrowleft" size={25} color={'black'} />
          </TouchableOpacity>
          <Image source={gsbLogo} />
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Icons.Feather name="shopping-bag" size={25} color={'black'} />
          </TouchableOpacity>
        </View>

        <View style={styles.Inputcontainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>CONSULTANT</Text>
            <Text style={styles.subtitle}>
              Consult from our top doctors and certified members who help you on
              your journey of GSB.
            </Text>
          </View>

          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            value={formData.firstName}
            placeholderTextColor={'black'}
            onChangeText={text => handleChange('firstName', text)}
          />

          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Last Name"
            value={formData.lastName}
            placeholderTextColor={'black'}
            onChangeText={text => handleChange('lastName', text)}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={formData.email}
            placeholderTextColor={'black'}
            onChangeText={text => handleChange('email', text)}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Phone Number"
            placeholderTextColor={'black'}
            value={formData.phoneNumber}
            onChangeText={text => handleChange('phoneNumber', text)}
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.input, {height: 100, textAlignVertical: 'top'}]}
            placeholder="Enter Message"
            placeholderTextColor={'black'}
            value={formData.message}
            onChangeText={text => handleChange('message', text)}
            multiline
          />

          <Text style={styles.infoText}>
            We will connect with you within 24hrs or call us.
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Consultant;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 16,
  },
  Inputcontainer: {
    padding: 20,
    color: 'black',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginVertical: 10,
  },
  subtitle: {
    textAlign: 'center',
    width: '60%',
    color: 'black',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 7,
    color: 'black',
  },
  infoText: {
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#F6AF24',
    borderRadius: 5,
    paddingVertical: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
