import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../constants";

export const List = (props) => {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();

  function getUsers() {
    dispatch({ type: ActionTypes.GET_USERS_REQUEST });
  }

  function renderItem({ item }) {
    return (
      <View style={style.userContainer}>
        <Text>{item.name}</Text>
      </View>
    );
  }

  return (
    <View>
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          getUsers();
        }}
      >
        <Text style={style.clickText}> CLICK HERE TO GET USERS</Text>
      </TouchableOpacity>
      <FlatList
        data={users}
        renderItem={renderItem}
        ListEmptyComponent={() => <Text style={style.noUsers}>No Users..</Text>}
      />
    </View>
  );
};

const style = StyleSheet.create({
  userContainer: { marginVertical: 15, marginHorizontal: 10 },
  button: { alignSelf: "center", marginVertical: "10%" },
  clickText: { fontSize: 16 },
  noUsers: { alignSelf: "center" },
});

export default List;
