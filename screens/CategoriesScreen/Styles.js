import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  title: {
    color: colors.primary,
    fontSize: 13,
  },
  subtitle: {
    color: "#666",
  },
  headerContainer: {
    padding: 10,
    backgroundColor: colors.light,
  },
  header: {
    color: colors.primary,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  categoryList: {
    marginVertical: 5,
    shadowColor: "#555",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.36,
    shadowRadius: 1.46,
  },
});
