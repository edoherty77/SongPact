import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import ButtonIcon from "../components/ButtonIcon"
import AppButton from "../components/AppButton"
import Header from "../components/Header"
import defaultStyles from "../config/styles"

function Dashboard() {
  return (
    <View style={styles.dashboard}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
      />

      <Header title="Dashboard" />
      <View style={styles.modal}>
        <View style={styles.modalHeader}>
          <Text style={styles.pactHeader}>Your Pacts</Text>
          <ButtonIcon
            name="magnify"
            backgroundColor="transparent"
            // backgroundColor="red"
            iconColor="#FFFAFF"
            style={{ paddingBottom: 20 }}
          />
        </View>
        <View
          style={{
            borderBottomColor: "lightgrey",
            borderBottomWidth: 1,
            width: "100%",
            backgroundColor: "red",
          }}
        />
        <View style={styles.options}>
          <Text style={{ color: "#FFFAFF", fontFamily: "Courier" }}>Open</Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#FFFAFF",
              fontFamily: defaultStyles.fontFamily,
            }}
          >
            Needs Action
          </Text>
          <Text
            style={{ color: "#FFFAFF", fontFamily: defaultStyles.fontFamily }}
          >
            All
          </Text>
        </View>
        <View style={styles.pact}>
          <View style={styles.top}>
            <Text
              style={{
                fontSize: 25,
                fontFamily: defaultStyles.fontFamily,
                fontWeight: "bold",
                color: "#FFFAFF",
              }}
            >
              A Walk
            </Text>
            <Text
              style={{ color: "#FFFAFF", fontFamily: defaultStyles.fontFamily }}
            >
              Type: Producer
            </Text>
          </View>
          <View style={styles.bottom}>
            <Text
              style={{ color: "#FFFAFF", fontFamily: defaultStyles.fontFamily }}
            >
              Started By: <Text style={{ color: "#30BCED" }}>Stephan</Text>
            </Text>
            <Text
              style={{ color: "#FFFAFF", fontFamily: defaultStyles.fontFamily }}
            >
              Status:<Text style={{ color: "yellow" }}> Pending</Text>
            </Text>
          </View>
        </View>
        <View style={styles.pact}>
          <View style={styles.top}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#FFFAFF",
                fontFamily: defaultStyles.fontFamily,
              }}
            >
              Adrift
            </Text>
            <Text
              style={{ color: "#FFFAFF", fontFamily: defaultStyles.fontFamily }}
            >
              Type: Remix
            </Text>
          </View>
          <View style={styles.bottom}>
            <Text
              style={{ color: "#FFFAFF", fontFamily: defaultStyles.fontFamily }}
            >
              Started By:{" "}
              <Text
                style={{
                  color: "#30BCED",
                  fontFamily: defaultStyles.fontFamily,
                }}
              >
                Seth
              </Text>
            </Text>
            <Text
              style={{ color: "#FFFAFF", fontFamily: defaultStyles.fontFamily }}
            >
              Status:
              <Text
                style={{
                  color: "yellow",
                  fontFamily: defaultStyles.fontFamily,
                }}
              >
                {" "}
                Pending
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.pact}>
          <View style={styles.top}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                color: "#FFFAFF",
                fontFamily: defaultStyles.fontFamily,
              }}
            >
              Japan
            </Text>
            <Text
              style={{ color: "#FFFAFF", fontFamily: defaultStyles.fontFamily }}
            >
              Type: Producer
            </Text>
          </View>
          <View style={styles.bottom}>
            <Text
              style={{ color: "#FFFAFF", fontFamily: defaultStyles.fontFamily }}
            >
              Started By:{" "}
              <Text
                style={{
                  color: "#30BCED",
                  fontFamily: defaultStyles.fontFamily,
                }}
              >
                You
              </Text>
            </Text>
            <Text
              style={{ color: "#FFFAFF", fontFamily: defaultStyles.fontFamily }}
            >
              Status:
              <Text
                style={{
                  color: "yellow",
                  fontFamily: defaultStyles.fontFamily,
                }}
              >
                {" "}
                Pending
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bottom: {
    margin: 5,
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dashboard: {
    flex: 1,
    backgroundColor: "#30BCED",
  },
  modal: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "transparent",
    // backgroundColor: '#FFFAFF',
  },
  modalHeader: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  options: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 20,
    color: "#FFFAFF",
  },
  pact: {
    backgroundColor: "#303036",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  pactHeader: {
    fontSize: 35,
    color: "#FFFAFF",
    fontWeight: "bold",
    fontFamily: defaultStyles.fontFamily,
  },
  top: {
    margin: 5,
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
})

export default Dashboard
