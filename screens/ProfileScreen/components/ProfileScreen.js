import React from "react";
import { styles } from "../Style";
import { View, Text } from "react-native";
import { Divider, Icon, ListItem } from "react-native-elements";
import { colors } from "../../../assets/colors";
import { Avatar } from "react-native-elements";
import Image from "../../../assets/Avatar.jpg";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {
  selectUserContent,
  constants,
  screenTypes,
} from "../../../store/Auth/";
import { connect } from "react-redux";

const Utils = [
  {
    id: "1",
    title: "Pending Orders",
    icon: "pending",
    type: screenTypes.PENDING,
  },
  {
    id: "2",
    title: "Completed Orders",
    icon: "list",
    type: screenTypes.COMPLETED,
  },
  {
    id: "3",
    title: "Logout",
    icon: "logout",
    type: "logout",
  },
];

const ProfileScreen = ({ navigation, userContent, setCurrentScreen }) => {
  const PressHandler = (type) => {
    setCurrentScreen(type);
    if (type === "logout") {
      navigation.navigate("Login");
    }
    navigation.navigate("Orders");
  };

  const { userData } = userContent;
  console.log(userContent);
  return (
    <View style={styles.container}>
      <View style={styles.personalInfo}>
        <Avatar rounded size={200} source={Image} />
        <Text style={styles.name}>
          {userData.first_name + " " + userData.last_name}
        </Text>
      </View>
      <Divider
        style={{
          marginVertical: 15,
          backgroundColor: colors.primary,
          opacity: "50%",
          marginHorizontal: 60,
        }}
      />
      <ScrollView>
        {Utils.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={styles.utilities}
            onPress={() => PressHandler(item.type)}
          >
            <ListItem bottomDivider style={styles.categoryList}>
              <Icon color={colors.primary} name={item.icon} />
              <ListItem.Content>
                <ListItem.Subtitle style={styles.subtitle}>
                  {item.title}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  userContent: selectUserContent(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentScreen: (data) =>
    dispatch({
      type: constants.SET_CURRENT_SCREEN,
      payload: data,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
