import React, { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { createPosts } from '../utils/posts_api';

export default function CreatePost() {
  const [postContent, setPostContent] = useState('');

  const walletId = "0xDF2b85e90F4Aa7bDC724dE4aF08B45cDc7458593";
  const prompt = "I was in london, saw london bridge.";

  const fetchPosts = async () => {
    try {
      await createPosts(walletId, prompt);
      // Clear input after successful post
      setPostContent('');
      // You might want to do something else after posting, like showing a success message or navigating back
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#1c1c1c' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
        <Pressable onPress={() => {}} style={{ padding: 10 }}>
          <Icon name='cross' size={40} color='#ffffff' />
        </Pressable>
        <Pressable
          onPress={fetchPosts}
          disabled={postContent.trim() === ''}
          style={{
            backgroundColor: postContent.trim() === '' ? '#492f37' : '#f94c83',
            paddingVertical: 10,
            paddingHorizontal: 20,
            margin: 10,
            borderRadius: 10,
          }}>
          <Text style={{ fontSize: 20, color: '#ffffff' }}>Post</Text>
        </Pressable>
      </View>
      <View style={{ paddingHorizontal: 10, paddingVertical: 20, flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ width: 50, height: 50, borderRadius: 10 }}>
          <Image
            source={{
              uri: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1440",
            }}
            style={{ width: 50, height: 50, borderRadius: 10 }}
          />
        </View>
        <TextInput
          style={{ flex: 1, color: 'white', fontSize: 20, paddingHorizontal: 10 }}
          placeholderTextColor='#4c4c4c'
          placeholder='Whats on your mind?'
          multiline
          onChangeText={setPostContent}
          value={postContent}
        />
      </View>
    </View>
  );
}
