import React, { Component } from "react";
import {
  Alert,
  StyleSheet,
  Modal,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
// import PrecautionModal from "./Modal";
import { useState } from "react";
import { Button, NativeBaseProvider, Center, Divider } from "native-base";
import ReserveModal from "./Modal";

export default class ReserveButton extends Component {
  render() {
    return <ReserveModal />;
  }
}
