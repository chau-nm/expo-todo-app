import { DataType } from "@/common/types";
import AddButton from "@/components/AddButton";
import AddModal from "@/components/AddModal";
import DataList from "@/components/DataList";
import Search from "@/components/Search";
import { useEffect, useState } from "react";
import { View } from "react-native";

const dataDefault: DataType[] = [
  {
    id: "1",
    value: "Data 1",
  },
  {
    id: "2",
    value: "Data 2",
  },
  {
    id: "3",
    value: "Data 3",
  },
  {
    id: "4",
    value: "Data 4",
  },
];

const App = () => {
  const [data, setData] = useState<DataType[]>(dataDefault);
  const [searchData, setSearchData] = useState<DataType[]>([]);
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);

  useEffect(() => {
    setSearchData(data);
  }, []);

  const handleSearch = (searchKey: string) => {
    const searchResult = data.filter((item) =>
      item.value.toLowerCase().includes(searchKey.toLowerCase())
    );
    setSearchData(searchResult);
  };

  const handleRemove = (removeItem: DataType) => {
    const removeResult = data.filter((item) => item.id !== removeItem.id);
    const searchDataResult = searchData.filter(
      (item) => item.id !== removeItem.id
    );
    setData(removeResult);
    setSearchData(searchDataResult);
  };

  const handleAdd = (value: string) => {
    const dataAdd: DataType = {
      id: String(Math.floor(Math.random() * 1000)),
      value,
    };

    const newData = [...data, dataAdd];
    setData(newData);
    setSearchData(newData);
    setOpenAddModal(false);
  };

  return (
    <View style={{ height: "100%" }}>
      <Search onChange={handleSearch} />
      <DataList data={searchData} onTrash={handleRemove} />
      <AddButton onPress={() => setOpenAddModal(true)} />
      <AddModal
        visible={openAddModal}
        handleClose={() => setOpenAddModal(false)}
        onSubmit={handleAdd}
      />
    </View>
  );
};

export default App;
