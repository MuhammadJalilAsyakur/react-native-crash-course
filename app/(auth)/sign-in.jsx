import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = () => {

    }
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView>
                <View className='w-full justify-center h-full
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
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn