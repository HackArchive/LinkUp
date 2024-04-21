import { useEffect, useState } from 'react'
import { Image, Pressable, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { createPosts } from '../utils/posts_api';

export default function CreatePost() {

  const [postContent, setPostContent] = useState('');

  // const [posts, setPosts] = useState<Post[]>([]);
  const walletId = "0xDF2b85e90F4Aa7bDC724dE4aF08B45cDc7458593";
  const prompt = "Web ";

  const CreatePost = async () => {
    try {
      const postsData: Response = await createPosts(walletId, prompt);
      console.log(postsData)
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <View className='absolute top-0 left-0 bg-[#1c1c1c] h-full w-full'>
      <View className='flex flex-row justify-between'>
        <Pressable className='p-2' >
          <Icon name='cross' size={40} color='#ffffff' />
        </Pressable>
        <Pressable className='py-2 px-4 bg-[#f94c83] mx-2 my-2 rounded-[10px]' onPress={CreatePost} disabled={postContent === ''} style={postContent === '' ? { backgroundColor: "#492f37" } : {}}>
          <Text className='text-lg text-white'>Post</Text>
        </Pressable>
      </View>
      <View className='p-4 flex flex-row gap-x-2'>
        <View className="w-14">
          <Image
            source={{
              uri: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1440",
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
