import { Image, Text, View } from "react-native";

import { router } from "expo-router";
import { images } from "../constants";
import CustomButton from "./CustomButton";
const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        className="w-[270px] h-[215px]"
        source={images.empty}
        resizeMode="contain"
      />

      <Text className=" text-xl text-white font-psemibold mt-2">{title}</Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>

      <CustomButton
        title="Create video"
        handlePress={() => router.push("/")}
        containerStyle="w-full my-5"
      />
    </View>
  );
};
export default EmptyState;
