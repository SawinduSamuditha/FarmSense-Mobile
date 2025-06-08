import React from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert, TouchableOpacity, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { launchImageLibrary } from "react-native-image-picker";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(5, { message: "Name must be at least 5 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  address: z.string().min(20, { message: "Address must be at least 20 characters" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 characters" }),
  plants: z.string().min(5, { message: "Plant name must be at least 5 characters" }),
});

export default function ProfileScreen({ navigation }: any) {

  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleImageUpload = () => {
    launchImageLibrary(
      { mediaType: "photo", quality: 0.8 },
      (response) => {
        if (response.didCancel) {
          console.log("User cancelled image picker");
        } else if (response.errorCode) {
          Alert.alert("Image Picker Error", response.errorMessage || "Something went wrong");
        } else if (response.assets && response.assets.length > 0) {
          setImageUri(response.assets[0].uri || null);
        }
      }
    );
  };

  

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      plants: "",
    },
  });

  const onSubmit = (data: any) => {
    Alert.alert("Profile Updated", JSON.stringify(data, null, 2));
    console.log("Form Data:", data);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Farm Sense Profile</Text>
      <Text style={styles.subtitle}>Manage your personal information and preferences</Text>

      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image
          source={require("../assets/user.png")}
          style={styles.profileImage}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
          <Text style={styles.uploadButtonText}>Update Image</Text>
        </TouchableOpacity>
      </View>

      {/* Form Fields */}
      <View style={styles.formField}>
        <Text style={styles.label}>Full Name</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.name && styles.inputError]}
              placeholder="Enter your full name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
      </View>

      <View style={styles.formField}>
        <Text style={styles.label}>Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
      </View>

      <View style={styles.formField}>
        <Text style={styles.label}>Phone Number</Text>
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.phone && styles.inputError]}
              placeholder="Enter your phone number"
              keyboardType="phone-pad"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.phone && <Text style={styles.errorText}>{errors.phone.message}</Text>}
      </View>

      <View style={styles.formField}>
        <Text style={styles.label}>Your Plants</Text>
        <Controller
          control={control}
          name="plants"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.plants && styles.inputError]}
              placeholder="Tomato, Chili, Banana"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Text style={styles.description}>Separate plant names with commas</Text>
        {errors.plants && <Text style={styles.errorText}>{errors.plants.message}</Text>}
      </View>

      <View style={styles.formField}>
        <Text style={styles.label}>Address</Text>
        <Controller
          control={control}
          name="address"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, styles.textArea, errors.address && styles.inputError]}
              placeholder="Enter your full address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              multiline
              numberOfLines={4}
            />
          )}
        />
        {errors.address && <Text style={styles.errorText}>{errors.address.message}</Text>}
      </View>

      <View style={styles.submitButton}>
        <Button title="Update Profile" onPress={handleSubmit(onSubmit)} color="#22c55e" />
      </View>

      <Text style={styles.footerText}>
        Your information is securely stored and only used to improve your FarmSense experience
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    padding: 20,
    backgroundColor: "#d1fae5", //#e6f4ea
    flexGrow: 1,
    paddingBottom: 220,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#166534",
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#22543d",
    textAlign: "center",
    marginBottom: 20,
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#a7f3d0",
  },
  uploadButton: {
    marginTop: 10,
    backgroundColor: "#22c55e",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  uploadButtonText: {
    color: "white",
    fontWeight: "600",
  },
  formField: {
    marginBottom: 18,
  },
  label: {
    fontSize: 16,
    color: "#166534",
    marginBottom: 6,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "rgb(157, 225, 182)", //#f0fdf4
    borderColor: "#22c55e",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  textArea: {
    height: 90,
    textAlignVertical: "top",
  },
  inputError: {
    borderColor: "#dc2626",
  },
  errorText: {
    color: "#b91c1c",
    marginTop: 4,
  },
  description: {
    fontSize: 12,
    color: "#22543d",
    marginTop: 4,
  },
  submitButton: {
    marginTop: 20,
    
  },
  footerText: {
    marginTop: 40,
    fontSize: 12,
    color: "#166534aa",
    textAlign: "center",
  },
});

