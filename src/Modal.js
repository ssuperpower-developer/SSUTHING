import React, { Component, useState } from "react";
import {
  Alert,
  StyleSheet,
  Modal,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from "react-native";
import SelectDatePicker from "./SelectDatePicker";
import QuantitySelector from "./QuantitySelector";

// 구분선 생성
function Separator() {
  return (
    <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
      <View
        style={{
          flex: 1,
          height: 2,
          backgroundColor: "black",
          marginBottom: 10,
        }}
      />
    </View>
  );
}

// precution modal 창 생성
class PrecautionModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalBackground} />
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <Text style={styles.modalHeaderText}>
                  Precaution for Rental
                </Text>
              </View>
              <Separator />
              <View>
                <Text style={styles.modalText}>
                  1. 연체 시 1일당 1천 원 연체료가 부과됩니다
                </Text>
                <Text style={styles.modalText}>
                  2. 대학원생은 대여가 불가능 합니다
                </Text>
                <Text style={styles.modalText}>
                  3. 공지를 읽지 않아 생기는 불이익은 책임지지 않습니다
                </Text>
                <Text style={styles.modalText}>
                  4. 문의 사항이나 신고접수는 아래 Notice 창을 이용해주세요
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Pressable
                  style={{ marginLeft: "50%", marginRight: 5 }}
                  onPress={() => this.setModalVisible(!modalVisible)} // 클릭 시 modal창 숨기기 구현필요
                >
                  <SelectDateModal />
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonCloseModal]}
                  onPress={() => this.setModalVisible(!modalVisible)}
                >
                  <Text style={styles.buttonTextInModal}>No</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[
            styles.button,
            {
              backgroundColor: "#68CDC1",
            },
          ]}
          onPress={() => this.setModalVisible(true)}
        >
          <Text style={styles.buttonTextInReserve}>예약하기</Text>
        </Pressable>
      </View>
    );
  }
}

// select date modal 창 생성
class SelectDateModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalBackground} />
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <Text style={styles.modalHeaderText}>날짜 선택하기</Text>
              </View>
              <Separator />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 18 }}>빌릴 날짜 : </Text>
                <SelectDatePicker />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Text style={{ fontSize: 18 }}>반납 날짜 : </Text>
                <SelectDatePicker />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  margin: 20,
                }}
              >
                <Text style={{ fontSize: 18, marginLeft: 35 }}>수량 : </Text>
                <QuantitySelector />
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Pressable
                  style={{ marginLeft: "50%", marginRight: 5 }}
                  onPress={() => this.setModalVisible(!modalVisible)} // 클릭 시 modal창 숨기기 구현필요
                >
                  <NoticeModal />
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonCloseModal]}
                  onPress={() => this.setModalVisible(!modalVisible)}
                >
                  <Text style={styles.buttonTextInModal}>No</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpenModal]}
          onPress={() => this.setModalVisible(true)}
        >
          <Text style={styles.buttonTextInModal}>Yes</Text>
        </Pressable>
      </View>
    );
  }
}

class NoticeModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalBackground} />
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <Text style={[styles.modalHeaderText, { color: "red" }]}>
                  Notice
                </Text>
              </View>
              <Separator />
              <View>
                <Text style={styles.modalText}>
                  1. ~까지 반납해주셔야합니다.
                </Text>
                <Text style={styles.modalText}>
                  2. 대여 시 학생증을 맡겨주셔야 합니다.
                </Text>
                <Text style={styles.modalText}>
                  3. 보증금 1만 원이 필요합니다.(이거는 물품마다 다름)
                </Text>
                <Text style={styles.modalText}>
                  4. 연장은 반납예정일 이전에만 신청이 가능합니다.
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Pressable
                  style={[
                    styles.button,
                    styles.buttonOpenModal,
                    { marginLeft: "50%", marginRight: 5 },
                  ]}
                  onPress={() => this.setModalVisible(!modalVisible)}
                >
                  <Text style={styles.buttonTextInModal}>Yes</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonCloseModal]}
                  onPress={() => this.setModalVisible(!modalVisible)}
                >
                  <Text style={styles.buttonTextInModal}>No</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpenModal]}
          onPress={() => this.setModalVisible(true)}
        >
          <Text style={styles.buttonTextInModal}>Yes</Text>
        </Pressable>
      </View>
    );
  }
}

export default class ReserveModal extends Component {
  render() {
    return <PrecautionModal />;
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalBackground: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: 350,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalHeaderText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },

  button: {
    borderRadius: 10,
    elevation: 2,
    width: 80,
    height: 30,
  },

  buttonTextInReserve: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 7.7,
  },

  buttonTextInModal: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: 7,
  },

  buttonOpenModal: {
    backgroundColor: "#68CDC1",
    height: 35,
    width: 90,
  },

  buttonCloseModal: {
    backgroundColor: "#E0E0E0",
    height: 35,
    width: 90,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  modalText: {
    fontSize: 18,
    marginBottom: 15,
  },
});
