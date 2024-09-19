import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskList from './screens/TaskList';
import Categories from './screens/Categories';

const Tab = createBottomTabNavigator();

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tasks">
          {(props) => <TaskList {...props} tasks={tasks} addTask={addTask} removeTask={removeTask} />}
        </Tab.Screen>
        <Tab.Screen name="Categories" component={Categories} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
