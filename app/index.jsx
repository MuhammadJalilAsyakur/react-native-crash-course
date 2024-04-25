import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';


export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className='w-full items-center justify-center
                    min-h-[85vh] px-4'>
                    <Image
                        source={images.logo}
                        className='w-[130px] h-[84px]'
                        resizeMode='contain'
                    />
                    <Image
                        source={images.cards}
                        className='max-w-[380px] w-full h-[300px]'
                        resizeMode='contain'
                    />
                    <View className="relative mt-5">
                        <Text className="text-3xl text-center font-pbold text-white">
                            Discover Endless Possibilities with {''}
                            <Text className="text-secondary-200">
                                Aora
                            </Text>
                        </Text>

                        <Image
                            source={images.path}
                            className="w-[136px] h-[15px] absolute -bottom-0 -right-7"
                            resizeMode='contain'
                        />
                    </View>
                    <Text className='text-sm text-gray-200 text-center mt-6 font-pregular'>
                        Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
                    </Text>

                    <CustomButton
                        title='Continue with email'
                        handlePress={() => router.push('/sign-in')}
                        containerStyles='w-full mt-7'
                    />
                </View>
            </ScrollView>

            <StatusBar backgroundColor='#161622' style='inverted' />
        </SafeAreaView >
    );
}

