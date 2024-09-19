import React, { useState } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet } from 'react-native';

const TaskList = ({ tasks, addTask, removeTask }) => {
  const [newTask, setNewTask] = useState('');
  const [category, setCategory] = useState('General'); 
  const handleAddTask = () => {
    if (newTask) {
      addTask({ id: Date.now().toString(), task: newTask, category });
      setNewTask('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add new task"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text>{item.task} - {item.category}</Text>
            <Button title="Delete" onPress={() => removeTask(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default TaskList;
