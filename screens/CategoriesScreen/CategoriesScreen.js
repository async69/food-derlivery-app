import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { styles } from "./Styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { selectCategories, Fetch } from "../../store/Categories"
import { constants } from "../../store/Buffer"
import { connect } from "react-redux"

const Categories = ({ navigation, categories, fetchCategories, setCurrentCategory }) => {
  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  const PressHandler = (category) => {
    setCurrentCategory(category._id)
    navigation.navigate("Foods");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {categories.map((category, idx) => (
          <TouchableOpacity key={idx} onPress={() => PressHandler(category)}>
            <ListItem bottomDivider style={styles.categoryList}>
              <Avatar source={{ uri: category.image }} />
              <ListItem.Content>
                <ListItem.Title style={styles.title}>{category.name}</ListItem.Title>
                <ListItem.Subtitle style={styles.subtitle}>
                  {category.subtitle}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};


const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  categories: selectCategories(state)
})

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(Fetch()),
  setCurrentCategory: (data) => dispatch({
    type: constants.SET_CURRENT_CATEGORY,
    payload: data
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
