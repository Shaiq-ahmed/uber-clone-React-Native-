import { View, Text, SafeAreaView, Image, TextInput } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_API_KEY} from '@env'

export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-white h-full'>
        <View className='p-5'>
        <Image
            style={{width:100,height:100, resizeMode:"contain"}}
            source={{url:"https://links.papareact.com/gzs"}}
        />
        <GooglePlacesAutocomplete
        styles={{
            container:{
                flex:0,
            },
            textInput:{
                fontSize:18,
            }
        }}
        placeholder='Where From?'
        
      
         
        
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data);
          console.log(details)
        }}
        fetchDetails={true}
        minLength={2} 
        returnKeyType={"search"}
        query={{
            key:GOOGLE_API_KEY,
            language: 'en',
          }}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
    
       
      />
  
        
        </View>
    </SafeAreaView>
  )
}