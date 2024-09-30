import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Screen01({ navigation }) {
  const [rating, setRating] = useState(0);

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <TouchableOpacity key={i + 1} onPress={() => setRating(i + 1)}>
        <Icon
          name={i + 1 <= rating ? 'star' : 'star-o'}
          size={25}
          color="#E0E41A"
          style={styles.star}
        />
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/vs_blue.png')} style={styles.productImage} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.session}>
          <Text style={styles.nameProduct}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          <View style={[styles.row, styles.spaceBetween]}>
            <View style={styles.starsContainer}>{renderStars()}</View>
            <Text style={styles.reviewText}>(Xem 828 đánh giá)</Text>
          </View>
          <View style={[styles.row, styles.paddingVertical]}>
            <Text style={styles.price}>1.790.000 đ</Text>
            <Text style={styles.oldPrice}>1.790.000 đ</Text>
          </View>
          <View style={[styles.row, styles.paddingVertical]}>
            <Text style={styles.priceGuarantee}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <AntDesign name="questioncircleo" size={20} color="black" />
          </View>
          <View style={styles.centered}>
            <TouchableOpacity
              style={styles.colorButton}
              onPress={() => navigation.navigate('ColorSelectionScreen')}
            >
              <Text style={styles.nameProduct}>4 MÀU-CHỌN MÀU</Text>
              <AntDesign name="right" size={10} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.centered}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>CHỌN MUA</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
  },
  session: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  productImage: {
    width: 300,
    height: '100%',
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  paddingVertical: {
    paddingVertical: 5,
  },
  nameProduct: {
    fontSize: 15,
    fontWeight: '400',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    paddingRight: 50,
  },
  oldPrice: {
    fontSize: 15,
    textDecorationLine: 'line-through',
    color: 'rgba(0, 0, 0, 0.58)',
    fontWeight: '700',
  },
  priceGuarantee: {
    fontSize: 12,
    color: '#FA0000',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingRight: 10,
  },
  colorButton: {
    borderRadius: 10,
    borderColor: 'hsla(0, 0%, 0%, 0.46)',
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 34,
    width: '90%',
  },
  button: {
    backgroundColor: '#EE0A0A',
    height: 44,
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
  },
  textButton: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: '#F9F2F2',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  star: {
    marginHorizontal: 3,
  },
  reviewText: {
    fontSize: 15,
    fontWeight: '400',
  },
  centered: {
    alignItems: 'center',
    marginBottom: 10,
  },
});
