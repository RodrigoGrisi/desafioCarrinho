import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Product({ data, addToCart }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>R$ {data.price}</Text>
      </View>
      <TouchableOpacity style={styles.ButtonAdd} onPress={addToCart}>
        <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}> + </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#DFDFDF',
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 16
  },
  ButtonAdd: {
    backgroundColor: '#168fff',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  }
})