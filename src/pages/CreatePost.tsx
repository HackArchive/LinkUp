import { useState } from 'react'
import { Image, Pressable, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

export default function CreatePost() {

  const [postContent, setPostContent] = useState('');

  return (
    <View className='absolute top-0 left-0 bg-[#1c1c1c] h-full w-full'>
      <View className='flex flex-row justify-between'>
        <Pressable className='p-2' >
          <Icon name='cross' size={40} color='#ffffff' />
        </Pressable>
        <Pressable className='py-2 px-4 bg-[#f94c83] mx-2 my-2 rounded-[10px]' disabled={postContent === ''} style={postContent === '' ? { backgroundColor: "#492f37" } : {}}>
          <Text className='text-lg text-white'>Post</Text>
        </Pressable>
      </View>
      <View className='p-4 flex flex-row gap-x-2'>
        <View className="w-14">
          <Image
            source={{
              uri: "https://pbs.twimg.com/profile_images/1699481797158121472/Q0Cefxy8_400x400.jpg",
            }}
            style={{ width: 50, height: 50, borderRadius: 10 }}
            width={50}
            height={50}
          />
        </View>
        <TextInput className='text-white text-[20px] px-2 w-[65vw]'
          placeholderTextColor='#4c4c4c' placeholder='Whats on your mind?' multiline
          onChangeText={setPostContent}
          value={postContent}
        ></TextInput>
      </View>
    </View>
  )
}
