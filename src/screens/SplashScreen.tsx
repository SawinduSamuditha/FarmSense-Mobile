import React, {useEffect } from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'


const SplashScreen = ({ navigation } : any) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }
    , 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.text}>Smart Crop Disease Prediction and Monitoring System</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#e6f4ea"
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },

  text: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold'
  }

});

export default SplashScreen