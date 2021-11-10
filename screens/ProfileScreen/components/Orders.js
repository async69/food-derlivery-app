import React, { useState, useEffect } from "react";
import { Button, KeyboardAvoidingView } from "react-native";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import { BottomSheet, Icon, Input } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../../assets/colors";
import order, { orderMapper } from "./data";
import { selectOrders, Fetch } from "../../../store/Order";
import { selectUserContent } from "../../../store/Auth";
import { Add } from "../../../store/Review/";
import { connect } from "react-redux";
import handleReview from "./handleReview";
import LoaderImage from "../../../assets/loaders/pizza.gif";

const OrderScreen = ({ orders, fetchOrders, userContent }) => {
  useEffect(() => {
    fetchOrders(userContent.id);
  }, [fetchOrders]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setItem] = useState({});
  const [content, setContent] = useState("");
  const [isLoaderVisible, enableLoader] = useState(false);

  const AddReview = async () => {
    enableLoader(true);
    const { userData } = userContent;
    await handleReview(
      {
        content,
        restaurantId: selectedItem.restaurant._id,
        customerId: userData._id,
      },
      setIsVisible,
      enableLoader
    );
  };

  const renderOrders = ({ item }) => (
    <View
      key={item.id}
      style={{
        flex: 1,
        marginHorizontal: 7,
        marginBottom: 10,
        backgroundColor: "#f9f9f9",
        paddingBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.36,
        shadowRadius: 5.46,
        elevation: 5,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setItem(item);
          // setIsVisible(true);
        }}
      >
        <Image
          style={{ width: "100%", height: 120 }}
          source={{ uri: item.image }}
        />
        <Text
          style={{
            paddingHorizontal: 10,
            marginTop: 8,
          }}
        >
          {item.food.title}
        </Text>
        <Text
          style={{
            marginTop: 8,
            fontSize: 10,

            color: colors.primary,
            paddingHorizontal: 10,
          }}
        >
          {item.restaurant ? item.restaurant.title : ""}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              marginTop: 8,
              fontSize: 10,

              color: colors.primary,
              paddingHorizontal: 10,
            }}
          >
            Status : {item.status}
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 10,

              color: colors.primary,
              paddingHorizontal: 10,
            }}
          >
            {item.status === "deliverd" && (
              <TouchableOpacity
                onPress={() => {
                  setIsVisible(true);
                  setItem(item);
                }}
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 20,
                  borderColor: "gold",
                  borderWidth: 1.5,
                }}
              >
                <Icon color={colors.primary} size={10} name="star" />
              </TouchableOpacity>
            )}
          </Text>
        </View>
      </TouchableOpacity>

      <BottomSheet
        isVisible={isVisible}
        style={{
          backgroundColor: "rgba(0.1, 0.1, 0, 0.4)",
          height: "100%",
        }}
      >
        <KeyboardAvoidingView
          style={{
            flex: 1,
            // marginBottom: 50,
            marginHorizontal: 20,
          }}
          behavior="padding"
          enabled={true}
        >
          <View
            style={{
              backgroundColor: colors.light,
              paddingHorizontal: 20,
              paddingVertical: 10,
              alignContent: "center",
              alignItems: "center",
              borderTopColor: colors.primary,
              borderTopWidth: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: colors.primary,
              }}
            >
              Review{" "}
              {selectedItem.restaurant ? selectedItem.restaurant.title : ""}
            </Text>
          </View>
          <Image
            style={{ width: "100%", height: 120 }}
            source={{ uri: item.image }}
          />
          <View
            style={{
              backgroundColor: colors.light,
              paddingHorizontal: 20,
              paddingVertical: 10,
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: colors.primary,
              }}
            >
              {selectedItem.title}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: colors.light,
              paddingHorizontal: 20,
              paddingVertical: 10,
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Input
              style={{
                backgroundColor: colors.light,
                paddingHorizontal: 20,
                paddingVertical: 10,
                fontSize: 11,
                alignContent: "center",
                alignItems: "center",
              }}
              placeholder="Review"
              onChangeText={(text) => setContent(text)}
            />
          </View>
          {isLoaderVisible ? (
            <Image
              style={{ width: 70, height: 70, marginLeft: 130, marginTop: 20 }}
              source={LoaderImage}
            />
          ) : (
            <View
              style={{
                backgroundColor: colors.light,
                paddingHorizontal: 20,
                paddingVertical: 10,
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Button onPress={AddReview} title="Submit" />
              <TouchableOpacity
                onPress={() => setIsVisible(false)}
                style={{
                  backgroundColor: "red",
                  paddingHorizontal: 20,
                }}
              >
                <Button color="white" title="Cancel" />
              </TouchableOpacity>
            </View>
          )}
        </KeyboardAvoidingView>
      </BottomSheet>
    </View>
  );
  const { userData } = userContent;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={orderMapper(
          orders.filter((order) => order.customer._id === userData.user_id),
          userContent.currentScreen
        )}
        renderItem={renderOrders}
        keyExtractor={(item) => item.id}
        numColumns={1}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 10 }}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  orders: selectOrders(state),
  userContent: selectUserContent(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(Fetch()),
  // addReview: (data) => dispatch(Add(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderScreen);
