import React, { Component } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Col,
  Cell,
} from "react-native-table-component";
import ReserveButton from "./butt";
// import PrecautionModal from "./Modal";

const Separator = (props) => (
  <View style={{ height: "100%", width: 1, backgroundColor: "grey" }} />
);

export default class IdTable extends Component {
  constructor(props) {
    super(props);

    this.fields = [
      { key: "itemIndex", title: "#", width: 50 },
      { key: "code", title: "물품", width: 150 },
      { key: "responsable", title: "수량", width: 100 },
      // { key: "piezas", title: "반납 예정 시간" },
      { key: "reserve", title: "예약하기", width: 100 },
      // { key: 'inicio', title: 'INICIO', width: 100 },
      // { key: 'termino', title: 'ENTREGA', width: 100 },
      // { key: 'hab', title: 'HABILITADO', width: 100 },
      // { key: 'arm', title: 'ARMADO', width: 100 },
      // { key: 'bar', title: 'BARRENADO', width: 100 },
      // { key: 'sol', title: 'SOLDADO', width: 100 },
      // { key: 'insp', title: 'LIBERACIÓN', width: 100 },
    ];

    this.rows = Array.apply(null, Array(125)).map((item, idx) => ({
      itemIndex: `${idx + 1}`,
      code: `TEST-ITEM-${idx}`,
      responsable: "2",
      // piezas: Date(),
      reserve: <ReserveButton></ReserveButton>,
      // inicio: '2019-02-01',
      // termino: '2019-04-30',
      // hab: 0,
      // arm: 0,
      // bar: 0,
      // sol: 0,
      // insp: 0,
    }));

    this.state = {
      data: this.rows.map((row) => this.fields.map((field) => row[field.key])),
      tableHead: this.fields.map((field) => field.title),
      widthArr: this.fields.map((field) => field.width),
    };
  }

  _modalIndex(index) {
    <PrecautionModal></PrecautionModal>;
  }

  render() {
    const fields = this.state.data;
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < this.rows.length; i += 1) {
      const rowData = [];
      for (let j = 0; j < this.fields.length; j += 1) {
        rowData.push(`${i}:${j}`);
      }
      tableData.push(rowData);
    }

    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._modalIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View>
        <ScrollView horizontal={true} style={styles.container}>
          <View>
            <Table borderStyle={{ borderColor: "#C1C0B9" }}>
              <Row
                data={state.tableHead}
                widthArr={state.widthArr}
                style={styles.header}
                textStyle={styles.headerText}
              />
            </Table>
            <View>
              <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{ borderColor: "#C1C0B9" }}>
                  {tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={this.state.data[index]}
                      widthArr={state.widthArr}
                      style={[
                        styles.row,
                        index % 2 && { backgroundColor: "#FAF8F8" },
                      ]}
                      textStyle={styles.text}
                    />
                  ))}
                </Table>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   borderTopLeftRadius: 10, // to provide rounded corners
  //   borderTopRightRadius: 10, // to provide rounded corners
  //   paddingTop: 30,
  //   backgroundColor: "#212732",
  // },
  // header: {
  //   height: 50,
  //   backgroundColor: "#242b38",
  // },

  headerText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  // text: {
  //   textAlign: "center",
  //   fontWeight: "100",
  //   color: "#fefefe",
  // },
  // dataWrapper: {
  //   marginTop: -1,
  // },
  // row: {
  //   height: 40,
  //   backgroundColor: "#2c3445",
  // },

  container: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // flexDirection: "columns",
    // flex: 1,
    // width: "100%",
    paddingTop: 5,
    backgroundColor: "#D9D9D9",
  },
  header: { height: 50, backgroundColor: "#D9D9D9" },
  text: { textAlign: "center", fontWeight: "200" },
  dataWrapper: {
    marginTop: -1,
  },
  row: { height: 40, backgroundColor: "#fff" },
});
