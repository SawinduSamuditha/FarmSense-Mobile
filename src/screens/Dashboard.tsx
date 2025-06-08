import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
  StatusBar,
  Image,
} from "react-native";

export default function DashboardScreen({ navigation }: any) {
  const handleUpload = () => {
    Alert.alert("Upload", "Crop image upload triggered.");
  };

  const handleHowItWorks = () => {
    Alert.alert("Info", "This explains how the system works.");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={require("../assets/forest-bg.png")}
        style={styles.background}
        resizeMode="cover"
      >

         {/* Top Bar */}
        <View style={styles.topBar}>
          <Text style={styles.brandName}>FarmSense</Text>

          <View style={styles.profileSection}>
            <TouchableOpacity
            onPress={() => {
              const handleSignOut = () => {
                  Alert.alert("Sign Out", "Are you sure you want to sign out?", [
                    {
                      text: "Cancel",
                      style: "cancel",
                    },
                    {
                      text: "Sign Out",
                      onPress: () => navigation.replace("Login"),
                    },
                  ]);
                };
              handleSignOut();
            }}
            style={styles.signOutButton}>
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                source={require("../assets/user.png")}
                style={styles.profileIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.overlay}>
          <Text style={styles.heading}>
            <Text style={styles.green}>Smart Crop Disease{"\n"}</Text>
            Prediction for Every Farmer
          </Text>

          <Text style={styles.subtext}>
            Empowering Sri Lankan agriculture with AI-driven diagnosis, real-time updates, and field-ready mobile access.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.uploadButton} onPress={() => {
         
            navigation.navigate("Prediction");
            handleUpload();
            }}>
              <Text style={styles.uploadButtonText}>Upload a Crop Image</Text>
              
            </TouchableOpacity>

            <TouchableOpacity style={styles.outlineButton}
            onPress={() => {
              navigation.navigate("ContactUs");
            }}
            >

              <Text style={styles.outlineButtonText}>Contact Us</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 30,
    
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },

  topBar: {
    paddingTop:40,
    paddingBottom: 20,
    backgroundColor: "#004028" ,//#004028
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brandName: {
    fontSize: 22,
    color: "#ffffff",
    fontWeight: "bold",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  signOutButton: {
    marginRight: 10,
    backgroundColor: "#ffffff55",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  signOutText: {
    color: "#fff",
    fontSize: 14,
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#fff",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 80, 40, 0.6)", 
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 16,
  },
  green: {
    color: "#86efac", // Light green highlight
  },
  subtext: {
    fontSize: 16,
    color: "#d1fae5",
    textAlign: "center",
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  uploadButton: {
    backgroundColor: "#22c55e",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    margin: 6,
  },
  uploadButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  outlineButton: {
    borderColor: "#22c55e",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    margin: 6,
  },
  outlineButtonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 14,
  },
});
