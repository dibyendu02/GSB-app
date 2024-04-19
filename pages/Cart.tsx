import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icons from '../Icons';
import gsbLogo from '../assets/gsbtransparent.png';
import {useNavigation} from '@react-navigation/native';
import supplement from '../assets/supplement.png';

const CartData = [
  {
    title: 'GSB Anti Diarrhoeal',
    price: 900,
    image: supplement,
  },
  {
    title: 'GSB Anti Diarrhoeal',
    price: 900,
    image: supplement,
  },
];

const Cart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icons.AntDesign name="arrowleft" size={25} color={'black'} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, color: 'black', fontWeight: '800'}}>
          Cart
        </Text>
        <Image source={gsbLogo} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 20}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 20,
            flexWrap: 'wrap',
            width: '100%',
            justifyContent: 'space-between',
            // paddingLeft: 10,
            marginTop: 20,
            // backgroundColor: 'red',
            marginBottom: 20,
          }}>
          {CartData.map((item, index) => (
            <View
              key={index}
              style={{
                width: '100%',
                flexDirection: 'row',
                backgroundColor: 'white',
                borderRadius: 12,
                borderWidth: 1,
                borderColor: '#FFA800',
                padding: 10,
                elevation: 15, // Increase elevation for thicker shadow
                shadowColor: '#FFA800', // Shadow color
                shadowOffset: {
                  width: 0,
                  height: 10, // Increase height for thicker shadow
                },
                shadowOpacity: 0.5,
                shadowRadius: 10, // Increase radius for thicker shadow
                marginBottom: 20,
              }}>
              <View
                style={{
                  height: 120,
                  width: '30%',
                  alignItems: 'center',
                  //   backgroundColor: 'white',
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: '#FFA800',
                  // marginTop: 15,
                  paddingHorizontal: 10,
                }}>
                <Image
                  source={item.image}
                  style={{height: '100%', width: '100%', borderRadius: 18}}
                />
              </View>
              <View style={{padding: 10, width: '80%'}}>
                <Text style={{fontSize: 18, fontWeight: '400', color: 'black'}}>
                  {item.title}
                </Text>
                <Text style={{color: 'black', fontWeight: '600'}}>
                  INR {item.price}.00
                </Text>
                <TouchableOpacity
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center',
                    width: 70,
                    // backgroundColor: 'black',
                  }}>
                  <Icons.AntDesign
                    name="upcircleo"
                    color={'#FFA800'}
                    size={18}
                  />
                  <Text style={{color: '#FFA800', fontSize: 16}}>1</Text>
                  <Icons.AntDesign
                    name="downcircleo"
                    color={'#FFA800'}
                    size={18}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <View
          style={{
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#FFA800',
            height: 120,
            padding: 12,
            marginBottom: 20,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
              Delivery Address
            </Text>
            <Icons.AntDesign name="right" size={16} color={'black'} />
          </View>
        </View>
        <View
          style={{
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#FFA800',
            height: 120,
            padding: 12,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
              Payment Method
            </Text>
            <Icons.AntDesign name="right" size={16} color={'black'} />
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
            Order Info
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'gray'}}>Subtotal</Text>
            <Text style={{color: 'black'}}>INR 1800</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'gray'}}>Shipping Cost</Text>
            <Text style={{color: 'black'}}>INR 0</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'gray'}}>Total</Text>
            <Text style={{color: 'black'}}>INR 1800</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CHECKOUT</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // marginBottom: 40,
  },
  button: {
    backgroundColor: '#F6AF24',
    borderRadius: 5,
    paddingVertical: 12,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
