import AntDesign from "@expo/vector-icons/AntDesign";
import { FC, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type AddModalProps = {
  onSubmit?: (value: string) => void;
  visible?: boolean;
  handleClose?: () => void;
};

const AddModal: FC<AddModalProps> = ({ onSubmit, visible, handleClose }) => {
  const [value, setValue] = useState("");

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.modelHead}>
        <Text style={styles.modelTitle}>Add modal</Text>
        <TouchableOpacity onPress={handleClose}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.modelContent}>
        <TextInput
          style={styles.addInput}
          placeholder="Enter your value"
          value={value}
          onChangeText={setValue}
        />
        <TouchableOpacity
          onPress={() => {
            onSubmit?.(value);
            setValue("");
          }}
        >
          <Text style={styles.addButton}>Add</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modelHead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  modelTitle: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  modelContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    gap: 10,
  },
  addInput: {
    flex: 1,
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: "#c3c3c3",
    width: 50,
    height: 40,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 5,
  },
});

export default AddModal;
