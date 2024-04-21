import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

export default function ProfileSection() {
    return (
        <View className='flex items-center bg-[#1c1c1c] h-full w-full'>
            <View className="">
                <Image
                    source={{
                        uri: "https://pbs.twimg.com/profile_images/1699481797158121472/Q0Cefxy8_400x400.jpg",
                    }}
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                    width={100}
                    height={100}
                    className='mt-10'
                />
            </View>
            <Text className='text-white text-5xl font-semibold mt-5 font-[Billa-Bong]'>
                @username
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
                                    I'm a vape lover, I absolutely love vapes, especially the
                                    blueberry one. I really hope they leagalize it and allow me
                                    to carry one in airports and also in college lecture
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
