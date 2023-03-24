import { Text, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';

export function Test2() {
    const imgFiga = "https://images.unsplash.com/photo-1679581858563-3c808d23f0fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
    return (
        <View style={styles.container}>
            <Text>RINO</Text>
            <Image style={styles.image} blurRadius={10} source={imgFiga} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: "purple",
      borderColor: 'red',
      borderWidth: 10
    },
    image: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0553',
        opacity: 0.5,
      },
  });