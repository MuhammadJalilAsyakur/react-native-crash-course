import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'

import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const SignUp = () => {
    const { setUser, setIsLoggedIn } = useGlobalContext();
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = async () => {
        if (form.username === "" || form.email === "" || form.password === "") {
            Alert.alert('Error', 'Please fill all fields')
        }

        setIsSubmitting(true)

        try {
            const result = await createUser(form.email, form.password, form.username)
            setUser(result)
            setIsLoggedIn(true)

            router.replace('/home')
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
                    text-2xl text-semibold mt-10">Sign Up to Aora</Text>

                    <FormField
                        title='Username'
                        value={form.username}
                        placeholder='Enter your username'
                        handleChangeText={(e) => setForm({
                            ...form,
                            username: e
                        })}
                        otherStyle='mt-10'
                        keyboardType='email-address'
                    />

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
                        otherStyle='mt-7'
                    />

                    <CustomButton
                        title='sign up'
                        handlePress={submit}
                        containerStyles='mt-7'
                        isLoading={isSubmitting}
                    />

                    <View className='justify-center pt-5 flex-row
                    gap-2'>
                        <Text className='text-gray-100 text-lg font-pregular'>
                            Have an account already?
                        </Text>
                        <Link href='/sign-in' className='text-lg
                        font-psemibold text-secondary'>Sign in</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp