import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const ChatSupportScreen = () => {
  const [messages, setMessages] = useState([
    { id: '1',
      text: 'Hello! How can we help you today with your crops?',
      type: 'bot' ,
      timestamp: new Date().toLocaleString(), },
  ]);
  const [inputText, setInputText] = useState('');
  const [image, setImage] = useState(null);

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      id: Date.now().toString(),
      text: inputText,
      type: 'user',
      timestamp: new Date().toLocaleString(),
    };
    setMessages([...messages, newMessage]);
    setInputText('');
  };

  const handleImagePick = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0].uri);
        const newMessage = {
          id: Date.now().toString(),
          text: 'Image uploaded!',
          image: response.assets[0].uri,
          type: 'user',
          timestamp: new Date().toLocaleString(),
        };
        setMessages([...messages, newMessage]);
      }
    });
  };

  const handleCameraLaunch = () => {
    launchCamera({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0].uri);
        const newMessage = {
          id: Date.now().toString(),
          text: 'Photo captured!',
          image: response.assets[0].uri,
          type: 'user',
          timestamp: new Date().toLocaleString(),
        };
        setMessages([...messages, newMessage]);
      }
    });
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageBubble,
        item.type === 'bot' ? styles.botMessage : styles.userMessage,
      ]}
    >
      {item.image && (
        <Image source={{ uri: item.image }} style={styles.messageImage} />
      )}
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🌿 Farm Sense Chat Support</Text>

      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.chatArea}
      />

      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={handleImagePick} style={styles.iconButton}>
          <Text>📁</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCameraLaunch} style={styles.iconButton}>
          <Text>📷</Text>
        </TouchableOpacity>

        

        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={{ color: '#fff' }}>Give Prediction   ➤</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        FarmSense support team available 24/7{"\n"}
        Average response time: 15–30 minutes during business hours
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    flex: 1,
    backgroundColor: '#0b0f14',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  header: {
    fontSize: 20,
    color: '#57ef7e',
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  chatArea: {
    flex: 1,
    marginBottom: 10,
  },
  messageBubble: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  botMessage: {
    backgroundColor: '#1f2a36',
    alignSelf: 'flex-start',
  },
  userMessage: {
    backgroundColor: '#2e8b57',
    alignSelf: 'flex-end',
  },
  messageText: {
    color: '#fff',
  },
  messageImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 5,
  },
  inputContainer: {
    
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#333',
    paddingTop: 20,
    paddingBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#1f2a36',
    color: '#fff',
    paddingHorizontal: 10,
    borderRadius: 20,
    height: 40,
    marginHorizontal: 5,
  },
  sendButton: {
    marginLeft: 5,
    backgroundColor: '#1db954',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
  },
  iconButton: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: '#1f2a36',
    borderRadius: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  footer: {
    textAlign: 'center',
    color: '#888',
    fontSize: 12,
    marginBottom: 5,
  },

  timestamp: {
  color: '#aaa',
  fontSize: 10,
  marginTop: 4,
  textAlign: 'right',
},

});

export default ChatSupportScreen;
