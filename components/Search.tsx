import { FC, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type SearchProps = {
  onChange?: (text: string) => void;
};

const Search: FC<SearchProps> = ({ onChange }) => {
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    onChange?.(searchKey);
  }, [searchKey]);

  return (
    <View style={styles.searchWrapper}>
      <TextInput
        style={styles.searchInput}
        placeholder="Enter search key"
        onChangeText={setSearchKey}
        value={searchKey}
      />
      <TouchableOpacity onPress={() => setSearchKey("")}>
        <Text style={styles.clearButton}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    height: 150,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    gap: 10,
  },
  searchInput: {
    flexGrow: 1,
    textAlign: "left",
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: "#006e00",
    borderRadius: 5,
  },
  clearButton: {
    backgroundColor: "#006e00",
    height: 40,
    paddingHorizontal: 15,
    color: "white",
    textAlignVertical: "center",
    borderRadius: 5,
  },
});

export default Search;
