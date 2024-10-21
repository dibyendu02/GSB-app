import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient
import heroImage from '../assets/home/hero.png';
import CatImg1 from '../assets/home/cat1.png';
import CatImg2 from '../assets/home/cat2.png';
import CatImg3 from '../assets/home/cat3.png';
import CatImg4 from '../assets/home/cat4.png';
import CatImg5 from '../assets/home/cat5.png';
import CatImg6 from '../assets/home/cat6.png';
import inner1 from '../assets/home/innerpeace1.png';
import inner2 from '../assets/home/innerpeace2.png';
import inner3 from '../assets/home/innerpeace3.png';
import consultant1 from '../assets/home/consultant1.png';
import consultant2 from '../assets/home/consultant2.png';
import success1 from '../assets/home/success1.png';
import success2 from '../assets/home/success2.png';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icons from '../Icons';
import {useNavigation} from '@react-navigation/native';

const Categories = [
  {
    title: 'GSB Pathy Services',
    image: CatImg1,
    link: 'Services',
  },
  {
    title: 'Consultant',
    image: CatImg2,
    link: 'Consultant',
  },
  {
    title: 'Supplements',
    image: CatImg3,
    link: 'Supplement',
  },
  {
    title: 'Fitness',
    image: CatImg4,
    link: 'Fitness',
  },
  {
    title: 'Astrology',
    image: CatImg5,
    link: '',
  },
  {
    title: 'Horrorscope',
    image: CatImg6,
    link: '',
  },
];

const Innerpeace = [
  {
    name: 'Meditation',
    excerise: 11,
    time: 32,
    image: inner1,
  },
  {
    name: 'Education',
    excerise: 12,
    time: 40,
    image: inner2,
  },
  {
    name: 'Diet',
    excerise: 14,
    time: 20,
    image: inner3,
  },
];

const consultant = [
  {
    title: 'Consultant 1',
    desc: 'Get best consultant and guide through your life and develop a cheerful life.',
    image: consultant1,
  },
  {
    title: 'Consultant 2',
    desc: 'Get best consultant and guide through your life and develop a cheerful life.',
    image: consultant2,
  },
];

const Success = [
  {
    title: 'Story of Gurpreet Singh Batra',
    desc: 'Injured and Depression to Founder of GSBPATHY',
    image: success1,
  },
  {
    title: 'Fitness is key of Success',
    desc: 'Injured and Depression to Founder of GSBPATHY',
    image: success2,
  },
];

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          // backgroundColor: 'red',
          flexDirection: 'row',
          paddingHorizontal: 10,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProfileInfo');
          }}
          style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Text style={{fontWeight: '500', color: 'black'}}>Hi, Name</Text>
          <Icons.MaterialCommunityIcons
            name="account"
            size={30}
            color={'black'}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: '100%', backgroundColor: 'white'}}>
        <View style={styles.heroContainer}>
          <View style={{width: '60%'}}>
            <Text style={{fontWeight: '600', color: 'black', fontSize: 18}}>
              Full Body Workout Training
            </Text>
            <Text style={{color: 'black', marginTop: 5}}>
              Lorem ipsum dolor sit amet consectetur
            </Text>
          </View>

          <LinearGradient // Add LinearGradient component
            colors={['transparent', '#FFA800']} // Gradient colors
            locations={[0.6, 1]} // Gradient locations
            start={{x: 0, y: 0.5}} // Start point (left)
            end={{x: 1, y: 0.5}} // End point (right)
            style={styles.gradient}
          />
          <View // Move the Image inside LinearGradient to ensure it's on top
            style={{
              position: 'absolute',
              top: '-36%',
              right: 0,
              paddingRight: 5,
            }}>
            <Image source={heroImage} />
          </View>
        </View>

        <View style={styles.categoryContainer}>
          <Text style={{fontSize: 20, fontWeight: '800', color: 'black'}}>
            Categories
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              flexWrap: 'wrap',
              width: '100%',
              justifyContent: 'space-between',
              // paddingLeft: 10,
              marginTop: 20,
              // backgroundColor: 'red',
            }}>
            {Categories.map((category, index) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(`${category.link}`);
                }}
                key={index}
                style={{width: '30%', alignItems: 'center'}}>
                <Image source={category.image} />
                <Text style={{color: 'black', fontSize: 15, fontWeight: '800'}}>
                  {category.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Inner peace */}
        <View style={styles.categoryContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: '800', color: 'black'}}>
              INNERPEACE
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 16, color: '#FFA800'}}>View All</Text>
              <MaterialIcons name="navigate-next" size={25} color={'#FFA800'} />
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              flexWrap: 'wrap',
              width: '100%',
              justifyContent: 'space-between',
              // paddingLeft: 10,
              marginTop: 20,
              // backgroundColor: 'red',
              marginBottom: 20,
            }}>
            {Innerpeace.map((item, index) => (
              <View
                key={index}
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: '',
                  backgroundColor: '#ffe6c6',
                  borderRadius: 12,
                  // padding: 10,
                }}>
                <View style={{padding: 20}}>
                  <Text
                    style={{fontSize: 20, fontWeight: '600', color: 'black'}}>
                    {item.name}
                  </Text>
                  <Text style={{color: 'black'}}>
                    {item.excerise} Exercises | {item.time} minutes{' '}
                  </Text>
                  <View style={{flexDirection: 'row', gap: 10, marginTop: 15}}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'white',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        borderRadius: 15,
                      }}
                      onPress={() => {
                        navigation.navigate(`${item.name}`);
                      }}>
                      {item.name === 'Diet' ? (
                        <Text style={{color: '#FFA800'}}>view more</Text>
                      ) : (
                        <Text style={{color: '#FFA800'}}>watch now</Text>
                      )}
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'white',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        borderRadius: 15,
                      }}
                      onPress={() => {
                        navigation.navigate('Subscription');
                      }}>
                      <Text style={{color: '#FFA800'}}>subscribe</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    height: 100,
                    width: 120,
                    alignItems: 'center',
                    //   backgroundColor: 'white',
                    marginTop: 15,
                  }}>
                  <Image
                    source={item.image}
                    style={{height: '100%', width: '100%'}}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
        {/* consultant  */}
        <View style={styles.categoryContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: '800', color: 'black'}}>
              CONSULTANT
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 16, color: '#FFA800'}}>View All</Text>
              <MaterialIcons name="navigate-next" size={25} color={'#FFA800'} />
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              flexWrap: 'wrap',
              width: '100%',
              justifyContent: 'space-between',
              // paddingLeft: 10,
              marginTop: 20,
              // backgroundColor: 'red',
              marginBottom: 20,
            }}>
            {consultant.map((item, index) => (
              <View
                key={index}
                style={{
                  width: '100%',
                  // flexDirection: 'row',
                  // justifyContent: '',
                  backgroundColor: '#ffe6c6',
                  borderRadius: 12,
                  // padding: 10,
                }}>
                <View
                  style={{
                    height: 220,
                    width: '100%',
                    alignItems: 'center',
                    //   backgroundColor: 'white',
                    marginTop: 15,
                    padding: 20,
                  }}>
                  <Image
                    source={item.image}
                    style={{height: '100%', width: '100%', borderRadius: 16}}
                  />
                </View>
                <View style={{padding: 20}}>
                  <Text
                    style={{fontSize: 20, fontWeight: '600', color: 'black'}}>
                    {item.title}
                  </Text>
                  <Text style={{color: 'black'}}>{item.desc}</Text>
                  <View style={{flexDirection: 'row', gap: 10, marginTop: 15}}>
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        gap: 10,
                        alignItems: 'center',
                      }}>
                      <Icons.AntDesign name="play" color={'red'} size={18} />
                      <Text style={{color: '#FFA800', fontSize: 16}}>
                        Watch Video
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* succes stories */}
        <View style={styles.categoryContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: '800', color: 'black'}}>
              SUCCESS STORIES
            </Text>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center', gap: 5}}
              onPress={() => {
                navigation.navigate('MySuccessStories');
              }}>
              <Text style={{color: '#FFA800'}}>View More</Text>
              <Icons.Entypo name="chevron-right" color={'#FFA800'} size={20} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 10,
              flexWrap: 'wrap',
              width: '100%',
              justifyContent: 'space-between',
              // paddingLeft: 10,
              marginTop: 20,
              // backgroundColor: 'red',
              marginBottom: 20,
            }}>
            {Success.map((item, index) => (
              <View
                key={index}
                style={{
                  width: '100%',
                  // flexDirection: 'row',
                  // justifyContent: '',
                  // backgroundColor: '#ffe6c6',
                  borderRadius: 12,
                  // padding: 10,
                }}>
                <View
                  style={{
                    height: 220,
                    width: '100%',
                    alignItems: 'center',
                    //   backgroundColor: 'white',
                    marginTop: 15,
                    //   padding: 20,
                  }}>
                  <Image
                    source={item.image}
                    style={{height: '100%', width: '100%', borderRadius: 16}}
                  />
                </View>
                <View style={{marginTop: 20}}>
                  <Text
                    style={{fontSize: 20, fontWeight: '600', color: 'black'}}>
                    {item.title}
                  </Text>
                  <Text style={{color: 'black'}}>{item.desc}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  heroContainer: {
    width: '85%',
    height: 120,
    borderColor: '#FFA800',
    borderWidth: 1,
    borderRadius: 18,
    padding: 10,
    marginLeft: 28,
    marginTop: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  categoryContainer: {
    width: '85%',
    marginLeft: 28,
    marginTop: 20,
  },
  gradient: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '100%', // Adjust width to cover 20% of the container
    borderRadius: 18, // Ensure the gradient matches the container's border radius
  },
});
