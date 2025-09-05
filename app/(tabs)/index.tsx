

import { offers } from "@/constants";
import Cart from "@/src/components/CartBtn";
import CategoryCard from "@/src/components/CategoryCard";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
    // noinspection TypeScriptValidateTypes
    return (
        <SafeAreaView className="flex-1 bg-white">

<View className={"items-center flex-row justify-between mt-4"}>
                        <View>
                            <Text style={{color:"orange"}} className="font-bold text-orange-500">DELIVER TO</Text>
                            <Text className="font-bold">Lamin O, Touray</Text>
                        </View>
                        <Cart />
                    </View>
            <FlatList
            showsVerticalScrollIndicator={false}
                contentContainerClassName={"pb-28 px-5"}
                data={offers}
                keyExtractor={(item, index) => index.toString()}
             
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


