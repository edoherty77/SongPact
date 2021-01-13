import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppFormPercent,
} from "../../components/forms"
import * as Yup from "yup"
import Screen from "../../components/Screen"
import Header from "../../components/Header"
import AppText from "../../components/AppText"
import ConfirmModal from "../../components/ConfirmModal"
import { useFormState, useFormDispatch } from "../../context/form-context"
import { Formik, FieldArray } from "formik"
import colors from "../../config/colors"
import ButtonIcon from "../../components/ButtonIcon"
import { Button, Card, Text } from "react-native-paper"
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
})

export default function Fourth({ navigation }) {
  const form = React.useRef()
  const dispatch = useFormDispatch()
  const { values: formValues, errors: formErrors } = useFormState("customer")

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      if (form.current) {
        const { values, errors } = form.current
        dispatch({
          type: "UPDATE_FORM",
          payload: {
            id: "customer",
            data: { values, errors },
          },
        })
      }
    })

    return unsubscribe
  }, [navigation])
  const [isModalVisible, setModalVisible] = useState(false)
  function trash() {
    setModalVisible(true)
  }

  function trashDeny() {
    setModalVisible(false)
  }

  function trashConfirm() {
    setModalVisible(false)
    navigation.navigate("New")
  }
  function test(values) {
    console.log(values)
  }
  return (
    <Screen>
      <Header
        title="Numbers"
        icon="arrow-left-bold"
        back={() => navigation.navigate("Third")}
      />
      <Formik
        innerRef={form}
        initialValues={formValues}
        initialErrors={formErrors}
        enableReinitialize
      >
        {({ values, errors, handleSubmit }) => (
          <View style={styles.mainView}>
            <View style={styles.formView}>
              <AppFormPercent name="prodAdvance" title="Producer Advance" />
              <AppFormPercent name="prodRoyalty" title="Producer Royalty" />
              <AppFormPercent name="prodPublish" title="Producer Publish" />
              <AppFormPercent name="perfPublish" title="Performer Publish" />
              <View style={styles.prodCredView}>
                <View style={styles.top}>
                  <AppText fontSize={25}>Producer Credit:</AppText>
                  <ButtonIcon
                    name="information"
                    backgroundColor="transparent"
                    size={35}
                    iconColor="#42C1FC"
                    onPress={() => handleInfoPress()}
                  />
                </View>
                <AppFormField
                  name="prodCredit"
                  style={styles.textInput}
                  placeholder="Producer Credit"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor={colors.black}
                />
              </View>
            </View>
            <View style={styles.footer}>
              <SubmitButton
                style={styles.nextButton}
                title="Next"
                onPress={() => {
                  navigation.push("Last")
                }}
              />
              <View style={styles.iconView}>
                <ButtonIcon
                  onPress={trash}
                  name="delete"
                  backgroundColor="transparent"
                  iconColor={colors.red}
                />
              </View>
            </View>
          </View>
        )}
      </Formik>
      <ConfirmModal
        text="Are you sure you'd like to delete?"
        onBackdropPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        confirm={trashConfirm}
        deny={trashDeny}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  mainView: {
    // backgroundColor: 'green',
    display: "flex",
    flex: 1,
  },
  formView: {
    margin: 40,
    backgroundColor: "gray",
    justifyContent: "space-between",
    padding: 10,
    flex: 1,
  },
  top: {
    paddingLeft: 7,
    flexDirection: "row",
  },
  textInput: {
    width: "90%",
    backgroundColor: "rgba(250, 250, 250, 0.8)",
    fontSize: 18,
    paddingLeft: 20,
    height: 45,
    borderRadius: 25,
  },
  btnView: {
    alignItems: "center",
    marginBottom: 20,
  },
  reviewButton: {
    marginTop: 10,
    borderRadius: 50,
    height: 45,
    backgroundColor: colors.red,
    width: "80%",
  },
  footer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  iconView: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  nextButton: {
    marginBottom: 10,
    borderRadius: 50,
    height: 45,
    backgroundColor: colors.red,
    width: "50%",
  },
})
