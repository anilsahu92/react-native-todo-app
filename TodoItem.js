import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";

export default function TodoItem({ data, deleteHandler }) {
  return (
    <Pressable
      key={data.item.id}
      onPress={deleteHandler.bind(this, data.item.id)}
    >
      <View style={styles.todoWrapItem}>
        <Text style={styles.todoiItem}>{data.item.title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  todoiItem: {
    color: "#fff",
  },
  todoWrapItem: {
    marginTop: 5,
    padding: 8,
    backgroundColor: "#ff0000",
    borderRadius: 5,
  },
});
