import React from "react";
import {
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Platform,
  Image,
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
      <Text className="text-red-500">Home screen</Text>

      <View className="flex flex-col gap-y-4 justify-center items-center bg-red-200 px-4 my-8">
        {Array.from({ length: 3 }).map((_, index) => (
          <EventCard />
        ))}
      </View>
    </View>
  );
}

export function EventCard() {
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
