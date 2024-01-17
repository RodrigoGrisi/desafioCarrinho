import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function CardItem({ data, addAmount, removeAmount }) {
  const [amount, setAmount] = useState(data?.amount)


  function handleIncrease() {
    addAmount();
    setAmount(item => item + 1)
  }

  function handleDecrease() {
    removeAmount()

    if (amount === 0) {
      setAmount(0)
      return;
    }

    setAmount(item => item - 1)

  }



  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>R$ {data.total.toFixed(2)}</Text>
      </View>

      <View style={styles.amountContainer}>

        <TouchableOpacity style={styles.buttonAdd} onPress={handleIncrease}>
          <Text style={{ fontSize: 18 }}>+</Text>
        </TouchableOpacity>

        <Text style={styles.amount}>{amount}</Text>

        <TouchableOpacity style={styles.buttonRemove} onPress={handleDecrease}>
          <Text style={{ fontSize: 22 }}>-</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderWidth: 1,
    paddingLeft: 14,
    borderRadius: 5,
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    paddingRight: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 5
  },
  price: {
    fontSize: 16,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  buttonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#168fff',
    width: 22,
    borderRadius: 4,
    height: 30,
    width: 30,
  },
  buttonRemove: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#168fff',
    width: 22,
    borderRadius: 4,
    height: 30,
    width: 30,
  },
  amount: {
    fontSize: 18,
    margin: 10,
  }
})