import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  h4: {
    fontWeight: "bold",
    padding: 10,
    color: colors.primary,
  },
  divider: {
    color: colors.primary,
    marginBottom: 5,
  },
  foodCard: {
    // paddingBottom: 10,
    borderRadius: 20,
  },
  foodName: {
    color: colors.primary,
  },
  foodPriceContainer: {
    marginTop: 13,

    // color: colors.primary,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  foodPrice: {
    marginTop: 13,

    color: colors.primary,
  },
  category: {
    fontSize: 12,
    color: "#aaa",
  },
  rating: {
    fontSize: 10,
  },
  loaderBox: {
    width: 20,
    height: 20
  }
});
