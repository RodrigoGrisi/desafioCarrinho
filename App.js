import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Routes from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import CartProvider from './src/context/CartContext'


export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar backgroundColor='#fafafa' barStyle="dark-content" />
        <Routes />
      </CartProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
