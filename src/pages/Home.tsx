import React, { useState } from "react";
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
  LocateIcon,
  DollarSign,
  Calendar,
  UsersIcon,
  Heart,
  Share2,
} from "lucide-react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CreatePost from "./CreatePost";

export default function Home() { 
  const [ createPostVisible, setCreatePostVisible ] = useState(false);
  return (
    <View className="bg-[#1c1c1c] text-white">

      <View className="flex flex-row items-center justify-between w-full px-4 bg-gradient-to-br from-white to-[#1c1c1c]">
        <Text className="font-[Billa-Bong] text-3xl my-4 text-white">
          Pixel<Text className="text-pink-500">Pulse</Text>
        </Text>
        <Pressable className="w-12 py-2 ml-auto">
          <Image
            source={{
              uri: "https://pbs.twimg.com/profile_images/1699481797158121472/Q0Cefxy8_400x400.jpg",
            }}
            style={{ width: 40, height: 40, borderRadius: 5 }}
            width={40}
            height={40}
          />
        </Pressable>

      </View>
      <ScrollView>
        <View className="flex flex-col gap-y-2 py-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <View key={index}>
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
                          uri: "https://pbs.twimg.com/profile_images/1699481797158121472/Q0Cefxy8_400x400.jpg",
                        }}
                        style={{ width: 50, height: 50, borderRadius: 10 }}
                        width={50}
                        height={50}
                      />
                    </View>
                    <View className="flex flex-col text-start gap-x-2 items-start">
                      <Text className="font-bold text-lg text-white">Vape Lover</Text>
                      <Text className="text-gray-500 text-sm">1d ago</Text>
                    </View>
                  </View>
                  <View className="h-4"></View>

                  <Text className="break-words text-white text-base  w-[80vw]">
                    I'm a vape lover, I absolutely love vapes, especially the
                    blueberry one. I really hope they leagalize it and allow me
                    to carry one in airports and also in college lecture
                  </Text>

                  <View className="h-2.5"></View>

                  <Image
                    source={{
                      uri: "https://pbs.twimg.com/media/GLrHV1fbcAAA870?format=jpg&name=large",
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

// export function PostCard() {
//   return (
//     <Pressable
//       className="bg-[#131313] p-4 my-2 rounded-2xl w-full"
//       onPress={() => { }}
//     >
//       <View className="flex flex-row justify-center gap-x-2 items-center">
//         <View className="flex flex-row">
//           {/* {Array.from({ length: 3 }).map((avatar, i) => (
//             <Avatar.Image
//               source={{
//                 uri: avatar,
//               }}
//               size={24}
//               className={i > 0 ? "-ml-2" : ""}
//             />
//           ))} */}
//         </View>

//         <Text className="text-white text-center">{"peerMessage"}</Text>
//       </View>

//       {/* <View className="w-[90%] mx-auto h-[1px] my-3 bg-white/50" /> */}

//       <View
//         className={twMerge(
//           "w-[90%] mx-auto h-[1px] my-3 bg-white/0 border-t border-white/50 border-r-1",
//           Platform.OS === "android" ? "border-dashed" : ""
//         )}
//       />

//       <View className="flex flex-row" style={{ marginBottom: 10 }}>
//         <Image
//           source={{ uri: "event.image" }}
//           style={{ width: 69, borderRadius: 15, marginRight: 20 }}
//         />

//         <View className="flex gap-1">
//           <Text className="text-white text-lg">ETH Async Hack</Text>
//           <View className="flex flex-row gap-1 items-center">
//             <LocateIcon size={20} color="#989898" />
//             <Text className="text-gray-200 font-sans">Online</Text>
//           </View>
//           <View className="flex flex-row gap-1 items-center">
//             <Calendar size={20} color="#989898" />
//             <Text className="text-gray-200">{"time.toDateString()"}</Text>
//           </View>
//         </View>
//       </View>

//       <View className="flex flex-row justify-between">
//         <View className="flex flex-row gap-4">
//           <View className="flex flex-row gap-1 items-center">
//             <UsersIcon size={24} color="#989898" />

//             <Text className="text-white font-light">0</Text>
//           </View>

//           <View className="flex flex-row gap-1 items-center">
//             <DollarSign size={24} color="#989898" />
//             <Text className="text-white font-light">Free</Text>
//           </View>
//         </View>

//         {true ? (
//           <TouchableOpacity
//             className="rounded-full p-3 px-3 bg-[#54ADFF]"
//             onPress={() => { }}
//           >
//             <MessageCircle size={24} color="white" />
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity
//             className="rounded-full p-2 px-3 bg-[#1E1E1E]"
//             disabled={false}
//             onPress={() => { }}
//           >
//             <Text className="font-bold" style={{ color: "#A5219B" }}>
//               Join them
//             </Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </Pressable>
//   );
// }
