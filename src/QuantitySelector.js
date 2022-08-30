import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export default function QuantitySelector() {
  const [text, setText] = useState("");
  const placeholder = "값을 입력해주세요.";

  const onChangeText = (value) => {
    console.warn(value);
    setText(value);
  };
  return (
    // <View>
    <RNPickerSelect
      textInputProps={{ underlineColorAndroid: "transparent" }}
      placeholder={{
        label: placeholder,
      }}
      fixAndroidTouchableBug={true}
      value={text}
      onValueChange={(value) => onChangeText(value)}
      useNativeAndroidPickerStyle={false}
      // item 을 loop로 구현 필요
      items={[
        { label: "1", value: "1", key: "1" },
        { label: "2", value: "2", key: "2" },
      ]}
      style={pickerSelectStyles}
    />
    // </View>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    color: "#000",
    height: 30,
    width: 190,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 9,
    padding: 10,
  },
  inputAndroid: {
    fontSize: 16,
    color: "#000",
    height: 30,
    width: 190,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 9,
    padding: 10,
  },
});

// test
