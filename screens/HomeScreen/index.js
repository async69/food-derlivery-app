import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import {
  BottomSheet,
  Divider,
  Icon,
  Input,
  Button,
} from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../assets/colors";
import { Avatar, Header } from "react-native-elements";
import AvatarImage from "../../assets/Avatar.jpg";
import { Ionicons } from "react-native-vector-icons";
import { selectFoods, Fetch } from "../../store/Food/";
import { selectUserContent } from "../../store/Auth";
import { connect } from "react-redux";
import handleOrder from "../Components/handleOrder";
import LoaderImage from "../../assets/loaders/pizza.gif";

const HomeScreen = ({ fetchFoods, foods, userContent }) => {
  const [isVisible, setIsVisible] = useState(false);
<<<<<<< HEAD
  const [selectedItem, selectItem] = useState(0)
  
=======
  const [selectedItem, selectItem] = useState(0);

>>>>>>> 0637eeb80597739eb46aea3964c88639d29027d9
  useEffect(() => {
    fetchFoods();
  }, [fetchFoods]);

  const [isLoaderVisible, enableLoader] = useState(false);
  const AddOrder = async (foodID) => {
    enableLoader(true);
    await handleOrder(
      { foodID, customerID: userContent.id },
      setIsVisible,
      enableLoader
    );
  };

  const renderFoods = ({ item }) => (
    <View
      key={item._id}
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
          setIsVisible(true);
          selectItem(item);
        }}
      >
        <Image
          style={{ width: "100%", height: 120 }}
          source={{ uri: item.image }}
        />
        <Text style={{ textAlign: "center", marginTop: 8 }}>{item.title}</Text>
        <Text
          style={{
            textAlign: "center",
            marginTop: 8,
            fontSize: 10,
            color: colors.primary,
          }}
        >
          {item.price} ETB
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Header
        rightComponent={<Avatar rounded size="small" source={AvatarImage} />}
        leftComponent={
          <Ionicons name="restaurant-outline" size={29} color={colors.light} />
        }
        backgroundColor={colors.primary}
      />
      <View
        style={{
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            color: colors.primary,
            fontWeight: "900",
            marginBottom: 10,
          }}
        >
          People's Favorites
        </Text>
        <Divider />
      </View>
      <FlatList
        data={foods}
        renderItem={renderFoods}
        keyExtractor={(item) => item._id}
        numColumns={2}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingVertical: 20 }}
      />

      <BottomSheet
        isVisible={isVisible}
        containerStyle={{
          backgroundColor: "rgba(0.1, 0.1, 0, 0.4)",
        }}
      >
        <KeyboardAvoidingView
          style={{
            flex: 1,
            marginBottom: 50,
            marginHorizontal: 20,
          }}
          behavior="padding"
          enabled={true}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "flex-end",
              backgroundColor: colors.light,
              padding: 10,
              borderTopColor: colors.primary,
              borderTopWidth: 5,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "flex-end",
                marginBottom: 10,
                backgroundColor: colors.light,
              }}
              onPress={() => {
                setIsVisible(false);
              }}
            >
              <Text
                style={{
                  borderColor: colors.primary,
                  borderWidth: 1,
                  paddingVertical: 2,
                  paddingHorizontal: 10,

                  fontSize: 12,
                  color: colors.primary,
                }}
              >
                Close
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: colors.light,
            }}
          >
            <View>
              <Image
                style={{ width: "100%", height: 150 }}
                source={{ uri: selectedItem.image }}
              />
            </View>
            <View
              style={{
                marginTop: 20,
                padding: 10,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: colors.primary,
                }}
              >
                {selectedItem.title}
              </Text>
              <Divider
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  color: "#000",
                }}
              />
              <Text style={{ fontSize: 13 }}>{selectedItem.description}</Text>
              <Divider
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              />
              <View>
                <Text
                  style={{
                    color: colors.primary,
                  }}
                >
                  {selectedItem.price} ETB
                </Text>
              </View>
              <Divider
                style={{
                  paddingTop: 0,
                  paddingBottom: 0,
                  backgroundColor: "#ddd",
                }}
              />
              <Input
                placeholder="Additional Information"
                leftIcon={
                  <Icon
                    name="add"
                    size={20}
                    style={{
                      marginRight: 10,
                    }}
                    color={colors.primary}
                  />
                }
                errorStyle={{ color: "red" }}
                style={{
                  fontSize: 10,
                }}
              />
            </View>
            <View
              style={{
                marginLeft: 80,
                marginRight: 80,
                marginBottom: 20,
              }}
            >
              {isLoaderVisible ? (
                <Image
                  style={{ width: 70, height: 70, marginLeft: 60 }}
                  source={LoaderImage}
                />
              ) : (
                <Button
                  title="Order"
                  raised
                  onPress={() => AddOrder(selectedItem._id)}
                  icon={
                    <Icon
                      name="restaurant"
                      size={20}
                      style={{
                        marginRight: 10,
                      }}
                      color="white"
                    />
                  }
                  iconLeft
                />
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </BottomSheet>
    </View>
  );
};

const mapStateToProps = (state) => ({
  foods: selectFoods(state),
  userContent: selectUserContent(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchFoods: () => dispatch(Fetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
