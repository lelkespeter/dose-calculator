import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Alert,
  Button,
} from "react-native";
import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "../context/AppContext";

import {DRUGS} from "../constants/data";
import LMItem from "./LMItem";

const SearchFilter = () => {
  const {searchQuery, bodyWeight, setSearchQuery, searchHandler} =
    useContext(AppContext);

  function resultHandler() {
    if (!searchQuery) {
      return null;
    } else if (!bodyWeight) {
      Alert.alert("Vikten måste skrivas in!");
      return null;
    }

    const firstLetterMatches = DRUGS.filter(
      (drug) =>
        drug.drugName.charAt(0).toLowerCase() === searchQuery.toLowerCase()
    );

    if (firstLetterMatches.length > 0) {
      const exactMatches = firstLetterMatches.filter(
        (drug) => drug.drugName.toLowerCase() === searchQuery.toLowerCase()
      );
      if (exactMatches.length > 0) {
        // Render exact matches
        const renderItem = ({item}) => (
          <>
            <LMItem
              drugName={item.drugName}
              styrka={item.styrka}
              drugId={item.drugId}
            />
          </>
        );
        return (
          <FlatList
            data={exactMatches}
            renderItem={renderItem}
            keyExtractor={(item) => item.drugId}
          />
        );
      } else {
        // Render first letter matches
        const renderItem = ({item}) => (
          <>
            <LMItem
              drugName={item.drugName}
              styrka={item.styrka}
              drugId={item.drugId}
            />
          </>
        );
        return (
          <FlatList
            data={firstLetterMatches}
            renderItem={renderItem}
            keyExtractor={(item) => item.drugId}
          />
        );
      }
    } else {
      // Render matches with searchQuery in drugName
      const matches = DRUGS.filter((drug) =>
        drug.drugName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (matches.length === 0) {
        return <Text style={styles.text}>No results found.</Text>;
      }
      const renderItem = ({item}) => (
        <>
          <LMItem
            drugName={item.drugName}
            styrka={item.styrka}
            drugId={item.drugId}
          />
        </>
      );
      return (
        <FlatList
          data={matches}
          renderItem={renderItem}
          keyExtractor={(item) => item.drugId}
        />
      );
    }
  }

  return (
    <>
      <View>
        <View style={{marginVertical: 9, paddingLeft: 21}}>
          <Text style={styles.text}>1) Sök ett Läkemedel</Text>
        </View>
        <View style={{marginBottom: 17}}>
          <TextInput
            style={styles.input}
            onChangeText={searchHandler}
            value={searchQuery}
            placeholder="Vilket läkemedel?"
            placeholderTextColor="#02200e"
            autoCapitalize="words"
            autoCorrect={false}
          />
        </View>

        <View>{resultHandler()}</View>
      </View>
    </>
  );
};

export default SearchFilter;
const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 3,
    marginBottom: 11,
    marginHorizontal: 22,
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: "#bdeacf",
    padding: 10,
    color: "green",
    fontSize: 17,
    fontWeight: "bold",
  },
  text: {
    color: "#faf6f6",
    fontSize: 17,
    fontWeight: "bold",
  },
});
