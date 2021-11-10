import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { constants, stateName } from "../../store/Auth";
import styles from "./styles";
import handleLogin, { handleUserUpdate } from "./handleLogin";
import LoaderImage from "../../assets/loaders/pizza.gif";

const LoginScreen = ({ navigation, setUserToken, setUserDetails, setID }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoaderVisible, enableLoader] = useState(false);

  const loginHandler = async () => {
    enableLoader(true);
    const response = await handleLogin(
      {
        email,
        password,
      },
      setUserToken,
      setID,
      enableLoader
    );
    if (response.status === 200) {
      await handleUserUpdate(response.data.token, setUserDetails);
      navigation.navigate("HomeScreen");
    } else {
      Alert.alert("Incorrect Password");
    }
  };

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
          placeholder="Email / Phone Number"
          placeholderTextColor="#003f5c"
          defaultValue=""
          autoCapitalize="none"
          autoCompleteType="email"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          defaultValue=""
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
            onPress={() => loginHandler()}
          >
            <Text style={styles.loginText}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.reg}
            onPress={() => navigation.navigate("Registration")}
          >
            <Text style={styles.tt}>Don't have an account?</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  userInfo: state.entities[stateName],
});

const mapDispatchToProps = (dispatch) => ({
  setUserToken: (data) =>
    dispatch({
      type: constants.SET_TOKEN,
      payload: data,
    }),
  setUserDetails: (data) =>
    dispatch({
      type: constants.SET_USER_DETAILS,
      payload: data,
    }),
  setID: (data) =>
    dispatch({
      type: constants.SET_ID,
      payload: data,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
