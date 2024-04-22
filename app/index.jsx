import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="font-pbold">Hello world</Text>
            <StatusBar style="auto" />
            <Link href="/home" className='font-pregular text-blue-500'>
                Go to home</Link>
        </View >
    );
}

