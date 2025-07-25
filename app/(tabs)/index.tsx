

import {FlatList, Image, Pressable, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import {images, offers} from "@/constants";
import {IOffers} from "@/src/types";
import {Fragment} from "react";
import CategoryCard from "@/src/components/CategoryCard";
export default function Index() {
    // noinspection TypeScriptValidateTypes
    return (
        <SafeAreaView className="flex-1 bg-white">
            <FlatList
                contentContainerClassName={"pb-28 px-5"}
                data={offers}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent = {
                    <View className={"items-center flex-row justify-between mt-4"}>
                        <View>
                            <Text style={{color:"orange"}} className="font-bold text-orange-500">DELIVER TO</Text>
                            <Text className="font-bold">Lamin O, Touray</Text>
                        </View>
                        <View>
                            <View className={"bg-black rounded-full relative justify-center items-center"} style={{width:50,height:50}}>
                                <Text
                                    className={"px-2 bg-orange-500 text-white font-bold rounded-full w-6 items-center justify-center text-center absolute right-0 top-[-5]"}>
                                    2
                                </Text>
                                <View style={{width:25,height:25}} >
                                    <Image source={images.bag} style={{width:"100%",height:"100%"}} />
                                </View>
                            </View>
                        </View>
                    </View>
                }
                renderItem={
                    ({item})=>{
                        return <Pressable >
                            <CategoryCard cardItem ={item} />
                        </Pressable>
                    }
                }
            />
        </SafeAreaView>
    );
}


