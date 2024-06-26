import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { signIn } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'


const SignIn = () => {
    const { setUser, setIsLogged } = useGlobalContext();
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = async () => {
        if (form.email === "" || form.password == "") {
            Alert.alert('Error', 'Please fill all fields')
        }

        setIsSubmitting(true)
        try {
            await signIn(form.email, form.password)
            const result = await getCurrentUser();
            setUser(result)

            Alert.alert("Success", "User signed in successfully");
            router.replace("/home");
        } catch (error) {
            Alert.alert('Error', error.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full justify-center min-h-[85vh]
                px-4 my-6'>
                    <Image
                        source={images.logo}
                        resizeMode='contain'
                        className='w-[115px] h-[35px]'
                    />
                    <Text className="font-psemibold text-white 
                    text-2xl text-semibold mt-10">log in to Aora</Text>

                    <FormField
                        title='Email'
                        value={form.email}
                        placeholder='Enter your email address'
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyle='mt-6'
                        keyboardType='email-address'
                    />

                    <FormField
                        title='Password'
                        value={form.password}
                        placeholder='Enter your password'
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyle='mt-6'
                    />

                    <CustomButton
                        title='sign in'
                        handlePress={submit}
                        containerStyles='mt-6'
                        isLoading={isSubmitting}
                    />

                    <View className='justify-center pt-5 flex-row
                    gap-2'>
                        <Text className='text-gray-100 text-lg font-pregular'>
                            Don't have an account?
                        </Text>
                        <Link href='/sign-up' className='text-lg
                        font-psemibold text-secondary'>Sign up</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn