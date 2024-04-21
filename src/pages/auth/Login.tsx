import { Button, Text, TextInput, Touchable, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import COLORS from '../../constants/colors'
import { useWalletConnectModal, } from '@walletconnect/modal-react-native';
import { useState } from 'react';

export default function Login() {

  const { open, isConnected, address, provider } = useWalletConnectModal();
  const [text, onChangeText] = useState('');

  const handleButtonPress = async () => {
    if (isConnected) {
      return provider?.disconnect();
    }
    return open();
  };

  return (
    <View className={`flex flex-col justify-center items-center h-full gap-5 px-10 bg-[#1c1c1c]`}>
      <Text className='text-6xl font-[Billa-Bong] text-white py-2'>Log In</Text>
      <TextInput className={`bg-[#2b2b2b] text-xl h-16 px-5 py-2 rounded-3xl w-full text-white placeholder-white`}
        placeholder='Username'
        placeholderTextColor="#6b6b6b"
        onChangeText={onChangeText}
        value={text}
      />
      <View className={`bg-[#2b2b2b] justify-center w-full h-16 px-5 py-3 rounded-3xl`}>
        <Text className="text-lg text-[#6b6b6b] " numberOfLines={1}>{isConnected ? address : 'No Connected'}</Text>
      </View>
      <TouchableOpacity onPress={handleButtonPress} className={`bg-[#f94c83] w-full flex justify-center items-center rounded-2xl py-2`} >
        <Text className={`text-lg`}>{isConnected ? 'Disconnect' : 'Connect'}</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled={text === '' || !isConnected} style={(text === '' || !isConnected) ? { backgroundColor: "#492f37" } : {}} className={`disabled:bg-black bg-[#f94c83] w-full flex justify-center items-center rounded-2xl py-2`} >
        <Text className={`text-lg`}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}
