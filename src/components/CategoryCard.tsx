import {Image, Text, View} from "react-native";
import {images} from "@/constants";
import {IPropsCategoryCard} from "@/src/types";

const CategoryCard = (props)=>{
    const {title,image,color,id} = props.cardItem
    return(

        <View className={`bg-orange-500 flex justify-between offer-card ${id %2 === 0 ? "flex-row-reverse pr-4 pl-2":"flex-row pl-4 pr-2"}`} style={{backgroundColor:`${color}`}}>
            <View className="">
                <Text className={"text-white h1-bold leading-tight"}>
                    {title?.replace(" ","\n")}
                </Text>
                <View style={{width:40,height:20}}>
                    <Image style={{width:"100%",height:"100%"}} source={images.arrowRight}  resizeMode={"cover"} />
                </View>
            </View>

            <View className="" style={{ width: 200, height: 150 }}>
                <Image
                    source={image}
                    resizeMode="cover"
                    style={{ width:"100%",height:"100%"}}
                />

            </View>
        </View>
    )
}
export default CategoryCard
