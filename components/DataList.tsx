import { DataType } from "@/common/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FC } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type DataListProps = {
  data: DataType[];
  onTrash?: (item: DataType) => void;
};

const DataList: FC<DataListProps> = ({ data, onTrash }) => {
  return (
    <FlatList
      style={styles.flatList}
      data={data}
      renderItem={({ item }) => {
        return (
          <View style={styles.item}>
            <Text style={{ color: "#ffffff" }}>{item.value}</Text>
            <TouchableOpacity onPress={() => onTrash?.(item)}>
              <FontAwesome name="trash" size={20} color={"#ff1919"} />
            </TouchableOpacity>
          </View>
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    margin: "auto",
    padding: 20,
    width: "100%",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#006e00",
    backgroundColor: "#007506",
  },
});

export default DataList;
