import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigate } from "react-router-native";

export default function Home() {
  const navigate = useNavigate();
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => {
          navigate(-1);
        }}
      >
        <Text>Welcome</Text>
      </TouchableOpacity>
    </View>
  );
}
