import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Linking,
  Image,
} from "react-native";

export default function ContactUsScreen({ navigation }: any) {
  const handleCallPress = () => {
    Linking.openURL("tel:+94112223333");
  };

  const handleEmailPress = () => {
    Linking.openURL("mailto:help@Farmsense.com");
  };

  const handleLocationPress = () => {
    Linking.openURL("https://www.google.com/maps/place/No.+12,+Yakkala+Road,+Gampaha,+Sri+Lanka");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Home</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Contact Us</Text>

      <Text style={styles.description}>
        Have questions or need support? Reach out to the FarmSense team!
      </Text>

      
      
        <TouchableOpacity style={styles.card} onPress={handleCallPress}>
          <View style={styles.iconCircle}>
            <Text style={styles.iconText}>📞</Text>
          </View>
          <Text style={styles.cardTitle}>Call us</Text>
          <Text style={styles.cardInfo}>Our team is on the line</Text>
          <Text style={styles.cardHours}>Mon–Fri • 9–17</Text>
        </TouchableOpacity>

      
        <TouchableOpacity style={styles.card} onPress={handleEmailPress}>
          <View style={styles.iconCircle}>
            <Text style={styles.iconText}>📧</Text>
          </View>
          <Text style={styles.cardTitle}>Email us</Text>
          <Text style={styles.cardInfo}>Our team is online</Text>
          <Text style={styles.cardHours}>Mon–Fri • 9–17</Text>
        </TouchableOpacity>

      
        <TouchableOpacity style={styles.card} onPress={handleLocationPress}>
          <View style={styles.iconCircle}>
            <Text style={styles.iconText}>📍</Text>
          </View>
          <Text style={styles.cardTitle}>Visit us</Text>
          <Text style={styles.cardInfo}>FarmSense Head Office</Text>
          <Text style={styles.cardInfo}>No. 12, Yakkala Road , Gampaha, Sri Lanka</Text>
          <Text style={styles.cardHours}>Mon–Fri • 9–17</Text>
        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d1fae5", //#d1fae5
    padding: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    color: "#4b5563",
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 12,
  },
  description: {
    fontSize: 20,
    color: "#374151",
    marginBottom: 24,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    marginVertical: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  iconText: {
    fontSize: 20,
    color: "#fff",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 4,
  },
  cardInfo: {
    fontSize: 13,
    color: "#6b7280",
  },
  cardHours: {
    fontSize: 13,
    color: "#6b7280",
  },

  
  locationCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    marginVertical: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});
