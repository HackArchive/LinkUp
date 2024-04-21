import React from "react";
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
} from "lucide-react-native";

export default function Home() {
  return (
    <View>
      <View className="h-14"></View>

      <Text className="font-bold text-lg text-center my-4">LinkUp</Text>

      <ScrollView>
        <View className="flex flex-col gap-y-2 py-2">
          {Array.from({ length: 13 }).map((_, index) => (
            <>
              <View className="flex flex-row gap-2 w-full px-4">
                <View className="w-16 bg-red-300">
                  <Image
                    source={{
                      uri: "https://twitter.com/prathamesh_io/photo",
                    }}
                    style={{ width: 50, height: 50, borderRadius: 50 }}
                  />
                </View>

                <View className="flex-1 flex flex-col">
                  <Text className="font-bold text-md">Vape Lover</Text>

                  <View className="h-2"></View>

                  <Text className="break-words">
                    I'm a vape lover, I absolutely love vapes, especially the
                    blueberry one. I really hope they leagalize it and allow me
                    to carry one in airports and also in college lecture
                  </Text>

                  <Image
                    source={{
                      uri: "https://pbs.twimg.com/media/GLrHV1fbcAAA870?format=jpg&name=large",
                    }}
                  />
                </View>
              </View>

              <View className="h-[0px] my-4 border-b border-gray-300"></View>
            </>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export function PostCard() {
  return (
    <Pressable
      className="bg-[#131313] p-4 my-2 rounded-2xl w-full"
      onPress={() => {}}
    >
      <View className="flex flex-row justify-center gap-x-2 items-center">
        <View className="flex flex-row">
          {/* {Array.from({ length: 3 }).map((avatar, i) => (
            <Avatar.Image
              source={{
                uri: avatar,
              }}
              size={24}
              className={i > 0 ? "-ml-2" : ""}
            />
          ))} */}
        </View>

        <Text className="text-white text-center">{"peerMessage"}</Text>
      </View>

      {/* <View className="w-[90%] mx-auto h-[1px] my-3 bg-white/50" /> */}

      <View
        className={twMerge(
          "w-[90%] mx-auto h-[1px] my-3 bg-white/0 border-t border-white/50 border-r-1",
          Platform.OS === "android" ? "border-dashed" : ""
        )}
      />

      <View className="flex flex-row" style={{ marginBottom: 10 }}>
        <Image
          source={{ uri: "event.image" }}
          style={{ width: 69, borderRadius: 15, marginRight: 20 }}
        />

        <View className="flex gap-1">
          <Text className="text-white text-lg">ETH Async Hack</Text>
          <View className="flex flex-row gap-1 items-center">
            <LocateIcon size={20} color="#989898" />
            <Text className="text-gray-200 font-sans">Online</Text>
          </View>
          <View className="flex flex-row gap-1 items-center">
            <Calendar size={20} color="#989898" />
            <Text className="text-gray-200">{"time.toDateString()"}</Text>
          </View>
        </View>
      </View>

      <View className="flex flex-row justify-between">
        <View className="flex flex-row gap-4">
          <View className="flex flex-row gap-1 items-center">
            <UsersIcon size={24} color="#989898" />

            <Text className="text-white font-light">0</Text>
          </View>

          <View className="flex flex-row gap-1 items-center">
            <DollarSign size={24} color="#989898" />
            <Text className="text-white font-light">Free</Text>
          </View>
        </View>

        {true ? (
          <TouchableOpacity
            className="rounded-full p-3 px-3 bg-[#54ADFF]"
            onPress={() => {}}
          >
            <MessageCircle size={24} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="rounded-full p-2 px-3 bg-[#1E1E1E]"
            disabled={false}
            onPress={() => {}}
          >
            <Text className="font-bold" style={{ color: "#A5219B" }}>
              Join them
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </Pressable>
  );
}
