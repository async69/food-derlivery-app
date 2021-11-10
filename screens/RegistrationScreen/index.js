import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../assets/colors";
import { connect } from "react-redux"
import { constants } from "../../store/Auth/"
import handleSignUp from "./handleSignUp"
import { handleUserUpdate } from "../LoginScreen/handleLogin"
import LoaderImage from "../../assets/loaders/pizza.gif"

const SignUpScreen = ({ navigation, setUserToken, setUserDetails, setID }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoaderVisible, enableLoader] = useState(false)

  const signUpHandler = async () => {
    enableLoader(true)
    const response = await handleSignUp({
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "password": password,
      "phone_number": phoneNumber
    }, setUserToken, enableLoader, setID)
    if (response.status === 200) {
      await handleUserUpdate(response.data.token, setUserDetails)
      navigation.navigate("HomeScreen")
    } else {
      Alert.alert("Connection Failure")
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/Logo/lWhite.png")}
      />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name."
          placeholderTextColor="#003f5c"
          onChangeText={(firstName) => setFirstName(firstName)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name."
          placeholderTextColor="#003f5c"
          onChangeText={(lastName) => setLastName(lastName)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number."
          placeholderTextColor="#003f5c"
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      {isLoaderVisible ? (
        <Image style={{ width: 70, height: 70 }} source={LoaderImage} />
      ) : (
        <>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={signUpHandler}
          >
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.reg}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.tt}>Already have an account?</Text>
          </TouchableOpacity>
        </>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },

  image: {
    marginBottom: 40,
    width: 90,
    height: 90,
  },

  inputView: {
    backgroundColor: colors.light,
    width: "70%",
    height: 45,
    marginBottom: 10,
  },

  TextInput: {
    height: 60,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  loginBtn: {
    width: "30%",
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    color: colors.light,
    justifyContent: "center",
    backgroundColor: colors.light,
  },
  loginText: {
    color: colors.primary,
    fontWeight: "bold",
  },

  reg: {
    width: "70%",
    marginTop: 5,
    fontSize: 11,
    alignSelf: "flex-end",
  },
  tt: {
    color: colors.light,
  },
});

const mapStateToProps = (_, ownProps) => ({
  ...ownProps
})

const mapDispatchToProps = dispatch => ({
  setUserToken: (data) => dispatch({
    type: constants.SET_TOKEN,
    payload: data
  }),
  setUserDetails: (data) => dispatch({
    type: constants.SET_USER_DETAILS,
    payload: data
  }),
  setID: (data) => dispatch({
    type: constants.SET_ID,
    payload: data
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)