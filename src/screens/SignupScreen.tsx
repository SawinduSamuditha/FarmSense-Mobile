import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const SignupScreen = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.text}>
          Already have an account?<Text style={styles.link}> Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    width: 300,
    padding: 10,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
  },

  button: {
    backgroundColor: "#28A745",
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
});

export default SignupScreen;
