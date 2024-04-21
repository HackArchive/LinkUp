import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import { twMerge } from "tailwind-merge";
import {
  MessageCircle,
  Heart,
  Share2,
} from "lucide-react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CreatePost from "./CreatePost";
import { getAllPosts } from "../utils/posts_api";

export default  function Home() { 
  const [ createPostVisible, setCreatePostVisible ] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData: Response = await getAllPosts();
        setPosts(postsData.user);
        console.log(posts)
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <View className="bg-[#1c1c1c] text-white">

      <View className="flex flex-row items-center justify-between w-full px-4 bg-gradient-to-br from-white to-[#1c1c1c]">
        <Text className="font-[Billa-Bong] text-3xl my-4 text-white">
          Pixel<Text className="text-pink-500">Pulse</Text>
        </Text>
        <Pressable className="w-12 py-2 ml-auto">
          <Image
            source={{
              uri: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1440",
            }}
            style={{ width: 40, height: 40, borderRadius: 5 }}
            width={40}
            height={40}
          />
        </Pressable>

      </View>
      <ScrollView>
        <View className="flex flex-col gap-y-2 py-2">
          {posts.reverse().map((i,index) => (
            <View key={i.id}>
              <View className="flex flex-row gap-2 px-4 py-4 rounded-[25px] mx-4" style={{
                shadowColor: '#ffffff',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 1,
                shadowRadius: 3,
              }}>
                <View className="flex-1 flex flex-col w-[60vw]">
                  <View className="flex flex-row">
                    <View className="w-14">
                      <Image
                        source={{
                          uri: i.user.profile_pic,
                        }}
                        style={{ width: 50, height: 50, borderRadius: 10 }}
                        width={50}
                        height={50}
                      />
                    </View>
                    <View className="flex flex-col text-start gap-x-2 items-start">
                      <Text className="font-bold text-lg text-white">{i.user.name}</Text>
                      <Text className="text-gray-500 text-sm"></Text>
                    </View>
                  </View>
                  <View className="h-4"></View>

                  <Text className="break-words text-white text-base  w-[80vw]">
                    {i.prompt}
                  </Text>

                  <View className="h-2.5"></View>

                  <Image
                    source={{
                      uri: i.imageURL,
                    }}
                    height={250}
                    className="rounded-xl object-cover w-[80vw]"
                  />

                  <View className="h-3"></View>

                  <View className="flex flex-row gap-2 justify-between w-[80vw]">
                    <Heart color="gray" size={20} />
                    <MessageCircle color="gray" size={20} />
                    <Share2 color="gray" size={20} />
                  </View>
                </View>
              </View>

              <View className="h-[0px] my-4 border-b border-[#2b2b2b]"></View>
            </View>
          ))}
        </View>
      </ScrollView>
      {/* <TouchableOpacity onPress={()=>(setCreatePostVisible(!createPostVisible))} className="absolute bg-[#f94c83] p-4 rounded-2xl w-fit z-40 bottom-0 right-0 mb-24 mr-5">
        <Icon name="add" size={35} color='#ffffff'/>
      </TouchableOpacity>
      {
        createPostVisible && <CreatePost/>
      } */}
    </View>
  );
}