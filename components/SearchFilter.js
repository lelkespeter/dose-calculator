import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Alert,
  Button,
} from "react-native";
import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";

import {DRUGS} from "../constants/data";

const SearchFilter = () => {
  const {searchQuery, bodyWeight, setSearchQuery, searchHandler} =
    useContext(AppContext);

  function resultHandler() {
    if (!searchQuery) {
      Alert.alert("Search?", "Please enter a query");
      return null;
    }

    const matches = DRUGS.filter((drug) =>
      drug.drugName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (matches.length === 0) {
      return <Text>No results found.</Text>;
    }

    const renderItem = ({item}) => <Text>{item.drugName}</Text>;

    return (
      <FlatList
        data={matches}
        renderItem={renderItem}
        keyExtractor={(item) => item.drugId}
      />
    );
  }

  function submitHandler() {
    setSearchQuery(searchQuery);
  }

  return (
    <>
      <View>
        <View style={{marginVertical: 9, paddingLeft: 21}}>
          <Text style={{color: "white"}}>Välj läkemedel</Text>
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
        <View>
          <Text style={{color: "red"}}>{searchQuery}</Text>
        </View>
        <View>
          <Button color="white" title="Submit" onPress={submitHandler} />
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
});
