import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../Pages/Home'
import Cart from '../Pages/Cart'

function Routes() {

  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator>
        <Stack.Screen name='Home'
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='Cart'
          component={Cart}
          options={{
            headerTitle: 'Meu carrinho'
          }}
        />
      </Stack.Navigator>
  )
}

export default Routes