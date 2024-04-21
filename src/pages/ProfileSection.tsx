import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

export default function ProfileSection() {
    return (
        <View className='flex items-center bg-[#1c1c1c] h-full w-full'>
            <View className="">
                <Image
                    source={{
                        uri: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1440",
                    }}
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                    width={100}
                    height={100}
                    className='mt-10'
                />
            </View>
            <Text className='text-white text-5xl font-semibold mt-5 font-[Billa-Bong]'>
                @Swapnil Shinde
            </Text>
            <ScrollView className='w-full'>
                <View className="flex flex-col gap-y-4 py-2 w-full">

                    {Array.from({ length: 3 }).map((_, index) => (
                        <View className='w-full'>
                            <View className='flex flex-row w-full px-4 gap-x-4 items-center'>
                                <Image
                                    source={{
                                        uri: "https://pbs.twimg.com/media/GLrHV1fbcAAA870?format=jpg&name=large",
                                    }}
                                    style={{ width: 60, height: 60, borderRadius: 10 }}
                                    width={60}
                                    height={60}
                                />
                                <Text className="break-words text-white text-base w-[80vw] h-12">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Text>
                            </View>
                            <View className="h-[0px] my-4 border-b border-[#2b2b2b] w-full"></View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}
