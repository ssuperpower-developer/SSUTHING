import {
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  whereField,
  isEqualTo,
} from "firebase/firestore";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
// Using DB Reference
import { db } from "../Core/config";
import { decode, encode, atob } from "base-64";
import Test from "./CRUD";
import Nav from "./Nav";

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

export default function App() {
  return <Nav></Nav>;
}
