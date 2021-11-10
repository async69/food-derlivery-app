import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { Icon, Image, ListItem } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../assets/colors";
import { styles } from "./Styles";
import { selectReviews, Fetch } from "../../store/Review";
import { selectBufferContent } from "../../store/Buffer";
import { connect } from "react-redux";

const Reviews = ({ reviews, fetchReviews, navigation, bufferContent }) => {
  const PressHandler = () => {
    navigation.navigate("Reviews");
  };

  console.log("content", bufferContent);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text
        style={{
          fontSize: 17,
          alignSelf: "center",
          fontWeight: "bold",
          color: colors.primary,
          paddingBottom: 20,
        }}
      >
        Recent Reveiws for {bufferContent.currentData}
      </Text>
      <View
        style={{
          paddingBottom: 10,
        }}
      >
        <Image
          style={{ width: "100%", height: 150 }}
          source={{ uri: bufferContent.currentObject.image }}
        />
      </View>
      <ScrollView>
        {reviews
          .filter((r) => r.restaurant._id === bufferContent.currentObject._id)
          .map((review, idx) => (
            <TouchableOpacity key={idx} onPress={PressHandler}>
              <ListItem bottomDivider style={styles.categoryList}>
                <Icon name="person" />
                <ListItem.Content>
                  <ListItem.Title style={styles.title}>
                    {review.customer.first_name +
                      " " +
                      review.customer.first_name}
                  </ListItem.Title>
                  <ListItem.Subtitle style={styles.subtitle}>
                    {review.content}
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
  reviews: selectReviews(state),
  bufferContent: selectBufferContent(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviews: (data) => dispatch(Fetch(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
