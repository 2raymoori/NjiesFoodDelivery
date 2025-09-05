import { images } from "@/constants";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CartBtn = ()=>{
    return (

        <TouchableOpacity className="cart-btn">
<Image source={images.bag} className="size-5" resizeMode="contain" />
        <View className="cart-badge">
            <Text className="small-bold text-white">2</Text>
        </View>
    </TouchableOpacity>
    )
}

export default CartBtn;