import { StyleSheet } from "react-native"
import { colors } from "../../assets/colors";

export default StyleSheet.create({
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
  loginText: {
    color: colors.primary,
    fontWeight: "bold",
  },
});