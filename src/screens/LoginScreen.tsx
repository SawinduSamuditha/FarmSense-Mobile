import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

const LoginScreen = ({ navigation, route }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const role = route?.params?.role || "User";

  return (
    <View style={styles.container}>

      <Image source={require("../assets/login.png")} style={styles.logo} />
      <Text style={styles.title}>Farm Sense Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
         
            navigation.replace("Dashboard");
          
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d1fae5" ,//#e6f4ea
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "rgb(157, 225, 182)",
    width: 300,
    padding: 10,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
  },

  button: {
    marginTop: 20,
    backgroundColor: "#4CAF50",
    padding: 15,
    width: 200,
    alignItems: "center",
    borderRadius: 8,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
  },

  text: {
    marginTop: 10,
    color: "#333",
  },

  link: {
    marginTop: 10,
    color: "#007BFF",
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
});

export default LoginScreen;
