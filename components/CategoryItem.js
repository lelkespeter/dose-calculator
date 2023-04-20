import {Pressable, StyleSheet, Text, View, Platform} from "react-native";
import React from "react";

const CategoryItem = ({catName, onPress}) => {
  return (
    <>
      <View style={styles.outerContainer}>
        <Pressable
          android_ripple={{color: "#808080"}}
          style={({pressed}) => [
            styles.btn,
            pressed ? styles.btnPressed : null,
          ]}
          onPress={onPress}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.nameText}>{catName}</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    margin: 17,
    height: 77,
    borderRadius: 7,
    elevation: 5,
    backgroundColor: "white",
    shadowOffset: {width: 0, height: 7},
    shadowColor: "black",
    shadowOpacity: 0.44,
    shadowRadius: 7,
    overflow: Platform === "android" ? "hidden" : "visible",
  },
  btn: {
    flex: 1,
  },
  btnPressed: {
    opacity: 0.55,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 17,
  },
});
