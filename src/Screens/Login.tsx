import { images } from "@/constants";
import React, { useState } from 'react';
import { Dimensions, Image, ImageBackground, Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Login = props => {
    const {width,height} = Dimensions.get("window")
    console.log(height,"#####################")
    const r1Height: number = 0.35 * height;
    console.log(r1Height,"#####################")
        const activeClass = "text-orange-500 py-2 bg-white font-bold text-xl italic";
        const inactiveClass = "text-gray-100 py-2  text-md "
    const [isActive,setIsActive] = useState(false)
    const changeActiveState =(option:string)=>{
        option === "signup"? setIsActive(true) : setIsActive(false)
    }
    return (
        <SafeAreaView className={"flex-1"}>
            <View className={" bg-black"}>


                <View style={{position:"relative",height:r1Height}}>
                    <View>
                        <ImageBackground className={"relative pt-8 pl-6 "} style={{height:r1Height,zIndex:1}} source={images.burgerTwo} resizeMode={"stretch"} >
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    zIndex: 1
                                }}
                            />

                            <View className={"z-10 gap-4"}>
                                <Image source={images.logo} style={{width: 75,height:75}} resizeMode={"cover"} />
                                <Text className={"h1-bold text-white"} style={{color:"white"}}>Get Started now</Text>
                                <Text className={"text-white font-bold text-xl font-semibold"}>Create an account or log into explore</Text>
                            </View>
                        </ImageBackground>
                    </View>

                </View>

                <View className={"bg-white pt-8 px-4  rounded-t-[43px] grow-5"} style={{height:height - r1Height}}>
                        <View className={"flex-row p-[2px] rounded"} style={{backgroundColor:"#D3D3D3"}}>
                            <Pressable onPress={()=>{changeActiveState("login")}} className={"flex-1  rounded  "}>
                                <Text className={`text-center   text-orange-500 font-bold text-xl italic  ${isActive ? inactiveClass:activeClass}`}> Log In</Text>
                            </Pressable>
                            <Pressable onPress={()=>{changeActiveState("signup")}} className={"flex-1 border-black  rounded"}>
                                <Text className={`text-center italic ${isActive ? activeClass:inactiveClass}`}>Sign Up</Text>
                            </Pressable>

                        </View>

                    {isActive ?(
                            <View className="gap-4 pt-4">
                                <View>
                                    <Text className={"text-gray-100  text-md"}>Full Name</Text>
                                    <TextInput placeholder={"User Full Name"} className={" border-b-2 pt-4"}/>
                                </View>
                                <View>
                                    <Text className={"text-gray-100  text-md"}>Email address</Text>
                                    <TextInput placeholder={"user@xyz.domain"} className={" border-b-2 pt-4"}/>
                                </View>

                                <View>
                                    <Text  className={"text-gray-100  text-md"}>Password</Text>
                                    <TextInput  secureTextEntry={true} placeholder={"PASSWORD"} className={"border-b-2 pt-4"}/>
                                </View>
                                <View>
                                    <Pressable onPress={()=>{
                                        props.onAuth(true)
                                        console.log("Login attempt...")}}>
                                        <Text className={"text-white bg-orange-500 py-2 text-center font-bold text-xl italic rounded-full"}>Register</Text>
                                    </Pressable>
                                </View>
                                <View className={"flex-row  item-center mt-6 items-center justify-center "}>
                                    <Text className={"text-gray-100 py-2  text-md"}>Already have an account ? </Text>
                                    <Pressable>
                                        <Text className={"text-orange-500 text-xl py-2 font-bold italic"}> Log In</Text>
                                    </Pressable>
                                </View>
                            </View>

                    ):
                        (<View className="gap-4 pt-4">
                        <View>
                            <Text className={"text-gray-100  text-md"}>Email address</Text>
                            <TextInput placeholder={"user@xyz.domain"} className={" border-b-2 pt-4"}/>
                        </View>

                        <View>
                            <Text className={"text-gray-100  text-md"}>Password</Text>
                            <TextInput secureTextEntry={true}  placeholder={"PASSWORD"}  className={"border-b-2 pt-4"}/>
                        </View>
                        <View>
                            <Pressable onPress={()=>{props.onAuth(true)}}>
                                <Text className={"text-white bg-orange-500 py-2 text-center font-bold text-xl italic rounded-full"}>Login</Text>
                            </Pressable>
                        </View>
                                <View className={"flex-row  item-center mt-6 items-center justify-center "}>
                                    <Text className={"text-gray-100 py-2  text-md"}>Already have an account ? </Text>
                                    <Pressable>
                                        <Text className={"text-orange-500 text-xl py-2 font-bold italic"}> Sign up</Text>
                                    </Pressable>
                                </View>
                    </View>
                        )}

                </View>
            </View>
        </SafeAreaView>
    );
};

Login.propTypes = {

};

export default Login;