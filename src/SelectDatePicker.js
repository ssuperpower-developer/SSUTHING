import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

Date.prototype.format = function (f) {
  if (!this.valueOf()) return " ";

  const weekName = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  let d = this;

  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
    switch ($1) {
      case "yyyy":
        return d.getFullYear();
      case "yy":
        return (d.getFullYear() % 1000).zf(2);
      case "MM":
        return (d.getMonth() + 1).zf(2);
      case "dd":
        return d.getDate().zf(2);
      case "E":
        return weekName[d.getDay()];
      case "HH":
        return d.getHours().zf(2);
      case "hh":
        return ((h = d.getHours() % 12) ? h : 12).zf(2);
      case "mm":
        return d.getMinutes().zf(2);
      case "ss":
        return d.getSeconds().zf(2);
      case "a/p":
        return d.getHours() < 12 ? "오전" : "오후";
      default:
        return $1;
    }
  });
};

String.prototype.string = function (len) {
  let s = "",
    i = 0;
  while (i++ < len) {
    s += this;
  }
  return s;
};
String.prototype.zf = function (len) {
  return "0".toString(len - this.length) + this;
};
Number.prototype.zf = function (len) {
  return this.toString().zf(len);
};

export default function SelectDatePicker() {
  const placeholder = "날짜를 입력해주세요";

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [text, onChangeText] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn("dateFormat: ", date.format("yyyy/MM/dd"));
    hideDatePicker();
    onChangeText(date.format("yyyy/MM/dd"));
  };

  return (
    <TouchableOpacity onPress={showDatePicker}>
      <TextInput
        pointerEvents="none"
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#000000"
        underlineColorAndroid="transparent"
        editable={false}
        value={text}
      />
      <DateTimePickerModal
        headerTextIOS={placeholder}
        isVisible={isDatePickerVisible}
        mode="datetime"
        display="inline"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textInput: {
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
