import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    // alignItems: "center",
    // paddingTop: 20,
    // justifyContent: "center",
  },
  name: {
    alignItems: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
  },
  personalInfo: {
    alignItems: "center",
    marginTop: 20,
  },
  utilities: {
    marginVertical: 5,
    backgroundColor: "#f9f9f9",
    marginHorizontal: 10,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.36,
    shadowRadius: 3.46,
  },
  subtitle: {
    borderRadius: 100,
  },
});
