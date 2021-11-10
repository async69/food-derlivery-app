import React, { useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { styles } from "./Styles";
import { colors } from "../../assets/colors";
import { Ionicons } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { selectRestaurants, Fetch } from "../../store/Restaurant/"
import { constants } from "../../store/Buffer"
import { connect } from "react-redux"

const RestuarantPage = ({ navigation, restaurants, fetchRestaurants, setCurrentRestaurant, setRestaurantName, setCurrentObject }) => {
  const PressHandler = (restaurant) => {
    setCurrentRestaurant(restaurant._id)
    navigation.navigate("Foods");
  };

  const ReviewHandler = (restaurant) => {
    setRestaurantName(restaurant.title)
    setCurrentObject(restaurant)
    navigation.navigate("Reviews")
  }

  useEffect(() => {
    fetchRestaurants()
  }, [fetchRestaurants])

  return (
    <ScrollView style={styles.scrollView}>
      <View>
        {restaurants.map((restaurant, index) => {
          return (
            <TouchableOpacity
              style={{
                shadowColor: "#333",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.36,
                shadowRadius: 3.46,
              }}
              key={index}
              onPress={() => PressHandler(restaurant)}
            >
              <Card style={styles.foodCard}>
                <Card.Title style={styles.header}>{restaurant.title}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: restaurant.image }}></Card.Image>
                <View style={styles.priceContainer}>
                  <Text style={styles.location}>
                    <Ionicons
                      name="location"
                      color={colors.primary}
                      size={13}
                      style={{
                        marginRight: 10,
                      }}
                    />
                    {restaurant.location}
                  </Text>
                  <TouchableOpacity
                    onPress={() => ReviewHandler(restaurant)}
                  >
                    <Text style={styles.location}>
                      <Text>See Reviews</Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </Card>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const mapStateToProps = state => ({
  restaurants: selectRestaurants(state)
})

const mapDispatchToProps = dispatch => ({
  fetchRestaurants: () => dispatch(Fetch()),
  setCurrentRestaurant: (data) => dispatch({
    type: constants.SET_CURRENT_RESTAURANT,
    payload: data
  }),
  setRestaurantName: (data) => dispatch({
    type: constants.SET_CURRENT_DATA,
    payload: data
  }),
  setCurrentObject: (data) => dispatch({
    type: constants.SET_CURRENT_OBJECT,
    payload: data
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(RestuarantPage)
