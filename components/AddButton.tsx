import { FontAwesome } from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type AddButtonProps = {
  onPress?: () => void;
};

const AddButton: FC<AddButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome name="plus" size={15} style={styles.button} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#ba6d00",
    textAlign: "center",
    textAlignVertical: "center",
    color: "#ffffff",
    borderRadius: 50,
    position: "absolute",
    bottom: 15,
    right: 15,
  },
});

export default AddButton;
