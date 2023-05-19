import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import TodoItem from "./TodoItem";

export default function App() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");

  const inputHandler = (input) => {
    setTodo(input);
  };
  const addHandler = () => {
    if (todo !== "") {
      setList((data) => [
        ...data,
        { title: todo, id: Math.random().toString() },
      ]);
      setTodo("");
    }
  };
  const deleteHandler = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.pageTitle}>Todo List</Text>
        <View style={styles.flexRow}>
          <TextInput
            style={styles.todoInput}
            value={todo}
            onChangeText={inputHandler}
            placeholder="add your todo"
          />
          <Button
            style={styles.addButton}
            onPress={addHandler}
            title="Add New"
          />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={list}
          renderItem={(data) => (
            <TodoItem data={data} deleteHandler={deleteHandler} />
          )}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: StatusBar.currentHeight,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  todoInput: {
    flex: 1,
    marginRight: 15,
    padding: 5,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  addButton: { width: 100 },
  pageTitle: {
    marginTop: 40,
    marginBottom: 20,
    textAlign: "center",
  },
});
