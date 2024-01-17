import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useContext } from 'react';

import { CartContext } from '../../context/CartContext'
import CardItem from '../../components/CardItem'

export default function Cart() {

  const { cart, addItemCart, removeItemCart, total } = useContext(CartContext)

  return (
    <View style={styles.container}>

      <FlatList
        ListEmptyComponent={() => <Text style={{ textAlign: 'center', fontSize: 18 }}>Você ainda não possui itens em seu carrinho.</Text>}
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CardItem
            data={item}
            addAmount={() => addItemCart(item)}
            removeAmount={() => removeItemCart(item)}
          />
        )}
        ListFooterComponent={() => <Text style={{
          fontSize: 18, fontWeight: 'bold', marginBottom: 24
        }}> Total R$ {total.toFixed(2)} </Text>}
      />

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingStart: 14,
    paddingTop: 14,
    paddingEnd: 14,
  }
})